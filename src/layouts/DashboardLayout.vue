<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { appModules, getModule } from '@/config/modules'
import type { AuthUser } from '@/services/auth'

const props = defineProps<{ user?: AuthUser | null }>()
const emit = defineEmits<{ logout: [] }>()
const route = useRoute()
const open = ref(false)
const activeModule = computed(() => getModule(route.path.split('/')[2] ?? ''))
const userName = computed(() => props.user?.name ?? props.user?.nombre ?? props.user?.username ?? 'Usuario')
const initials = computed(() => userName.value.split(' ').slice(0,2).map(p => p[0]).join('').toUpperCase())
</script>

<template>
  <div class="shell">
    <header class="topbar">
      <button class="toggle" @click="open=!open">☰</button>
      <RouterLink class="brand" to="/inicio"><b>●</b> Intranet</RouterLink>
      <nav><RouterLink v-for="m in appModules" :key="m.slug" :to="`/modulos/${m.slug}`">{{ m.name }}</RouterLink></nav>
      <div class="user"><span>{{ initials }}</span><em>{{ userName }}</em><button @click="emit('logout')">Salir</button></div>
    </header>
    <aside :class="{open}">
      <div class="aside-title">MENÚ PRINCIPAL <button @click="open=false">×</button></div>
      <RouterLink class="link" to="/inicio" @click="open=false"><i>⌂</i> Inicio</RouterLink>
      <template v-if="activeModule">
        <div class="active" :style="{'--color':activeModule.color}"><b>{{ activeModule.code }}</b><span>{{ activeModule.name }}<small>{{ activeModule.controller }}</small></span></div>
        <template v-for="s in activeModule.sections" :key="s.slug">
          <RouterLink class="link section" :to="`/modulos/${activeModule.slug}/${s.slug}`" @click="open=false"><i>•</i>{{ s.name }}</RouterLink>
          <RouterLink v-for="option in s.options" :key="option.slug" class="link option" :to="`/modulos/${activeModule.slug}/${s.slug}/${option.slug}`" @click="open=false"><i>↳</i>{{ option.name }}</RouterLink>
        </template>
      </template>
      <template v-else>
        <p>MÓDULOS</p>
        <RouterLink v-for="m in appModules" :key="m.slug" class="link" :to="`/modulos/${m.slug}`" @click="open=false"><i class="mini" :style="{background:m.color}">{{m.code}}</i>{{m.name}}</RouterLink>
      </template>
    </aside>
    <button v-if="open" class="backdrop" @click="open=false"></button>
    <main><RouterView /><footer>Intranet · Plataforma para empresas del sector saneamiento</footer></main>
  </div>
</template>

<style scoped>
.shell{min-height:100vh;background:#f4f6f9}.topbar{position:fixed;z-index:20;inset:0 0 auto;height:66px;display:flex;align-items:center;gap:20px;padding:0 24px;color:#fff;background:linear-gradient(120deg,#263b52,#17293c);box-shadow:0 2px 12px #17293c33}.brand{display:flex;align-items:center;gap:9px;color:#fff;text-decoration:none;font-size:1.18rem;font-weight:700}.brand b{color:#25a9d6;font-size:1.6rem}.topbar nav{min-width:0;flex:1;height:100%;display:flex;overflow-x:auto;scrollbar-width:none}.topbar nav a{display:flex;align-items:center;padding:0 11px;color:#dce5ec;text-decoration:none;white-space:nowrap;font-size:.73rem;border-bottom:3px solid transparent}.topbar nav a:hover,.topbar nav a.router-link-active{color:#fff;background:#ffffff0d;border-bottom-color:#25a9d6}.user{display:flex;align-items:center;gap:9px;white-space:nowrap;font-size:.76rem}.user>span{width:34px;height:34px;display:grid;place-items:center;border-radius:50%;background:#25a9d6;font-weight:700}.user em{font-style:normal}.user button{padding:7px 9px;border:1px solid #ffffff42;border-radius:6px;color:#fff;background:transparent;font-size:.7rem}.toggle{display:none;border:0;color:#fff;background:transparent;font-size:1.4rem}aside{position:fixed;z-index:15;left:0;top:66px;bottom:0;width:250px;padding:18px 12px;overflow-y:auto;background:#fff;border-right:1px solid #e7ebee}.aside-title{padding:4px 11px 16px;display:flex;justify-content:space-between;color:#9ba5ab;font-size:.66rem;font-weight:700;letter-spacing:.08em}.aside-title button{display:none;border:0;background:none;font-size:1.3rem}.link{min-height:44px;display:flex;align-items:center;gap:11px;padding:9px 11px;border-radius:8px;color:#53616b;text-decoration:none;font-size:.8rem}.link:hover,.link.router-link-active{color:#126e94;background:#edf7fb}.link i{width:27px;text-align:center;font-style:normal;font-size:1.25rem}.link i.mini{height:27px;display:grid;place-items:center;border-radius:7px;color:#fff;font-size:.58rem;font-weight:700}aside>p{margin:25px 11px 8px;color:#a0aab0;font-size:.64rem;font-weight:700}.active{margin:12px 0;padding:13px 11px;display:flex;align-items:center;gap:10px;border-radius:10px;background:color-mix(in srgb,var(--color) 9%,white)}.active>b{width:35px;height:35px;display:grid;place-items:center;border-radius:9px;color:#fff;background:var(--color);font-size:.68rem}.active span{color:#35444d;font-size:.78rem;font-weight:600}.active small{display:block;margin-top:2px;color:#9aa4aa;font-size:.62rem}.section{padding-left:17px}.section i{font-size:1rem;color:#bcc6cb}main{min-height:100vh;margin-left:250px;padding:96px 30px 20px}footer{padding:35px 0 10px;color:#98a3a9;text-align:center;font-size:.7rem}.backdrop{display:none}@media(max-width:900px){.user em{display:none}.topbar nav a{padding:0 7px;font-size:.67rem}}@media(max-width:760px){.topbar{height:60px;padding:0 14px;gap:10px}.toggle{display:block}.topbar nav{display:none}.user{margin-left:auto}aside{z-index:40;top:0;width:min(82vw,290px);transform:translateX(-105%);transition:.22s}aside.open{transform:none}.aside-title button{display:block}.backdrop{position:fixed;z-index:35;inset:0;display:block;border:0;background:#15253480}main{margin-left:0;padding:82px 17px 18px}}
.option{min-height:36px;margin-left:28px;padding:6px 10px;font-size:.72rem}.option i{width:20px;color:#21a06b;font-size:.8rem}
</style>
