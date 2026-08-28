<script setup lang="ts">
import{computed}from'vue';
import{useRoute}from'vue-router';
import{getModule}from'@/config/modules';
const p=defineProps<{moduleSlug:string}>();
const route=useRoute();
const module=computed(()=>getModule(p.moduleSlug));
const isChild=computed(()=>route.path.split('/').filter(Boolean).length>2)</script>
<template>
    <RouterView v-if="isChild"/>
    <div v-else-if="module" :style="{'--color':module.color}">
        <nav>
            <RouterLink to="/inicio">Inicio</RouterLink> / {{module.name}}</nav>
                <header><i>{{module.code}}</i><div><small>{{module.controller}}</small>
                    <h1>{{module.name}}</h1><p>{{module.description}}</p></div>
                        </header><section>
                            <RouterLink v-for="(s,i) in module.sections" :key="s.slug" :to="`/modulos/${module.slug}/${s.slug}`"><b>{{String(i+1).padStart(2,'0')}}</b><div><h2>{{s.name}}</h2><p>{{s.description}}</p><small>{{s.controller}}</small></div><i>→</i>
                                </RouterLink>
                                </section>
                                </div>
                                </template>
<style scoped>nav{margin-bottom:17px;color:#9aa4aa;font-size:.7rem}nav a{color:var(--color);text-decoration:none}header{margin-bottom:22px;padding:25px 28px;display:flex;align-items:center;gap:18px;border-radius:13px;background:#fff;border-left:5px solid var(--color);box-shadow:0 5px 20px #2b45530d}header>i{width:58px;height:58px;display:grid;place-items:center;flex:none;border-radius:14px;color:#fff;background:var(--color);font-style:normal;font-weight:700}header small{color:var(--color);font-weight:700}header h1{margin:3px 0 5px;font-size:1.5rem}header p{margin:0;color:#7e8a91;font-size:.78rem}section{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:15px}section>a{min-height:135px;padding:20px;display:grid;grid-template-columns:auto 1fr auto;gap:14px;border:1px solid #e6eaed;border-radius:11px;color:#38474f;background:#fff;text-decoration:none;transition:.2s}section>a:hover{transform:translateY(-2px);border-color:var(--color)}section>a>b,section>a>i{color:var(--color);font-style:normal;font-size:.75rem}section h2{margin:0 0 7px;font-size:.93rem}section p{margin:0 0 11px;color:#7c898f;line-height:1.55;font-size:.72rem}section small{color:#a1abb0;font-size:.62rem}@media(max-width:560px){header{padding:20px}header p{display:none}section{grid-template-columns:1fr}}</style>
