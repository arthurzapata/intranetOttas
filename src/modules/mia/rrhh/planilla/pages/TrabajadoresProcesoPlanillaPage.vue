<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { listarTrabajadoresProceso } from '../services/procesosPlanilla'
import type { ProcesoPlanilla, TrabajadorProcesoPlanilla } from '../interfaces/procesoPlanilla.interface'

const route=useRoute(),id=computed(()=>Number(route.query.id||0))
const proceso=ref<ProcesoPlanilla|null>(null),rows=ref<TrabajadorProcesoPlanilla[]>([])
const q=ref(''),page=ref(1),lastPage=ref(1),total=ref(0),loading=ref(false),error=ref('')
const preview=ref<TrabajadorProcesoPlanilla|null>(null)
const message=(v:unknown)=>v instanceof Error?v.message:'No se pudo cargar a los trabajadores.'
const money=(v:number)=>new Intl.NumberFormat('es-PE',{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number(v||0))
const name=(t:TrabajadorProcesoPlanilla)=>t.nombre_completo||[t.apellido_paterno,t.apellido_materno,t.nombres].filter(Boolean).join(' ')||`Trabajador #${t.id}`

async function load(next=1){
  if(!id.value)return void(error.value='Indique el proceso mediante el parámetro ?id=.')
  loading.value=true;error.value=''
  try{const r=await listarTrabajadoresProceso(id.value,q.value,next);proceso.value=r.proceso;rows.value=r.data;page.value=r.current_page;lastPage.value=r.last_page;total.value=r.total}
  catch(v){error.value=message(v)}finally{loading.value=false}
}
function clear(){q.value='';load(1)}
onMounted(()=>load())
</script>

<template>
  <div class="page">
    <nav><RouterLink to="/inicio">Inicio</RouterLink> / <RouterLink to="/modulos/administracion/recursos/procesos-planilla">Procesos</RouterLink> / Trabajadores</nav>
    <header class="hero">
      <div class="mark">TP</div><div><small>MIA · RR. HH. · PLANILLAS</small><h1>Trabajadores del proceso #{{id}}</h1><p v-if="proceso">{{proceso.codigo_proceso}} · Periodo {{proceso.mes}}/{{proceso.anio}}</p></div><strong>{{total}} trabajadores</strong>
    </header>
    <p v-if="error" class="flash">{{error}}</p>
    <form class="search" @submit.prevent="load(1)"><input v-model.trim="q" placeholder="Buscar por apellidos, nombres o DNI"><button>Buscar</button><button v-if="q" type="button" class="soft" @click="clear">Limpiar</button></form>
    <section class="card">
      <div v-if="loading" class="empty">Consultando trabajadores…</div>
      <div v-else-if="!rows.length" class="empty">No hay trabajadores calculados aún.</div>
      <div v-else class="scroll"><table><thead><tr><th>ID</th><th>Persona</th><th>Estado cálculo</th><th class="num">Ingresos</th><th class="num">Descuentos</th><th class="num">Neto</th><th>Acción</th></tr></thead><tbody><tr v-for="t in rows" :key="t.id"><td>#{{t.id}}</td><td><b>{{name(t)}}</b><small v-if="t.dni">DNI: {{t.dni}}</small></td><td><span class="status">{{t.estado_calculo}}</span></td><td class="num">{{money(t.total_ingresos)}}</td><td class="num">{{money(t.total_descuentos)}}</td><td class="num net">{{money(t.neto_pagar)}}</td><td class="actions"><RouterLink :to="`/modulos/administracion/recursos/detalle-trabajador-planilla?id=${id}&trabajadorId=${t.id}`">Detalle</RouterLink><button v-if="t.boleta_preview_url" @click="preview=t">Boleta</button><span v-else>Boleta pendiente</span></td></tr></tbody></table></div>
      <footer v-if="lastPage>1"><button :disabled="page<=1" @click="load(page-1)">Anterior</button><span>{{page}} / {{lastPage}}</span><button :disabled="page>=lastPage" @click="load(page+1)">Siguiente</button></footer>
    </section>
    <RouterLink class="back" :to="`/modulos/administracion/recursos/detalle-proceso-planilla?id=${id}`">Volver al proceso</RouterLink>
    <div v-if="preview" class="overlay" @click.self="preview=null"><section class="modal"><header><b>Vista previa de boleta de pago</b><button @click="preview=null">×</button></header><iframe :src="preview.boleta_preview_url||''" title="Vista previa de boleta"></iframe><footer><a v-if="preview.boleta_pdf_url" :href="preview.boleta_pdf_url" target="_blank">Descargar PDF</a><button class="soft" @click="preview=null">Cerrar</button></footer></section></div>
  </div>
</template>

<style scoped>
.page{--a:#2f91a0;color:#35464e}nav{margin-bottom:16px;color:#929fa5;font-size:.68rem}nav a{color:var(--a);text-decoration:none}.hero{padding:20px;display:flex;align-items:center;gap:14px;border-left:5px solid var(--a);border-radius:12px;background:#fff}.mark{width:48px;height:48px;display:grid;place-items:center;border-radius:10px;color:#fff;background:var(--a);font-weight:800}.hero>div:nth-child(2){flex:1}.hero small{color:var(--a);font-size:.48rem;font-weight:800}.hero h1{margin:2px 0;font-size:1.2rem}.hero p{margin:0;color:#7e8a90;font-size:.58rem}.hero>strong{font-size:.55rem}.flash{padding:10px;color:#a64046;background:#fff0f0}.search{margin-top:12px;padding:12px;display:grid;grid-template-columns:1fr auto auto;gap:7px;background:#fff}.search input{padding:9px;border:1px solid #d7dfe2;border-radius:6px;font:inherit;font-size:.52rem}button,.actions a,.back,.modal a{padding:8px 11px;border:0;border-radius:6px;color:#fff;background:var(--a);font-size:.5rem;text-decoration:none;cursor:pointer}.soft{color:#64727a!important;background:#edf1f3!important}.card{margin-top:12px;background:#fff}.empty{padding:45px;text-align:center}.scroll{overflow:auto}table{width:100%;min-width:850px;border-collapse:collapse;font-size:.5rem}th,td{padding:9px;border:1px solid #e1e7ea;text-align:left}thead{color:#fff;background:#354a55}td small{display:block;margin-top:3px;color:#8b969b}.num{text-align:right}.net{font-weight:800;color:#28717a}.status{padding:4px 7px;border-radius:10px;color:#28717a;background:#dcf1f3}.actions{display:flex;align-items:center;gap:5px}.actions span{color:#9aa4a9;font-size:.46rem}.card>footer{padding:10px;display:flex;justify-content:center;align-items:center;gap:10px;font-size:.52rem}.back{display:inline-block;margin-top:12px;color:#64727a;background:#edf1f3}.overlay{position:fixed;inset:0;z-index:50;padding:3vh;display:grid;place-items:center;background:#0008}.modal{width:min(1100px,96vw);height:90vh;display:grid;grid-template-rows:auto 1fr auto;background:#fff}.modal header,.modal footer{padding:12px;display:flex;align-items:center;justify-content:space-between}.modal header button{color:#526168;background:#edf1f3;font-size:1rem}.modal iframe{width:100%;height:100%;border:0}@media(max-width:550px){.search{grid-template-columns:1fr}.hero{align-items:flex-start}.hero>strong{display:none}}
</style>
