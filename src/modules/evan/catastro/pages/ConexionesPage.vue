<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import {
  listarConexiones,
  type CatalogOption,
  type Conexion,
  type ConexionFilters,
} from '../services/conexiones'

const filters = reactive<ConexionFilters>({
  criterio: '',
  distrito_id: 0,
  tipo_facturacion_id: 0,
  categoria_id: 0,
  servicio_id: 0,
  page: 1,
})
const conexiones = ref<Conexion[]>([])
const catalogs = reactive({
  distritos: [] as CatalogOption[],
  tipos_facturacion: [] as CatalogOption[],
  categorias: [] as CatalogOption[],
  servicios: [] as CatalogOption[],
})
const pagination = reactive({ current: 1, last: 1, total: 0, perPage: 15 })
const loading = ref(false)
const error = ref('')

async function load(page = 1) {
  filters.page = page
  loading.value = true
  error.value = ''
  try {
    const response = await listarConexiones(filters)
    conexiones.value = response.data
    pagination.current = response.current_page
    pagination.last = response.last_page
    pagination.total = response.total
    pagination.perPage = response.per_page
    Object.assign(catalogs, response.filtros)
  } catch (cause) {
    error.value = cause instanceof Error ? cause.message : 'No se pudieron cargar las conexiones.'
  } finally {
    loading.value = false
  }
}

function clearFilters() {
  filters.criterio = ''
  filters.distrito_id = 0
  filters.tipo_facturacion_id = 0
  filters.categoria_id = 0
  filters.servicio_id = 0
  void load()
}

onMounted(() => load())
</script>

<template>
  <div class="connections-page">
    <nav class="breadcrumbs">
      <RouterLink to="/inicio">Inicio</RouterLink> /
      <RouterLink to="/modulos/comercial">Comercial</RouterLink> /
      <RouterLink to="/modulos/comercial/catastro">Catastro Comercial</RouterLink> /
      Conexiones
    </nav>

    <header class="page-header">
      <div class="title-icon">EV</div>
      <div><small>Catastro comercial</small><h1>Conexiones</h1><p>Consulta de conexiones y suministros registrados.</p></div>
      <strong v-if="pagination.total">{{ pagination.total.toLocaleString() }} registros</strong>
    </header>

    <form class="filters" @submit.prevent="load()">
      <div class="filter-title"><span>⌕</span><div><b>Buscar conexión</b><small>Utiliza uno o varios filtros para acotar los resultados.</small></div></div>
      <label class="search-field">
        <span>Código de conexión o nombre del cliente</span>
        <input v-model.trim="filters.criterio" type="search" placeholder="Ingrese el número de conexión o el nombre del cliente" />
      </label>
      <div class="filter-grid">
        <label><span>Sucursal</span><select v-model="filters.distrito_id"><option :value="0">TODAS</option><option v-for="item in catalogs.distritos" :key="item.id" :value="item.id">{{ item.nombre }}</option></select></label>
        <label><span>Tipo de facturación</span><select v-model="filters.tipo_facturacion_id"><option :value="0">TODOS</option><option v-for="item in catalogs.tipos_facturacion" :key="item.id" :value="item.id">{{ item.nombre }}</option></select></label>
        <label><span>Categoría</span><select v-model="filters.categoria_id"><option :value="0">TODAS</option><option v-for="item in catalogs.categorias" :key="item.id" :value="item.id">{{ item.nombre }}</option></select></label>
        <label><span>Servicio</span><select v-model="filters.servicio_id"><option :value="0">TODOS</option><option v-for="item in catalogs.servicios" :key="item.id" :value="item.id">{{ item.nombre }}</option></select></label>
      </div>
      <div class="actions"><button type="submit" :disabled="loading">{{ loading ? 'Buscando…' : 'Buscar' }}</button><button type="button" class="clear" :disabled="loading" @click="clearFilters">Limpiar</button></div>
    </form>

    <div v-if="error" class="notice error" role="alert"><b>No se pudo obtener el listado.</b><span>{{ error }}</span><button type="button" @click="load(filters.page)">Reintentar</button></div>
    <div v-else-if="loading" class="notice"><span class="spinner"></span>Cargando conexiones…</div>
    <div v-else-if="!conexiones.length" class="notice"><b>No se encontraron conexiones</b><span>Prueba modificando los criterios de búsqueda.</span></div>

    <section v-else class="cards">
      <article v-for="conexion in conexiones" :key="conexion.id" class="connection-card">
        <header><span>⑂</span><b>{{ conexion.codigo }}</b></header>
        <div class="card-body">
          <h2>{{ conexion.propietario }}</h2>
          <dl>
            <div><dt>Predio</dt><dd>Código {{ conexion.predio_id }}</dd></div>
            <div><dt>Distrito</dt><dd>{{ conexion.distrito || '—' }}</dd></div>
            <div><dt>Dirección</dt><dd>{{ conexion.direccion || '—' }}</dd></div>
            <div><dt>Código catastral</dt><dd>{{ conexion.codigo_catastral || '—' }}</dd></div>
            <div><dt>N.º de medidor</dt><dd>{{ conexion.numero_medidor || '—' }}</dd></div>
            <div><dt>Facturación</dt><dd>{{ conexion.tipo_facturacion || '—' }}</dd></div>
            <div><dt>Categoría</dt><dd>{{ conexion.categoria || '—' }}</dd></div>
          </dl>
          <div class="services"><span v-for="service in conexion.servicios" :key="service.id" :class="{ sewer: service.id === 2 }">{{ service.nombre }}</span><em v-if="!conexion.servicios.length">Sin servicios</em></div>
        </div>
        <button class="detail-button" type="button" disabled title="La vista de detalle se migrará en el siguiente paso">Detalle pendiente de migración</button>
      </article>
    </section>

    <footer v-if="pagination.last > 1" class="pagination">
      <button :disabled="pagination.current === 1 || loading" @click="load(pagination.current - 1)">Anterior</button>
      <span>Página {{ pagination.current }} de {{ pagination.last }}</span>
      <button :disabled="pagination.current === pagination.last || loading" @click="load(pagination.current + 1)">Siguiente</button>
    </footer>
  </div>
</template>

<style scoped>
.connections-page{--green:#16885d;color:#35454d}.breadcrumbs{margin-bottom:17px;color:#98a4aa;font-size:.7rem}.breadcrumbs a{color:var(--green);text-decoration:none}.page-header{padding:22px 25px;display:flex;align-items:center;gap:15px;border-radius:13px;background:#fff;border-left:5px solid var(--green);box-shadow:0 5px 20px #2b45530d}.title-icon{width:52px;height:52px;display:grid;place-items:center;flex:none;border-radius:12px;color:#fff;background:var(--green);font-size:.75rem;font-weight:700}.page-header small{color:var(--green);font-size:.66rem;font-weight:700;text-transform:uppercase}.page-header h1{margin:2px 0;font-size:1.42rem}.page-header p{margin:0;color:#7d898f;font-size:.74rem}.page-header>strong{margin-left:auto;padding:7px 11px;border-radius:20px;color:var(--green);background:#edf8f3;font-size:.7rem}.filters{margin:16px 0;padding:22px;border-radius:12px;background:#fff;border:1px solid #e5eae8}.filter-title{margin-bottom:18px;display:flex;align-items:center;gap:10px}.filter-title>span{width:34px;height:34px;display:grid;place-items:center;border-radius:9px;color:var(--green);background:#edf8f3;font-size:1.25rem}.filter-title b,.filter-title small{display:block}.filter-title b{font-size:.86rem}.filter-title small{margin-top:2px;color:#8a969b;font-size:.65rem}.filters label>span{display:block;margin-bottom:7px;color:#647179;font-size:.68rem;font-weight:600}.filters input,.filters select{width:100%;height:42px;padding:0 12px;border:1px solid #dce3e0;border-radius:8px;outline:0;color:#38484f;background:#fff;font-size:.73rem}.filters input:focus,.filters select:focus{border-color:var(--green);box-shadow:0 0 0 3px #16885d14}.filter-grid{margin-top:14px;display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.actions{margin-top:18px;display:flex;gap:9px}.actions button,.pagination button,.notice button{padding:9px 17px;border:1px solid var(--green);border-radius:7px;color:#fff;background:var(--green);font-size:.7rem;font-weight:600}.actions .clear{color:#647179;border-color:#d5ddda;background:#fff}button:disabled{cursor:wait;opacity:.55}.notice{min-height:145px;padding:28px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;border:1px dashed #ccd7d2;border-radius:11px;color:#748188;background:#fff;font-size:.74rem}.notice b{color:#46565e;font-size:.85rem}.notice.error{color:#9d3b3b;border-color:#efcaca;background:#fffafa}.notice.error button{margin-top:6px;border-color:#b94b4b;background:#b94b4b}.spinner{width:25px;height:25px;border:2px solid #cde7dc;border-top-color:var(--green);border-radius:50%;animation:spin .7s linear infinite}.cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:15px}.connection-card{overflow:hidden;border:1px solid #e2e8e5;border-radius:11px;background:#fff;box-shadow:0 4px 14px #314c3f0a}.connection-card>header{padding:12px 16px;display:flex;align-items:center;gap:8px;color:#fff;background:var(--green);font-size:.72rem}.connection-card>header span{font-size:1rem}.card-body{padding:17px}.card-body h2{margin:0 0 14px;color:#35464d;font-size:.86rem}.card-body dl{margin:0}.card-body dl>div{padding:6px 0;display:grid;grid-template-columns:42% 1fr;gap:8px;border-bottom:1px solid #f0f3f2;font-size:.66rem}.card-body dt{color:#8a969b}.card-body dd{margin:0;color:#4c5a61;text-align:right;overflow-wrap:anywhere}.services{min-height:24px;margin-top:13px;display:flex;flex-wrap:wrap;gap:5px}.services span{padding:4px 7px;border-radius:5px;color:#126b98;background:#eaf6fc;font-size:.6rem;font-weight:600}.services span.sewer{color:#a44343;background:#fcedeD}.services em{color:#9aa5aa;font-size:.62rem}.connection-card>a{margin:0 16px 16px;padding:9px;display:block;border-radius:7px;color:#fff;background:var(--green);text-align:center;text-decoration:none;font-size:.68rem;font-weight:600}.pagination{padding:20px 0;display:flex;align-items:center;justify-content:center;gap:15px}.pagination span{color:#748188;font-size:.7rem}.pagination button:disabled{color:#9ba6a1;border-color:#d4ddda;background:#edf1ef}@keyframes spin{to{transform:rotate(360deg)}}@media(max-width:1100px){.cards{grid-template-columns:repeat(2,minmax(0,1fr))}.filter-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:650px){.page-header{align-items:flex-start}.page-header>strong{display:none}.filter-grid,.cards{grid-template-columns:1fr}.actions{flex-direction:column}.actions button{width:100%}}
.detail-button{width:calc(100% - 32px);margin:0 16px 16px;padding:9px;border:0;border-radius:7px;color:#66756e;background:#e9efec;text-align:center;font-size:.68rem;font-weight:600}
</style>
