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
const showMasters = ref(false)
const humanResourcesAreas = [
  { code:'⚙', name:'Maestros', description:'Gestiona los mantenedores del sistema de Recursos Humanos.', tone:'teal', available:true },
  { code:'S/', name:'Planillas', description:'Gestiona el proceso de cálculo y cierre de planillas de RRHH.', tone:'green', available:false },
  { code:'◷', name:'Control de tiempos', description:'Gestiona horarios, turnos extra, programación y asistencia del personal.', tone:'cyan', available:false },
  { code:'▤', name:'Gestionar instancias', description:'Permite gestionar las instancias de la intranet.', tone:'mint', available:false },
  { code:'▣', name:'Gestionar cargos', description:'Permite gestionar los cargos de la intranet.', tone:'coral', available:false },
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
    <article :class="{ 'rrhh-landing': isHumanResources }">
      <template v-if="isHumanResources">
        <div class="rrhh-title">RECURSOS HUMANOS</div>
        <div class="area-grid">
          <button v-for="area in humanResourcesAreas" :key="area.name" type="button" class="area-card" :class="[area.tone, { pending: !area.available, selected: area.available && showMasters }]" @click="area.available && (showMasters = !showMasters)">
            <span class="area-icon">{{ area.code }}</span>
            <span class="area-copy"><b>{{ area.name }}</b><small>{{ area.description }}</small></span>
            <em>{{ area.available ? (showMasters ? 'Ocultar módulos' : 'Ver módulos') : 'Pendiente de migración' }}</em>
          </button>
        </div>
        <section v-if="showMasters" class="master-panel">
          <header><div><small>MAESTROS DISPONIBLES</small><h2>Mantenimientos de Recursos Humanos</h2></div><strong>{{ section.options?.length ?? 0 }} módulos</strong></header>
          <div class="master-grid">
            <RouterLink v-for="option in section.options" :key="option.slug" :to="`/modulos/${module.slug}/${section.slug}/${option.slug}`">
              <span>{{ option.name.slice(0, 2).toUpperCase() }}</span><div><b>{{ option.name }}</b><small>{{ option.description }}</small></div><i>→</i>
            </RouterLink>
          </div>
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
</style>
