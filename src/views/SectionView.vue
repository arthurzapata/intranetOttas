<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getModule } from '@/config/modules'

const props = defineProps<{ moduleSlug: string; sectionSlug: string }>()
const route = useRoute()
const module = computed(() => getModule(props.moduleSlug))
const section = computed(() => module.value?.sections.find((item) => item.slug === props.sectionSlug))
const isChild = computed(() => route.matched.length > 3)
</script>

<template>
  <RouterView v-if="isChild" />
  <div v-else-if="module && section" :style="{ '--color': module.color }">
    <nav>
      <RouterLink to="/inicio">Inicio</RouterLink> /
      <RouterLink :to="`/modulos/${module.slug}`">{{ module.name }}</RouterLink> /
      {{ section.name }}
    </nav>
    <article>
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
    </article>
  </div>
</template>

<style scoped>
nav{margin-bottom:17px;color:#9aa4aa;font-size:.7rem}nav a{color:var(--color);text-decoration:none}article{min-height:410px;padding:clamp(24px,5vw,45px);border-radius:13px;background:#fff;box-shadow:0 5px 20px #2b45530d}header{display:flex;align-items:center;gap:16px}header i{width:52px;height:52px;display:grid;place-items:center;border-radius:13px;color:#fff;background:var(--color);font-style:normal;font-weight:700}header small{color:var(--color);font-weight:700;text-transform:uppercase}h1{margin:3px 0;color:#2f3e46;font-size:1.55rem}article>p{max-width:720px;margin:24px 0;color:#738087;line-height:1.8;font-size:.84rem}.options{max-width:780px;margin-top:28px;display:grid;gap:12px}.options>a{padding:18px 20px;display:flex;align-items:center;justify-content:space-between;border:1px solid #e1e8e5;border-radius:10px;color:#40515a;text-decoration:none;transition:.2s}.options>a:hover{border-color:var(--color);transform:translateY(-1px)}.options b{font-size:.88rem}.options p{margin:5px 0;color:#7d898f;font-size:.74rem}.options small{color:var(--color);font-size:.64rem}.options>a>i{color:var(--color);font-style:normal}aside{max-width:760px;margin-top:35px;padding:20px;border:1px dashed var(--color);border-radius:10px;background:color-mix(in srgb,var(--color) 4%,white)}aside b{color:#40515a;font-size:.82rem}aside p{color:#7d898f;line-height:1.65;font-size:.74rem}code{color:var(--color);font-size:.68rem;word-break:break-all}
</style>
