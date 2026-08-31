<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getModule } from '@/config/modules'

const props = defineProps<{ moduleSlug: string; sectionSlug: string }>()
const route = useRoute()
const module = computed(() => getModule(props.moduleSlug))
const section = computed(() => module.value?.sections.find((item) => item.slug === props.sectionSlug))
const isChild = computed(() => route.path.split('/').filter(Boolean).length > 3)
const isHumanResources = computed(() => props.moduleSlug === 'administracion' && props.sectionSlug === 'recursos')
const isAccounting = computed(() => props.moduleSlug === 'administracion' && props.sectionSlug === 'contabilidad')
const activeHumanResourcesArea = ref<string|null>(null)
const masterOptions = computed(() => section.value?.options?.filter((option) => !option.controller.includes('/Planilla/') && !option.controller.includes('/ControlTiempos/')) ?? [])
const planillaMainSlugs = ['procesos-planilla','reporte-conceptos-planilla','reporte-boletas-planilla']
const planillaOptions = computed(() => section.value?.options?.filter((option) => planillaMainSlugs.includes(option.slug)) ?? [])
const controlTiemposMainSlugs = ['horarios-trabajo','turnos-extra','programacion-horarios','asistencias','reporte-diario-asistencia']
const controlTiemposOptions = computed(() => section.value?.options?.filter((option) => controlTiemposMainSlugs.includes(option.slug)) ?? [])
const humanResourcesAreas = [
  { code:'⚙', name:'Maestros', description:'Gestiona los mantenedores del sistema de Recursos Humanos.', tone:'teal', available:true },
  { code:'S/', name:'Planillas', description:'Gestiona el proceso de cálculo, cierre y reportes de planillas de RRHH.', tone:'green', available:true },
  { code:'◷', name:'Control de tiempos', description:'Gestiona horarios, turnos extra, programación y asistencia del personal.', tone:'cyan', available:true },
  { code:'▤', name:'Gestionar instancias', description:'Permite gestionar las instancias de la intranet.', tone:'mint', available:false },
  { code:'▣', name:'Gestionar cargos', description:'Permite gestionar los cargos de la intranet.', tone:'coral', available:false },
]
const accountingAreas = [
  { code:'MC', name:'Maestros', description:'Documentos, periodos, monedas, sucursales y plan de cuentas.', tone:'account-blue' },
  { code:'PC', name:'Parámetros de costos', description:'Configuración para el cálculo y control de costos del proceso contable.', tone:'account-teal' },
  { code:'MV', name:'Movimientos', description:'Registro de movimientos contables y seguimiento de su trazabilidad.', tone:'account-green' },
  { code:'PG', name:'Parámetros generales', description:'Tipos de comprobante, documentos, cuentas y configuración miscelánea.', tone:'account-cyan' },
  { code:'PR', name:'Proceso', description:'Análisis, consistencias, libros, balances y estados financieros.', tone:'account-purple' },
  { code:'CO', name:'Consultas', description:'Consulta y análisis de saldos, movimientos y comprobantes contables.', tone:'account-sky' },
  { code:'BI', name:'Bitácora del sistema', description:'Auditoría de cambios, operaciones y eventos de contabilidad.', tone:'account-slate' },
]
</script>

<template>
  <RouterView v-if="isChild" />
  <div v-else-if="module && section" :style="{ '--color': module.color }">
    <nav>
      <RouterLink to="/inicio">Inicio</RouterLink> /
      <RouterLink :to="`/modulos/${module.slug}`">{{ module.name }}</RouterLink> /
      {{ section.name }}
    </nav>
    <article :class="{ 'rrhh-landing': isHumanResources || isAccounting }">
      <template v-if="isHumanResources">
        <div class="rrhh-title">RECURSOS HUMANOS</div>
        <div class="area-grid">
          <button v-for="area in humanResourcesAreas" :key="area.name" type="button" class="area-card" :class="[area.tone, { pending: !area.available, selected: activeHumanResourcesArea === area.name }]" @click="area.available && (activeHumanResourcesArea = activeHumanResourcesArea === area.name ? null : area.name)">
            <span class="area-icon">{{ area.code }}</span>
            <span class="area-copy"><b>{{ area.name }}</b><small>{{ area.description }}</small></span>
            <em>{{ area.available ? (activeHumanResourcesArea === area.name ? 'Ocultar módulos' : 'Ver módulos') : 'Pendiente de migración' }}</em>
          </button>
        </div>
        <section v-if="activeHumanResourcesArea === 'Maestros'" class="master-panel">
          <header><div><small>MAESTROS DISPONIBLES</small><h2>Mantenimientos de Recursos Humanos</h2></div><strong>{{ masterOptions.length }} módulos</strong></header>
          <div class="master-grid">
            <RouterLink v-for="option in masterOptions" :key="option.slug" :to="`/modulos/${module.slug}/${section.slug}/${option.slug}`">
              <span>{{ option.name.slice(0, 2).toUpperCase() }}</span><div><b>{{ option.name }}</b><small>{{ option.description }}</small></div><i>→</i>
            </RouterLink>
          </div>
        </section>
        <section v-if="activeHumanResourcesArea === 'Planillas'" class="master-panel planilla-panel">
          <header><div><small>PLANILLAS DISPONIBLES</small><h2>Procesamiento y reportes de planilla</h2></div><strong>{{ planillaOptions.length }} módulos</strong></header>
          <div class="master-grid">
            <RouterLink v-for="option in planillaOptions" :key="option.slug" :to="`/modulos/${module.slug}/${section.slug}/${option.slug}`">
              <span>{{ option.slug === 'procesos-planilla' ? 'PP' : option.slug === 'reporte-conceptos-planilla' ? 'RC' : 'RB' }}</span><div><b>{{ option.name }}</b><small>{{ option.description }}</small></div><i>→</i>
            </RouterLink>
          </div>
        </section>
        <section v-if="activeHumanResourcesArea === 'Control de tiempos'" class="master-panel time-panel">
          <header><div><small>CONTROL DE TIEMPOS</small><h2>Horarios y asistencia del personal</h2></div><strong>{{ controlTiemposOptions.length }} módulos</strong></header>
          <div class="master-grid"><RouterLink v-for="option in controlTiemposOptions" :key="option.slug" :to="`/modulos/${module.slug}/${section.slug}/${option.slug}`"><span>HT</span><div><b>{{option.name}}</b><small>{{option.description}}</small></div><i>→</i></RouterLink></div>
        </section>
      </template>
      <template v-else-if="isAccounting">
        <div class="accounting-heading">
          <span>CO</span>
          <div><small>MIA · ADMINISTRACIÓN</small><h1>Contabilidad</h1><p>Administra la estructura contable y los movimientos para el control financiero institucional.</p></div>
        </div>
        <div class="accounting-grid">
          <article v-for="area in accountingAreas" :key="area.name" class="accounting-card" :class="area.tone">
            <span>{{ area.code }}</span>
            <div><h2>{{ area.name }}</h2><p>{{ area.description }}</p></div>
            <em>Pendiente de migración</em>
          </article>
        </div>
        <section v-if="section.options?.length" class="accounting-ready">
          <header><div><small>FUNCIONES DISPONIBLES</small><h2>Módulos contables migrados</h2></div><strong>{{section.options.length}}</strong></header>
          <RouterLink v-for="option in section.options" :key="option.slug" :to="`/modulos/${module.slug}/${section.slug}/${option.slug}`"><div><b>{{option.name}}</b><p>{{option.description}}</p></div><i>→</i></RouterLink>
        </section>
      </template>
      <template v-else>
      <header>
        <i>{{ module.code }}</i>
        <div><small>{{ module.name }}</small><h1>{{ section.name }}</h1></div>
      </header>
      <p>{{ section.description }}</p>

      <div v-if="section.options?.length" class="options">
        <RouterLink
          v-for="option in section.options"
          :key="option.slug"
          :to="`/modulos/${module.slug}/${section.slug}/${option.slug}`"
        >
          <div>
            <b>{{ option.name }}</b>
            <p>{{ option.description }}</p>
            <small>{{ option.controller }}</small>
          </div>
          <i>→</i>
        </RouterLink>
      </div>

      <aside v-else>
        <b>Vista preparada para migración</b>
        <p>Esta ruta ya forma parte de Vue. Aquí se migrarán las tablas, formularios y llamadas API de su controlador Laravel.</p>
        <code>app/Http/Controllers/{{ section.controller }}.php</code>
      </aside>
      </template>
    </article>
  </div>
</template>

<style scoped>
nav{margin-bottom:17px;color:#9aa4aa;font-size:.7rem}nav a{color:var(--color);text-decoration:none}article{min-height:410px;padding:clamp(24px,5vw,45px);border-radius:13px;background:#fff;box-shadow:0 5px 20px #2b45530d}header{display:flex;align-items:center;gap:16px}header i{width:52px;height:52px;display:grid;place-items:center;border-radius:13px;color:#fff;background:var(--color);font-style:normal;font-weight:700}header small{color:var(--color);font-weight:700;text-transform:uppercase}h1{margin:3px 0;color:#2f3e46;font-size:1.55rem}article>p{max-width:720px;margin:24px 0;color:#738087;line-height:1.8;font-size:.84rem}.options{max-width:780px;margin-top:28px;display:grid;gap:12px}.options>a{padding:18px 20px;display:flex;align-items:center;justify-content:space-between;border:1px solid #e1e8e5;border-radius:10px;color:#40515a;text-decoration:none;transition:.2s}.options>a:hover{border-color:var(--color);transform:translateY(-1px)}.options b{font-size:.88rem}.options p{margin:5px 0;color:#7d898f;font-size:.74rem}.options small{color:var(--color);font-size:.64rem}.options>a>i{color:var(--color);font-style:normal}aside{max-width:760px;margin-top:35px;padding:20px;border:1px dashed var(--color);border-radius:10px;background:color-mix(in srgb,var(--color) 4%,white)}aside b{color:#40515a;font-size:.82rem}aside p{color:#7d898f;line-height:1.65;font-size:.74rem}code{color:var(--color);font-size:.68rem;word-break:break-all}
.rrhh-landing{padding:28px;min-height:520px}.rrhh-title{margin:0 0 34px;color:#294f7d;font-size:.95rem;letter-spacing:.08em}.area-grid{display:grid;grid-template-columns:repeat(4,minmax(180px,1fr));gap:28px}.area-card{--tone:#13c9ca;--tone-dark:#079899;min-height:250px;padding:0;display:flex;flex-direction:column;border:1px solid var(--tone);color:#26333a;background:#fff;text-align:center;cursor:pointer;overflow:hidden;transition:.2s}.area-card:hover:not(.pending){transform:translateY(-3px);box-shadow:0 10px 24px #294f7d1a}.area-card.selected{box-shadow:0 0 0 3px color-mix(in srgb,var(--tone) 22%,transparent)}.area-icon{height:125px;display:grid;place-items:center;color:#fff;background:linear-gradient(125deg,var(--tone-dark),var(--tone));font-size:2.25rem;font-weight:800}.area-copy{min-height:94px;padding:20px 16px 8px;display:block}.area-copy b{display:block;font-size:.88rem;font-weight:500;letter-spacing:.035em;text-transform:uppercase}.area-copy small{display:block;margin-top:20px;color:#35424a;line-height:1.45;font-size:.67rem}.area-card em{margin-top:auto;padding:8px;color:var(--tone-dark);font-size:.51rem;font-style:normal}.area-card.pending{cursor:default}.area-card.pending em{color:#9aa4aa}.green{--tone:#31d7aa;--tone-dark:#16ad80}.cyan{--tone:#53cde0;--tone-dark:#2eb2c4}.mint{--tone:#2dd8aa;--tone-dark:#15ad82}.coral{--tone:#ffaf88;--tone-dark:#ff8652}.master-panel{margin-top:28px;padding:20px;border-radius:12px;background:#f7f9fb}.master-panel>header{display:flex;align-items:center}.master-panel h2{margin:3px 0;font-size:.95rem}.master-panel header small{color:#079899;font-size:.48rem;font-weight:800}.master-panel header strong{margin-left:auto;padding:5px 8px;border-radius:10px;color:#087f80;background:#ddf4f4;font-size:.48rem}.master-grid{margin-top:15px;display:grid;grid-template-columns:repeat(3,1fr);gap:9px}.master-grid>a{min-height:70px;padding:11px;display:grid;grid-template-columns:35px 1fr auto;align-items:center;gap:9px;border:1px solid #e1e7e9;border-radius:8px;color:#35464e;background:#fff;text-decoration:none}.master-grid>a:hover{border-color:#0baaaa}.master-grid>a>span{width:33px;height:33px;display:grid;place-items:center;border-radius:7px;color:#fff;background:#0baaaa;font-size:.45rem;font-weight:800}.master-grid b,.master-grid small{display:block}.master-grid b{font-size:.58rem}.master-grid small{margin-top:3px;color:#7d898f;line-height:1.35;font-size:.45rem}.master-grid i{color:#0a9999;font-style:normal}@media(max-width:1100px){.area-grid{grid-template-columns:repeat(2,1fr)}.master-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:650px){.rrhh-landing{padding:18px}.area-grid,.master-grid{grid-template-columns:1fr;gap:14px}.area-card{min-height:220px}.rrhh-title{margin-bottom:20px}}
.planilla-panel header small{color:#168f6d}.planilla-panel header strong{color:#147b60;background:#ddf6ed}.planilla-panel .master-grid>a:hover{border-color:#16ad80}.planilla-panel .master-grid>a>span{background:#16ad80}.planilla-panel .master-grid i{color:#168f6d}
.time-panel header small{color:#2697ad}.time-panel header strong{color:#247f91;background:#e3f6f9}.time-panel .master-grid>a:hover{border-color:#2eb2c4}.time-panel .master-grid>a>span{background:#2eb2c4}.time-panel .master-grid i{color:#2697ad}
.accounting-heading{margin-bottom:28px;display:flex;align-items:center;gap:16px}.accounting-heading>span{width:58px;height:58px;display:grid;place-items:center;border-radius:14px;color:#fff;background:#385d8a;font-weight:800}.accounting-heading small{color:#385d8a;font-size:.58rem;font-weight:800}.accounting-heading h1{margin:3px 0;font-size:1.45rem}.accounting-heading p{margin:0;color:#78858c;font-size:.76rem}.accounting-grid{display:grid;grid-template-columns:repeat(3,minmax(220px,1fr));gap:14px}.accounting-card{--account:#385d8a;min-height:190px;padding:0;display:flex;flex-direction:column;border:1px solid #e1e7eb;border-radius:10px;background:#fff;overflow:hidden}.accounting-card>span{height:62px;display:grid;place-items:center;color:#fff;background:var(--account);font-size:1rem;font-weight:800}.accounting-card>div{padding:16px 17px 8px}.accounting-card h2{margin:0;color:#33434c;font-size:.87rem}.accounting-card p{margin:8px 0 0;color:#77858d;line-height:1.55;font-size:.67rem}.accounting-card em{margin-top:auto;padding:9px 17px;color:#9aa4aa;background:#f8fafb;font-size:.55rem;font-style:normal}.account-teal{--account:#168c8c}.account-green{--account:#349267}.account-cyan{--account:#2697ad}.account-purple{--account:#76569a}.account-sky{--account:#3b82a0}.account-slate{--account:#687782}@media(max-width:1000px){.accounting-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:650px){.accounting-grid{grid-template-columns:1fr}.accounting-heading{align-items:flex-start}.accounting-heading p{line-height:1.5}}
.accounting-ready{margin-top:18px;padding:17px;border-radius:10px;background:#f5f8fb}.accounting-ready header{display:flex;justify-content:space-between}.accounting-ready header small{color:#385d8a;font-size:.48rem;font-weight:800}.accounting-ready h2{margin:3px 0 12px;font-size:.85rem}.accounting-ready strong{color:#385d8a}.accounting-ready>a{padding:13px 15px;display:flex;justify-content:space-between;border:1px solid #dce5ed;border-radius:8px;color:#35464e;background:#fff;text-decoration:none}.accounting-ready>a:hover{border-color:#385d8a}.accounting-ready b{font-size:.65rem}.accounting-ready p{margin:4px 0 0;color:#7b888f;font-size:.53rem}.accounting-ready i{color:#385d8a;font-style:normal}
</style>
