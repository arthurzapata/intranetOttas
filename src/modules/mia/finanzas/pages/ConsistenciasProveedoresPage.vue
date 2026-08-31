<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ConsistenciaProveedorFiltros, IncidenciaProveedor, ProveedorConsistencia, ResultadoConsistenciaProveedor } from '../interfaces/consistencia-proveedor.interface'
import { buscarProveedoresConsistencia, evaluarConsistenciasProveedor } from '../services/consistencia-proveedor'

const blank = (): ConsistenciaProveedorFiltros => ({ nivel: 'TODOS', tipo: '', proveedor_id: '' })
const filters = reactive(blank())
const providers = ref<ProveedorConsistencia[]>([])
const providerQuery = ref('')
const result = ref<ResultadoConsistenciaProveedor | null>(null)
const detail = ref<IncidenciaProveedor | null>(null)
const loading = ref(false)
const error = ref('')
let searchTimer: ReturnType<typeof setTimeout> | undefined
const message = (e: unknown) => e instanceof Error ? e.message : 'No se pudo completar la evaluación.'

function searchProviders() {
  clearTimeout(searchTimer)
  if (providerQuery.value.trim().length < 3) { providers.value = []; return }
  searchTimer = setTimeout(async () => {
    try { providers.value = await buscarProveedoresConsistencia(providerQuery.value.trim()) }
    catch (e) { error.value = message(e) }
  }, 350)
}
function selectProvider(item: ProveedorConsistencia) {
  filters.proveedor_id = String(item.id)
  providerQuery.value = item.text
  providers.value = []
}
async function evaluate() {
  loading.value = true; error.value = ''
  try { result.value = await evaluarConsistenciasProveedor(filters) }
  catch (e) { error.value = message(e) }
  finally { loading.value = false }
}
function clear() {
  Object.assign(filters, blank()); providerQuery.value = ''; providers.value = []; result.value = null
}
const label = (key: string) => key.replaceAll('_', ' ').replace(/^./, value => value.toUpperCase())
</script>

<template><div class="page"><nav><RouterLink to="/inicio">Inicio</RouterLink> / Administración / Finanzas / Consistencias de proveedores</nav><header class="hero"><div class="mark">CP</div><div><small>MIA · FINANZAS · CONSISTENCIAS</small><h1>Consistencias de proveedores</h1><p>Validación de integridad documental, tributaria y de pagos.</p></div><strong>Motor de validación</strong></header><p v-if="error" class="flash">{{error}}</p><form class="filters" @submit.prevent="evaluate"><label>Nivel<select v-model="filters.nivel"><option value="TODOS">Todos</option><option value="CRITICA">Críticas</option><option value="ADVERTENCIA">Advertencias</option></select></label><label>Tipo de incidencia<input v-model.trim="filters.tipo" maxlength="100" placeholder="Ej. DESCUADRE_PAGO"></label><label class="provider">Proveedor<input v-model.trim="providerQuery" placeholder="RUC o razón social" @input="searchProviders"><ul v-if="providers.length"><li v-for="item in providers" :key="item.id" @click="selectProvider(item)"><b>{{item.ruc}}</b> · {{item.razon_social}}</li></ul></label><button :disabled="loading">{{loading?'Evaluando…':'Evaluar'}}</button><button type="button" class="soft" @click="clear">Limpiar</button></form><section v-if="result" class="results"><div class="summary"><article><small>Total incidencias</small><b>{{result.resumen.total}}</b></article><article class="critical"><small>Críticas</small><b>{{result.resumen.criticas}}</b></article><article class="warning"><small>Advertencias</small><b>{{result.resumen.advertencias}}</b></article></div><div v-if="!result.incidencias.length" class="empty good">✓ No se encontraron inconsistencias.</div><div v-else class="scroll"><table><thead><tr><th>Nivel</th><th>Tipo</th><th>Documento</th><th>Proveedor</th><th>Movimiento</th><th>Incidencia</th><th>Detalle</th></tr></thead><tbody><tr v-for="(item,index) in result.incidencias" :key="`${item.tipo}-${index}`"><td><span :class="item.nivel==='CRITICA'?'badge bad':'badge warn'">{{item.nivel}}</span></td><td><b>{{item.tipo}}</b></td><td>{{item.referencia||'-'}}</td><td>{{item.proveedor||'-'}}</td><td>{{item.movimiento_id||'-'}}</td><td>{{item.mensaje}}</td><td><button v-if="item.detalle" class="view" @click="detail=item">Ver</button><span v-else>-</span></td></tr></tbody></table></div></section><section v-else class="empty initial">Seleccione los filtros y presione Evaluar para ejecutar las validaciones.</section><div v-if="detail?.detalle" class="backdrop" @mousedown.self="detail=null"><section class="dialog"><header><div><small>DETALLE DE INCIDENCIA</small><h2>{{detail.tipo}}</h2></div><button @click="detail=null">×</button></header><p>{{detail.mensaje}}</p><dl><template v-for="(value,key) in detail.detalle" :key="key"><dt>{{label(String(key))}}</dt><dd>{{value??'-'}}</dd></template></dl></section></div></div></template>

<style scoped>
.page{--a:#176d78;color:#344750}nav{margin-bottom:15px;color:#91a0a5;font-size:.68rem}nav a{color:var(--a)}.hero{display:flex;align-items:center;gap:14px;padding:20px;border-left:5px solid var(--a);border-radius:12px;background:#fff}.mark{width:50px;height:50px;display:grid;place-items:center;border-radius:10px;color:#fff;background:var(--a);font-weight:800}.hero>div:nth-child(2){flex:1}.hero small,.dialog small{color:var(--a);font-size:.49rem;font-weight:800}.hero h1{margin:3px 0;font-size:1.3rem}.hero p{margin:0;color:#7c8b91;font-size:.65rem}.hero strong{font-size:.55rem}.flash{padding:10px;color:#9b3d48;background:#fdebee;border-radius:6px;font-size:.55rem}.filters{margin-top:11px;padding:14px;display:grid;grid-template-columns:1fr 1.4fr 2fr auto auto;gap:8px;align-items:end;background:#fff}.filters label{display:grid;gap:5px;font-size:.5rem;font-weight:700}.filters input,.filters select{box-sizing:border-box;width:100%;padding:9px;border:1px solid #d5dfe2;border-radius:6px;background:#fff;font-size:.5rem}button{padding:9px 12px;border:0;border-radius:6px;color:#fff;background:var(--a);font-size:.5rem;cursor:pointer}.soft{color:#607078;background:#edf2f3}.provider{position:relative}.provider ul{position:absolute;z-index:5;top:51px;width:100%;margin:0;padding:0;border:1px solid #d5dfe2;background:#fff;list-style:none;box-shadow:0 8px 18px #19374622}.provider li{padding:9px;font-size:.48rem;cursor:pointer}.provider li:hover{background:#edf6f7}.results{margin-top:12px}.summary{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.summary article{padding:14px;border-left:4px solid var(--a);background:#fff}.summary small{display:block;color:#7f8d93;font-size:.5rem}.summary b{display:block;margin-top:5px;text-align:right;font-size:1.25rem}.summary .critical{border-color:#bd4852}.summary .critical b{color:#bd4852}.summary .warning{border-color:#d79b31}.summary .warning b{color:#b27612}.scroll{margin-top:10px;overflow:auto;background:#fff}table{width:100%;min-width:1050px;border-collapse:collapse;font-size:.49rem}th,td{padding:10px;border-bottom:1px solid #e2e9eb;text-align:left;vertical-align:top}th{color:#fff;background:#435d6c}.badge{padding:4px 7px;border-radius:10px;font-size:.43rem;font-weight:800}.bad{color:#9c3b46;background:#fde8eb}.warn{color:#875b10;background:#fff2d7}.view{padding:5px 8px}.empty{margin-top:10px;padding:55px;text-align:center;background:#fff;font-size:.58rem}.good{color:#267153}.initial{color:#7b8c92}.backdrop{position:fixed;z-index:100;inset:0;padding:20px;display:grid;place-items:center;background:#172b3d88}.dialog{width:min(570px,100%);max-height:90vh;padding:20px;box-sizing:border-box;border-radius:12px;background:#fff;overflow:auto}.dialog header{display:flex}.dialog header div{flex:1}.dialog h2{margin:3px 0 12px}.dialog header button{color:#66757b;background:none;font-size:1.2rem}.dialog p{font-size:.55rem}.dialog dl{display:grid;grid-template-columns:1fr 1.5fr;margin:0;font-size:.52rem}.dialog dt,.dialog dd{margin:0;padding:9px;border-bottom:1px solid #e3e9eb}.dialog dt{font-weight:700;background:#f3f7f8}@media(max-width:850px){.filters{grid-template-columns:1fr 1fr}.summary{grid-template-columns:1fr}}@media(max-width:520px){.filters{grid-template-columns:1fr}.hero strong,.mark{display:none}}
</style>
