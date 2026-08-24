<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import type { CatalogDistrict, CatalogItem, CatalogService } from '@/interfaces/catalog'

const props = withDefaults(defineProps<{
  title: string
  singular: string
  description: string
  icon: string
  service: CatalogService
  gender?: 'm' | 'f'
  uppercase?: boolean
  showSectorMetrics?: boolean
}>(), { gender: 'm', uppercase: true, showSectorMetrics: false })

const filters = reactive({ criterio: '', distrito_id: 0, page: 1 })
const items = ref<CatalogItem[]>([])
const distritos = ref<CatalogDistrict[]>([])
const pagination = reactive({ current: 1, last: 1, total: 0 })
const loading = ref(false)
const saving = ref(false)
const error = ref('')
const success = ref('')
const modalOpen = ref(false)
const editingId = ref<number | null>(null)
const form = reactive({ distrito_id: 0, nombre: '' })
const formError = ref('')
const lowerTitle = computed(() => props.title.toLocaleLowerCase('es'))
const article = computed(() => props.gender === 'f' ? 'la' : 'el')
const ending = computed(() => props.gender === 'f' ? 'a' : 'o')
const modalTitle = computed(() => editingId.value ? `Actualizar ${props.singular}` : `Registrar ${props.singular}`)

async function load(page = 1) {
  filters.page = page
  loading.value = true
  error.value = ''
  try {
    const response = await props.service.list(filters)
    items.value = response.data
    distritos.value = response.distritos
    Object.assign(pagination, { current: response.current_page, last: response.last_page, total: response.total })
  } catch (cause) {
    error.value = cause instanceof Error ? cause.message : `No se pudieron cargar ${lowerTitle.value}.`
  } finally { loading.value = false }
}

function clearFilters() {
  Object.assign(filters, { criterio: '', distrito_id: 0 })
  void load()
}

function openCreate() {
  editingId.value = null
  Object.assign(form, { distrito_id: 0, nombre: '' })
  formError.value = ''
  modalOpen.value = true
}

function openEdit(item: CatalogItem) {
  editingId.value = item.id
  Object.assign(form, { distrito_id: item.distrito_id, nombre: item.nombre })
  formError.value = ''
  modalOpen.value = true
}

function closeModal() { if (!saving.value) modalOpen.value = false }

async function save() {
  formError.value = ''
  if (!form.distrito_id || !form.nombre.trim()) {
    formError.value = `Selecciona un distrito e ingresa el nombre de ${article.value} ${props.singular}.`
    return
  }
  saving.value = true
  try {
    const rawName = form.nombre.trim()
    const payload = { distrito_id: form.distrito_id, nombre: props.uppercase ? rawName.toUpperCase() : rawName }
    if (editingId.value) {
      await props.service.update(editingId.value, payload)
      success.value = `${props.singular} actualizad${ending.value} correctamente.`
    } else {
      await props.service.create(payload)
      success.value = `${props.singular} registrad${ending.value} correctamente.`
    }
    modalOpen.value = false
    await load(editingId.value ? filters.page : 1)
  } catch (cause) {
    formError.value = cause instanceof Error ? cause.message : `No se pudo guardar ${article.value} ${props.singular}.`
  } finally { saving.value = false }
}

async function remove(item: CatalogItem) {
  if (!props.service.remove) return
  if (!window.confirm(`¿Deseas eliminar ${article.value} ${props.singular} “${item.nombre}”?`)) return
  error.value = ''
  try {
    await props.service.remove(item.id)
    success.value = `${props.singular} eliminad${ending.value} correctamente.`
    await load(filters.page)
  } catch (cause) {
    error.value = cause instanceof Error ? cause.message : `No se pudo eliminar ${article.value} ${props.singular}.`
  }
}

onMounted(() => load())
</script>

<template>
  <div class="catalog-page">
    <nav class="breadcrumbs"><RouterLink to="/inicio">Inicio</RouterLink> / <RouterLink to="/modulos/comercial">Comercial</RouterLink> / <RouterLink to="/modulos/comercial/catastro">Catastro Comercial</RouterLink> / {{ title }}</nav>
    <header class="page-header"><div class="title-icon">EV</div><div><small>Catastro comercial</small><h1>{{ title }}</h1><p>{{ description }}</p></div><strong v-if="pagination.total">{{ pagination.total }} registros</strong><button type="button" @click="openCreate">＋ Nuevo registro</button></header>
    <div v-if="success" class="flash" role="status"><b>✓</b>{{ success }}<button type="button" aria-label="Cerrar" @click="success=''">×</button></div>

    <form class="filters" @submit.prevent="load()">
      <div class="filter-title"><span>⌕</span><div><b>Filtros de búsqueda</b><small>Busca por nombre o selecciona un distrito.</small></div></div>
      <div class="filter-grid"><label><span>Criterio de búsqueda</span><input v-model.trim="filters.criterio" type="search" placeholder="Buscar por nombre…"></label><label><span>Distrito</span><select v-model="filters.distrito_id"><option :value="0">Todos los distritos</option><option v-for="district in distritos" :key="district.id" :value="district.id">{{ district.nombre }}</option></select></label><div class="actions"><button type="submit" :disabled="loading">{{ loading ? 'Buscando…' : 'Buscar' }}</button><button type="button" class="clear" :disabled="loading" @click="clearFilters">Limpiar</button></div></div>
    </form>

    <div v-if="error" class="notice error" role="alert"><b>No se pudo obtener el listado.</b><span>{{ error }}</span><button type="button" @click="load(filters.page)">Reintentar</button></div>
    <div v-else-if="loading" class="notice"><span class="spinner"></span>Cargando {{ lowerTitle }}…</div>
    <div v-else-if="!items.length" class="notice"><b>No se encontraron registros</b><span>Modifica los filtros o registra un nuevo elemento.</span></div>

    <section v-else class="cards">
      <article v-for="item in items" :key="item.id" class="card" :class="{ inactive: !item.estado }">
        <header><span>{{ icon }}</span><div><small>#{{ item.id }}</small><h2>{{ item.nombre }}</h2></div><em :class="{ off: !item.estado }">{{ item.estado ? 'Activo' : 'Eliminado' }}</em></header>
        <div class="body"><dl><div><dt>Distrito</dt><dd>{{ item.distrito?.nombre || '—' }}</dd></div><template v-if="showSectorMetrics"><div><dt>Conexiones</dt><dd>{{ item.conexiones_count ?? '—' }}</dd></div><div><dt>Manzanas</dt><dd>{{ item.manzanas_count ?? '—' }}</dd></div></template></dl></div>
        <footer><button type="button" class="edit" @click="openEdit(item)">Editar</button><button v-if="showSectorMetrics" type="button" class="secondary" disabled title="La gestión de manzanas se migrará después">Manzanas</button><button v-if="service.remove && item.estado" type="button" class="delete" @click="remove(item)">Eliminar</button><span v-else-if="service.remove">Registro eliminado</span></footer>
      </article>
    </section>

    <footer v-if="pagination.last > 1" class="pagination"><button :disabled="pagination.current===1||loading" @click="load(pagination.current-1)">Anterior</button><span>Página {{ pagination.current }} de {{ pagination.last }}</span><button :disabled="pagination.current===pagination.last||loading" @click="load(pagination.current+1)">Siguiente</button></footer>

    <div v-if="modalOpen" class="backdrop" @mousedown.self="closeModal"><section class="modal" role="dialog" aria-modal="true" :aria-label="modalTitle"><header><div class="modal-icon">{{ icon }}</div><div><small>Catastro comercial</small><h2>{{ modalTitle }}</h2></div><button type="button" :disabled="saving" aria-label="Cerrar" @click="closeModal">×</button></header><form @submit.prevent="save"><div v-if="formError" class="form-error" role="alert">{{ formError }}</div><label><span>Distrito <b>*</b></span><select v-model="form.distrito_id" :disabled="saving"><option :value="0">Seleccione…</option><option v-for="district in distritos" :key="district.id" :value="district.id">{{ district.nombre }}</option></select></label><label><span>Nombre <b>*</b></span><input v-model.trim="form.nombre" type="text" :placeholder="`Ingrese el nombre de ${article} ${singular}`" :disabled="saving"></label><footer><button type="button" class="cancel" :disabled="saving" @click="closeModal">Cancelar</button><button type="submit" :disabled="saving">{{ saving ? 'Guardando…' : editingId ? 'Actualizar' : 'Registrar' }}</button></footer></form></section></div>
  </div>
</template>

<style scoped>
.catalog-page{--green:#16885d;color:#35454d}.breadcrumbs{margin-bottom:17px;color:#98a4aa;font-size:.7rem}.breadcrumbs a{color:var(--green);text-decoration:none}.page-header{padding:22px 25px;display:flex;align-items:center;gap:15px;border-radius:13px;background:#fff;border-left:5px solid var(--green);box-shadow:0 5px 20px #2b45530d}.title-icon{width:52px;height:52px;display:grid;place-items:center;flex:none;border-radius:12px;color:#fff;background:var(--green);font-size:.75rem;font-weight:700}.page-header small,.modal small{color:var(--green);font-size:.65rem;font-weight:700;text-transform:uppercase}.page-header h1{margin:2px 0;font-size:1.42rem}.page-header p{margin:0;color:#7d898f;font-size:.74rem}.page-header>strong{margin-left:auto;padding:7px 11px;border-radius:20px;color:var(--green);background:#edf8f3;font-size:.7rem}.page-header>button{padding:10px 14px;border:0;border-radius:8px;color:#fff;background:var(--green);font-size:.7rem;font-weight:600}.flash{margin:15px 0 -1px;padding:12px 14px;display:flex;align-items:center;gap:9px;border:1px solid #b9dfce;border-radius:9px;color:#22684e;background:#eff9f4;font-size:.72rem}.flash>button{margin-left:auto;border:0;color:inherit;background:transparent;font-size:1.1rem}.filters{margin:16px 0;padding:22px;border:1px solid #e5eae8;border-radius:12px;background:#fff}.filter-title{margin-bottom:18px;display:flex;align-items:center;gap:10px}.filter-title>span{width:34px;height:34px;display:grid;place-items:center;border-radius:9px;color:var(--green);background:#edf8f3;font-size:1.25rem}.filter-title b,.filter-title small{display:block}.filter-title b{font-size:.86rem}.filter-title small{margin-top:2px;color:#8a969b;font-size:.65rem}.filter-grid{display:grid;grid-template-columns:1.4fr 1fr auto;align-items:end;gap:13px}label>span{display:block;margin-bottom:7px;color:#647179;font-size:.68rem;font-weight:600}input,select{width:100%;height:42px;padding:0 12px;border:1px solid #dce3e0;border-radius:8px;outline:0;color:#38484f;background:#fff;font-size:.73rem}input:focus,select:focus{border-color:var(--green);box-shadow:0 0 0 3px #16885d14}.actions{display:flex;gap:8px}.actions button,.pagination button,.notice button{height:42px;padding:0 16px;border:1px solid var(--green);border-radius:7px;color:#fff;background:var(--green);font-size:.7rem;font-weight:600}.actions .clear{color:#647179;border-color:#d5ddda;background:#fff}button:disabled{cursor:wait;opacity:.55}.notice{min-height:145px;padding:28px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;border:1px dashed #ccd7d2;border-radius:11px;color:#748188;background:#fff;font-size:.74rem}.notice b{color:#46565e;font-size:.85rem}.notice.error{color:#9d3b3b;border-color:#efcaca;background:#fffafa}.notice.error button{margin-top:6px;border-color:#b94b4b;background:#b94b4b}.spinner{width:25px;height:25px;border:2px solid #cde7dc;border-top-color:var(--green);border-radius:50%;animation:spin .7s linear infinite}.cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:15px}.card{overflow:hidden;border:1px solid #dce7e2;border-top:3px solid #20a477;border-radius:11px;background:#fff;box-shadow:0 4px 14px #314c3f0a}.card.inactive{opacity:.72;border-top-color:#9da8a3}.card>header{padding:16px;display:flex;align-items:center;gap:10px;border-bottom:1px solid #edf1ef}.card>header>span{width:36px;height:36px;display:grid;place-items:center;border-radius:9px;color:var(--green);background:#edf8f3}.card header small{color:#98a49f;font-size:.58rem}.card h2{margin:2px 0 0;font-size:.88rem}.card header em{margin-left:auto;padding:4px 7px;border-radius:12px;color:#16734f;background:#e8f7f0;font-size:.57rem;font-style:normal;font-weight:600}.card header em.off{color:#68736e;background:#edf0ef}.body{padding:10px 16px}.body dl{margin:0}.body dl>div{padding:7px 0;display:flex;justify-content:space-between;border-bottom:1px solid #f0f3f2;font-size:.68rem}.body dt{color:#89958f}.body dd{margin:0;font-weight:600}.card>footer{padding:8px 16px 16px;display:flex;flex-wrap:wrap;gap:7px}.card>footer button{min-height:35px;flex:1;border:0;border-radius:7px;color:#fff;font-size:.62rem;font-weight:600}.card .edit{background:var(--green)}.card .secondary{color:#725416;background:#f4ce72}.card .delete{background:#c65757}.card>footer span{width:100%;padding:9px;border-radius:7px;color:#6f7a75;background:#edf0ef;text-align:center;font-size:.62rem}.pagination{padding:20px 0;display:flex;align-items:center;justify-content:center;gap:15px}.pagination span{color:#748188;font-size:.7rem}.pagination button:disabled{color:#9ba6a1;border-color:#d4ddda;background:#edf1ef}.backdrop{position:fixed;z-index:100;inset:0;padding:20px;display:grid;place-items:center;background:#152d2488}.modal{width:min(100%,500px);overflow:hidden;border-radius:14px;background:#fff;box-shadow:0 22px 70px #10251d55}.modal>header{padding:20px 22px;display:flex;align-items:center;gap:12px;border-bottom:1px solid #e9eeec}.modal-icon{width:40px;height:40px;display:grid;place-items:center;border-radius:10px;color:#fff;background:var(--green)}.modal h2{margin:2px 0 0;font-size:1.05rem}.modal>header>button{margin-left:auto;border:0;color:#819089;background:transparent;font-size:1.5rem}.modal form{padding:22px}.modal form label{display:block;margin-bottom:17px}.modal form label b{color:#c24d4d}.modal form footer{margin-top:23px;display:flex;justify-content:flex-end;gap:8px}.modal form footer button{min-width:105px;padding:10px 15px;border:0;border-radius:7px;color:#fff;background:var(--green);font-size:.7rem;font-weight:600}.modal form footer .cancel{color:#63716b;background:#e9eeec}.form-error{margin-bottom:17px;padding:11px 12px;border:1px solid #efcaca;border-radius:7px;color:#a43d3d;background:#fff5f5;font-size:.68rem}@keyframes spin{to{transform:rotate(360deg)}}@media(max-width:1050px){.cards{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:720px){.page-header{align-items:flex-start;flex-wrap:wrap}.page-header>strong{display:none}.page-header>button{width:100%}.filter-grid,.cards{grid-template-columns:1fr}.actions{flex-direction:column}.actions button{width:100%}}
</style>
