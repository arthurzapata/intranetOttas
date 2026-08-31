<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { obtenerDetalleTrabajadorProceso } from '../services/procesosPlanilla'
import type { ConceptoTrabajadorPlanilla, ProcesoPlanilla, TrabajadorProcesoPlanilla } from '../interfaces/procesoPlanilla.interface'

const route=useRoute(),id=computed(()=>Number(route.query.id||0)),trabajadorId=computed(()=>Number(route.query.trabajadorId||0))
const proceso=ref<ProcesoPlanilla|null>(null),trabajador=ref<TrabajadorProcesoPlanilla|null>(null),conceptos=ref<ConceptoTrabajadorPlanilla[]>([])
const previewUrl=ref<string|null>(null),pdfUrl=ref<string|null>(null),showPreview=ref(false),loading=ref(false),error=ref('')
const money=(v:number)=>new Intl.NumberFormat('es-PE',{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number(v||0))
const message=(v:unknown)=>v instanceof Error?v.message:'No se pudo cargar el detalle del trabajador.'
const total=computed(()=>conceptos.value.reduce((sum,c)=>sum+Number(c.monto_calculado||0),0))

async function load(){
  if(!id.value||!trabajadorId.value)return void(error.value='Indique el proceso y trabajador mediante ?id= y &trabajadorId=.')
  loading.value=true;error.value=''
  try{const r=await obtenerDetalleTrabajadorProceso(id.value,trabajadorId.value);proceso.value=r.proceso;trabajador.value=r.trabajador;conceptos.value=r.conceptos;previewUrl.value=r.boleta_preview_url||r.trabajador.boleta_preview_url||null;pdfUrl.value=r.boleta_pdf_url||r.trabajador.boleta_pdf_url||null}
  catch(v){error.value=message(v)}finally{loading.value=false}
}
onMounted(load)
</script>

<template>
  <div class="page">
    <nav><RouterLink to="/inicio">Inicio</RouterLink> / <RouterLink to="/modulos/administracion/recursos/procesos-planilla">Procesos</RouterLink> / <RouterLink :to="`/modulos/administracion/recursos/trabajadores-proceso-planilla?id=${id}`">Trabajadores</RouterLink> / Detalle</nav>
    <header class="hero"><div class="mark">DT</div><div><small>MIA · RR. HH. · PLANILLAS</small><h1>Detalle de conceptos - Trabajador #{{trabajadorId}}</h1><p v-if="proceso">Proceso {{proceso.codigo_proceso}} · {{proceso.mes}}/{{proceso.anio}}</p></div><button v-if="previewUrl" @click="showPreview=true">Ver boleta</button></header>
    <p v-if="error" class="flash">{{error}}</p>
    <section class="card">
      <div v-if="loading" class="empty">Consultando conceptos…</div>
      <div v-else-if="!conceptos.length" class="empty">No hay conceptos para este trabajador.</div>
      <div v-else class="scroll"><table><thead><tr><th>Concepto</th><th>Descripción</th><th class="num">Monto</th><th>Origen</th></tr></thead><tbody><tr v-for="c in conceptos" :key="c.id"><td><b>{{c.codigo_concepto_snapshot}}</b></td><td>{{c.descripcion_concepto_snapshot}}</td><td class="num">{{money(c.monto_calculado)}}</td><td><span>{{c.origen}}</span></td></tr></tbody><tfoot><tr><td colspan="2">Total de conceptos</td><td class="num">{{money(total)}}</td><td></td></tr></tfoot></table></div>
    </section>
    <RouterLink class="back" :to="`/modulos/administracion/recursos/trabajadores-proceso-planilla?id=${id}`">Volver a trabajadores</RouterLink>
    <div v-if="showPreview" class="overlay" @click.self="showPreview=false"><section class="modal"><header><b>Vista previa de boleta de pago</b><button @click="showPreview=false">×</button></header><iframe :src="previewUrl||''" title="Vista previa de boleta"></iframe><footer><a v-if="pdfUrl" :href="pdfUrl" target="_blank">Descargar PDF</a><button class="soft" @click="showPreview=false">Cerrar</button></footer></section></div>
  </div>
</template>

<style scoped>
.page{--a:#2f91a0;color:#35464e;max-width:1100px}nav{margin-bottom:16px;color:#929fa5;font-size:.68rem}nav a{color:var(--a);text-decoration:none}.hero{padding:20px;display:flex;align-items:center;gap:14px;border-left:5px solid var(--a);border-radius:12px;background:#fff}.mark{width:48px;height:48px;display:grid;place-items:center;border-radius:10px;color:#fff;background:var(--a);font-weight:800}.hero>div:nth-child(2){flex:1}.hero small{color:var(--a);font-size:.48rem;font-weight:800}.hero h1{margin:2px 0;font-size:1.2rem}.hero p{margin:0;color:#7e8a90;font-size:.58rem}button,.back,.modal a{padding:9px 12px;border:0;border-radius:6px;color:#fff;background:var(--a);font-size:.52rem;text-decoration:none;cursor:pointer}.flash{padding:10px;color:#a64046;background:#fff0f0}.card{margin-top:12px;background:#fff}.empty{padding:45px;text-align:center}.scroll{overflow:auto}table{width:100%;min-width:650px;border-collapse:collapse;font-size:.52rem}th,td{padding:10px;border:1px solid #e1e7ea;text-align:left}thead{color:#fff;background:#354a55}.num{text-align:right}tbody td span{padding:4px 7px;border-radius:10px;color:#28717a;background:#dcf1f3}tfoot{font-weight:800;background:#f3f6f7}.back{display:inline-block;margin-top:12px;color:#64727a;background:#edf1f3}.overlay{position:fixed;inset:0;z-index:50;padding:3vh;display:grid;place-items:center;background:#0008}.modal{width:min(1100px,96vw);height:90vh;display:grid;grid-template-rows:auto 1fr auto;background:#fff}.modal header,.modal footer{padding:12px;display:flex;align-items:center;justify-content:space-between}.modal header button{color:#526168;background:#edf1f3;font-size:1rem}.modal iframe{width:100%;height:100%;border:0}.soft{color:#64727a!important;background:#edf1f3!important}@media(max-width:550px){.hero{align-items:flex-start}.hero>button{white-space:nowrap}}
</style>
