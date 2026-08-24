<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { crearMedidor, listarMedidores, obtenerMedidor, type Medidor, type MedidorPayload, type Option } from '../services/medidores'

const filters = reactive({ criterio: '', procedencia_id: 0, diametro_id: 0, marca_id: 0, tipo: '', page: 1 })
const catalogs = reactive({ procedencias: [] as Option[], diametros: [] as Option[], marcas: [] as Option[], tipos: [] as Option[] })
const items = ref<Medidor[]>([])
const pagination = reactive({ current: 1, last: 1, total: 0 })
const loading = ref(false)
const saving = ref(false)
const detailLoading = ref(false)
const error = ref('')
const formError = ref('')
const success = ref('')
const formOpen = ref(false)
const detail = ref<Medidor | null>(null)
const form = reactive<MedidorPayload>({ procedencia_id: 0, numero: '', diametro_id: 0, marca_medidor_id: 0, tipo: '', fecha_fabricacion: '', fecha_instalacion: '', modelo: '', certificado_verificacion: '', observacion: '' })

async function load(page = 1) {
  filters.page = page
  loading.value = true
  error.value = ''
  try {
    const response = await listarMedidores(filters)
    items.value = response.data
    Object.assign(catalogs, response.catalogs)
    Object.assign(pagination, { current: response.current_page, last: response.last_page, total: response.total })
  } catch (cause) { error.value = cause instanceof Error ? cause.message : 'No se pudieron cargar los medidores.' }
  finally { loading.value = false }
}

function clearFilters() {
  Object.assign(filters, { criterio: '', procedencia_id: 0, diametro_id: 0, marca_id: 0, tipo: '' })
  void load()
}

function openCreate() {
  Object.assign(form, { procedencia_id: 0, numero: '', diametro_id: 0, marca_medidor_id: 0, tipo: '', fecha_fabricacion: '', fecha_instalacion: '', modelo: '', certificado_verificacion: '', observacion: '' })
  formError.value = ''
  formOpen.value = true
}

async function save() {
  formError.value = ''
  if (!form.procedencia_id || !form.numero || !form.diametro_id || !form.marca_medidor_id || !form.tipo || !form.fecha_fabricacion || !form.fecha_instalacion || form.modelo.length < 5 || form.certificado_verificacion.length < 15) {
    formError.value = 'Completa los campos obligatorios. El modelo requiere 5 caracteres y el certificado 15.'
    return
  }
  saving.value = true
  try {
    const payload = { ...form, numero: form.numero.toUpperCase(), modelo: form.modelo.toUpperCase(), certificado_verificacion: form.certificado_verificacion.toUpperCase() }
    await crearMedidor(payload)
    formOpen.value = false
    success.value = 'Medidor registrado correctamente.'
    await load(1)
  } catch (cause) { formError.value = cause instanceof Error ? cause.message : 'No se pudo registrar el medidor.' }
  finally { saving.value = false }
}

async function showDetail(item: Medidor) {
  detail.value = item
  detailLoading.value = true
  try { detail.value = await obtenerMedidor(item.id) } catch { /* La tarjeta ya contiene el resumen. */ }
  finally { detailLoading.value = false }
}

onMounted(() => load())
</script>

<template>
  <div class="meters-page">
    <nav class="breadcrumbs">
      <RouterLink to="/inicio">Inicio</RouterLink> / <RouterLink to="/modulos/comercial">Comercial</RouterLink> / <RouterLink to="/modulos/comercial/medicion">Medición</RouterLink> / Medidores</nav>
    <header class="page-header"><div class="title-icon">EV</div><div><small>Medición</small><h1>Medidores</h1><p>Registro, consulta y situación operativa de medidores.</p></div><strong v-if="pagination.total">{{ pagination.total }} registros</strong><button type="button" @click="openCreate">＋ Agregar medidor</button></header>
    <div v-if="success" class="flash"><b>✓</b>{{ success }}<button @click="success=''">×</button></div>

    <form class="filters" @submit.prevent="load()">
      <div class="filter-title"><span>⌕</span><div><b>Buscar medidor</b><small>Número de medidor, certificado y características técnicas.</small></div></div>
      <label class="search"><span>Número o certificado de verificación</span><input v-model.trim="filters.criterio" type="search" placeholder="Ingrese el número del medidor o certificado"></label>
      <div class="filter-grid">
        <label><span>Procedencia</span><select v-model="filters.procedencia_id"><option :value="0">Todas</option><option v-for="option in catalogs.procedencias" :key="option.id" :value="option.id">{{ option.nombre }}</option></select></label>
        <label><span>Diámetro</span><select v-model="filters.diametro_id"><option :value="0">Todos</option><option v-for="option in catalogs.diametros" :key="option.id" :value="option.id">{{ option.nombre }}</option></select></label>
        <label><span>Marca</span><select v-model="filters.marca_id"><option :value="0">Todas</option><option v-for="option in catalogs.marcas" :key="option.id" :value="option.id">{{ option.nombre }}</option></select></label>
        <label><span>Tipo</span><select v-model="filters.tipo"><option value="">Todos</option><option value="u">Chorro único</option><option value="m">Chorro múltiple</option></select></label>
      </div>
      <div class="actions"><button type="submit" :disabled="loading">{{ loading ? 'Buscando…' : 'Buscar' }}</button><button type="button" class="clear" @click="clearFilters">Limpiar</button></div>
    </form>

    <div v-if="error" class="notice error"><b>No se pudo obtener el listado.</b><span>{{ error }}</span><button @click="load(filters.page)">Reintentar</button></div>
    <div v-else-if="loading" class="notice"><span class="spinner"></span>Cargando medidores…</div>
    <div v-else-if="!items.length" class="notice"><b>No se encontraron medidores</b><span>Modifica los filtros o registra un medidor.</span></div>
    <section v-else class="cards">
      <article v-for="item in items" :key="item.id" class="meter-card">
        <header><span>▣</span><div><small>N.º de medidor</small><h2>{{ item.numero }}</h2></div><em :class="{ danger: item.situacion !== 'Operativo' }">{{ item.situacion }}</em></header>
        <dl><div><dt>Procedencia</dt><dd>{{ item.procedencia?.nombre || '—' }}</dd></div><div><dt>Diámetro</dt><dd>{{ item.diametro?.nombre || '—' }}</dd></div><div><dt>Marca</dt><dd>{{ item.marca?.nombre || '—' }}</dd></div><div><dt>Tipo</dt><dd>{{ item.tipo }}</dd></div><div><dt>Certificado</dt><dd>{{ item.certificado_verificacion || '—' }}</dd></div><div><dt>Ubicación</dt><dd><template v-if="item.conexion_id">Conexión {{ item.conexion?.codigo || item.conexion_id }} <b v-if="item.reservado">Reservado</b></template><span v-else>Disponible</span></dd></div></dl>
        <button type="button" @click="showDetail(item)">Ver detalle</button>
      </article>
    </section>
    <footer v-if="pagination.last>1" class="pagination"><button :disabled="pagination.current===1" @click="load(pagination.current-1)">Anterior</button><span>Página {{ pagination.current }} de {{ pagination.last }}</span><button :disabled="pagination.current===pagination.last" @click="load(pagination.current+1)">Siguiente</button></footer>

    <div v-if="formOpen" class="backdrop" @mousedown.self="formOpen=false">
      <section class="modal form-modal">
          <header>
            <div class="modal-icon">▣</div>
            <div><small>Medición</small><h2>Registro de nuevo medidor</h2></div>
            <button :disabled="saving" @click="formOpen=false">×</button>
          </header>
          <form @submit.prevent="save">
            <div v-if="formError" class="form-error">{{ formError }}</div>
            <div class="form-grid">
              <label><span>Procedencia *</span>
                <select v-model="form.procedencia_id">
                  <option :value="0">Seleccione…</option>
                  <option v-for="o in catalogs.procedencias" :key="o.id" :value="o.id">{{ o.nombre }}</option>
                </select>
              </label>
              <label>
                <span>Número *</span>
                <input v-model.trim="form.numero" minlength="7" placeholder="Número del medidor"></label>
                <label><span>Diámetro *</span>
                  <select v-model="form.diametro_id">
                    <option :value="0">Seleccione…</option>
                    <option v-for="o in catalogs.diametros" :key="o.id" :value="o.id">{{ o.nombre }}</option>
                  </select>
                </label>
                <label><span>Marca *</span>
                  <select v-model="form.marca_medidor_id">
                    <option :value="0">Seleccione…</option>
                    <option v-for="o in catalogs.marcas" :key="o.id" :value="o.id">{{ o.nombre }}</option>
                  </select>
                </label>
                <label><span>Tipo *</span>
                  <select v-model="form.tipo">
                    <option value="">Seleccione…</option>
                    <option value="u">Chorro único</option>
                    <option value="m">Chorro múltiple</option>
                  </select>
                </label>
                <label><span>Fecha fabricación *</span>
                  <input v-model="form.fecha_fabricacion" type="date">
                </label>
                <label><span>Fecha instalación *</span>
                  <input v-model="form.fecha_instalacion" type="date">
                </label>
                <label><span>Modelo *</span>
                  <input v-model.trim="form.modelo" minlength="5" placeholder="Código del modelo">
                </label>
                <label><span>Certificado *</span>
                  <input v-model.trim="form.certificado_verificacion" minlength="15" placeholder="N.º del certificado">
                </label>
                <label class="wide"><span>Observaciones</span>
                  <textarea v-model.trim="form.observacion" rows="4"></textarea>
                </label>
              </div>
            <footer>
              <button type="button" class="cancel" @click="formOpen=false">Cancelar</button>
              <button type="submit" :disabled="saving">{{ saving ? 'Guardando…' : 'Registrar' }}</button>
            </footer>
          </form>
      </section>
    </div>

    <div v-if="detail" class="backdrop" @mousedown.self="detail=null"><section class="modal detail-modal"><header><div class="modal-icon">▣</div><div><small>Detalle del medidor</small><h2>{{ detail.numero }}</h2></div><em>{{ detail.situacion }}</em><button @click="detail=null">×</button></header><div class="detail-body"><span v-if="detailLoading" class="detail-loading">Actualizando información…</span><dl><div><dt>Código interno</dt><dd>{{ detail.id }}</dd></div><div><dt>Procedencia</dt><dd>{{ detail.procedencia?.nombre || '—' }}</dd></div><div><dt>Marca</dt><dd>{{ detail.marca?.nombre || '—' }}</dd></div><div><dt>Tipo</dt><dd>{{ detail.tipo }}</dd></div><div><dt>Diámetro</dt><dd>{{ detail.diametro?.nombre || '—' }}</dd></div><div><dt>Fabricación</dt><dd>{{ detail.fecha_fabricacion || '—' }}</dd></div><div><dt>Modelo</dt><dd>{{ detail.modelo || '—' }}</dd></div><div><dt>Certificado</dt><dd>{{ detail.certificado_verificacion || '—' }}</dd></div><div><dt>Lectura inicial</dt><dd>{{ detail.lectura_inicial ?? '—' }}</dd></div><div><dt>Fecha instalación</dt><dd>{{ detail.fecha_instalacion || '—' }}</dd></div><div><dt>Conexión</dt><dd>{{ detail.conexion?.codigo || 'Sin conexión asignada' }}</dd></div></dl></div></section></div>
  </div>
</template>

<style scoped>
.meters-page{--green:#16885d;color:#35454d}.breadcrumbs{margin-bottom:17px;color:#98a4aa;font-size:.7rem}.breadcrumbs a{color:var(--green);text-decoration:none}.page-header{padding:22px 25px;display:flex;align-items:center;gap:15px;border-radius:13px;background:#fff;border-left:5px solid var(--green);box-shadow:0 5px 20px #2b45530d}.title-icon,.modal-icon{display:grid;place-items:center;flex:none;border-radius:11px;color:#fff;background:var(--green);font-weight:700}.title-icon{width:52px;height:52px}.modal-icon{width:42px;height:42px}.page-header small,.modal small{color:var(--green);font-size:.65rem;font-weight:700;text-transform:uppercase}.page-header h1{margin:2px 0;font-size:1.42rem}.page-header p{margin:0;color:#7d898f;font-size:.74rem}.page-header>strong{margin-left:auto;padding:7px 11px;border-radius:20px;color:var(--green);background:#edf8f3;font-size:.7rem}.page-header>button,.actions button,.pagination button,.notice button{padding:10px 15px;border:1px solid var(--green);border-radius:8px;color:#fff;background:var(--green);font-size:.7rem;font-weight:600}.flash{margin:15px 0 -1px;padding:12px 14px;display:flex;gap:9px;border:1px solid #b9dfce;border-radius:9px;color:#22684e;background:#eff9f4;font-size:.72rem}.flash>button{margin-left:auto;border:0;color:inherit;background:none}.filters{margin:16px 0;padding:22px;border:1px solid #e5eae8;border-radius:12px;background:#fff}.filter-title{margin-bottom:17px;display:flex;align-items:center;gap:10px}.filter-title>span{width:34px;height:34px;display:grid;place-items:center;border-radius:9px;color:var(--green);background:#edf8f3}.filter-title b,.filter-title small{display:block}.filter-title b{font-size:.85rem}.filter-title small{color:#8a969b;font-size:.65rem}.filter-grid{margin-top:13px;display:grid;grid-template-columns:repeat(4,1fr);gap:12px}label>span{display:block;margin-bottom:7px;color:#647179;font-size:.67rem;font-weight:600}input,select,textarea{width:100%;padding:0 12px;border:1px solid #dce3e0;border-radius:8px;outline:0;color:#38484f;background:#fff;font:inherit;font-size:.72rem}input,select{height:42px}textarea{padding:10px 12px;resize:vertical}input:focus,select:focus,textarea:focus{border-color:var(--green);box-shadow:0 0 0 3px #16885d14}.actions{margin-top:17px;display:flex;gap:8px}.actions .clear{color:#647179;border-color:#d5ddda;background:#fff}.notice{min-height:145px;padding:28px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;border:1px dashed #ccd7d2;border-radius:11px;color:#748188;background:#fff;font-size:.74rem}.notice.error{color:#9d3b3b;border-color:#efcaca}.spinner{width:25px;height:25px;border:2px solid #cde7dc;border-top-color:var(--green);border-radius:50%;animation:spin .7s linear infinite}.cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:15px}.meter-card{overflow:hidden;border:1px solid #dce7e2;border-radius:11px;background:#fff}.meter-card>header{padding:14px 16px;display:flex;align-items:center;gap:10px;color:#fff;background:var(--green)}.meter-card>header>span{font-size:1.2rem}.meter-card header small{font-size:.57rem;opacity:.8}.meter-card h2{margin:1px 0 0;font-size:.9rem}.meter-card header em{margin-left:auto;padding:4px 7px;border-radius:12px;color:#176a4d;background:#dff4eb;font-size:.56rem;font-style:normal}.meter-card header em.danger{color:#9a3434;background:#fde8e8}.meter-card dl{margin:0;padding:12px 16px}.meter-card dl>div,.detail-body dl>div{padding:6px 0;display:flex;justify-content:space-between;gap:12px;border-bottom:1px solid #f0f3f2;font-size:.65rem}.meter-card dt,.detail-body dt{color:#89958f}.meter-card dd,.detail-body dd{margin:0;text-align:right;overflow-wrap:anywhere}.meter-card dd>b{margin-left:4px;color:#9a6b16}.meter-card dd>span{color:#16885d}.meter-card>button{width:calc(100% - 32px);margin:0 16px 16px;padding:9px;border:0;border-radius:7px;color:#fff;background:var(--green);font-size:.66rem}.pagination{padding:20px 0;display:flex;align-items:center;justify-content:center;gap:15px}.pagination span{font-size:.7rem}.backdrop{position:fixed;z-index:100;inset:0;padding:20px;display:grid;place-items:center;background:#152d2488}.modal{width:min(100%,760px);max-height:calc(100vh - 40px);overflow:auto;border-radius:14px;background:#fff;box-shadow:0 22px 70px #10251d55}.modal>header{padding:19px 22px;display:flex;align-items:center;gap:12px;border-bottom:1px solid #e9eeec}.modal h2{margin:2px 0 0;font-size:1.05rem}.modal>header>button{margin-left:auto;border:0;color:#819089;background:none;font-size:1.5rem}.modal>header>em{margin-left:auto;color:var(--green);font-size:.67rem;font-style:normal;font-weight:700}.detail-modal>header>button{margin-left:0}.modal form,.detail-body{padding:22px}.form-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:15px}.form-grid .wide{grid-column:1/-1}.form-error{margin-bottom:16px;padding:11px;border:1px solid #efcaca;border-radius:7px;color:#a43d3d;background:#fff5f5;font-size:.68rem}.modal form>footer{margin-top:21px;display:flex;justify-content:flex-end;gap:8px}.modal form>footer button{padding:10px 16px;border:0;border-radius:7px;color:#fff;background:var(--green);font-size:.7rem}.modal form>footer .cancel{color:#63716b;background:#e9eeec}.detail-body dl{display:grid;grid-template-columns:1fr 1fr;column-gap:28px;margin:0}.detail-loading{display:block;margin-bottom:10px;color:#87948e;font-size:.65rem}@keyframes spin{to{transform:rotate(360deg)}}@media(max-width:1050px){.cards{grid-template-columns:repeat(2,1fr)}.filter-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:700px){.page-header{flex-wrap:wrap;align-items:flex-start}.page-header>strong{display:none}.page-header>button{width:100%}.cards,.filter-grid,.form-grid,.detail-body dl{grid-template-columns:1fr}.actions{flex-direction:column}}
</style>
