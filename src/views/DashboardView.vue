<script setup lang="ts">
import {appModules} from '@/config/modules'
</script>
<template>
    <div>
        <header class="hero">
            <div><p>PANEL PRINCIPAL</p>
                <h1>Bienvenido a la Intranet</h1>
                <span>Selecciona un módulo para comenzar.</span>
            </div><b>{{appModules.length}}<small>Módulos</small></b>
        </header>
        <section class="grid">
            <RouterLink v-for="m in appModules" :key="m.slug" 
            class="card" :to="`/modulos/${m.slug}`" :style="{'--color':m.color}"><i>{{m.code}}</i><div><h2>{{m.name}}</h2><p>{{m.description}}</p><small>{{m.sections.length}} secciones</small></div><b>→</b>
            </RouterLink>
        </section>
    </div>
</template>
<style scoped>.hero{margin-bottom:24px;padding:28px 30px;display:flex;align-items:center;justify-content:space-between;gap:20px;border-radius:14px;color:#fff;background:linear-gradient(125deg,#176d8f,#243f59);box-shadow:0 12px 30px #1a4f6924}.hero p{margin:0;color:#8fd5ef;font-size:.7rem;font-weight:700;letter-spacing:.08em}.hero h1{margin:5px 0;font-size:clamp(1.4rem,3vw,2rem)}.hero span{color:#d8e5eb;font-size:.82rem}.hero>b{min-width:145px;padding:14px;border-radius:10px;text-align:center;background:#ffffff15;font-size:1.8rem}.hero small{display:block;font-size:.65rem;font-weight:400}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:16px}.card{min-height:150px;padding:21px;display:grid;grid-template-columns:auto 1fr auto;gap:15px;border:1px solid #e5e9ec;border-radius:12px;color:#37464f;background:#fff;text-decoration:none;transition:.2s}.card:hover{transform:translateY(-3px);border-color:var(--color);box-shadow:0 12px 28px #304b5a17}.card i{width:43px;height:43px;display:grid;place-items:center;border-radius:11px;color:#fff;background:var(--color);font-style:normal;font-size:.75rem;font-weight:700}.card h2{margin:1px 0 7px;font-size:1rem}.card p{margin:0 0 12px;color:#7d898f;font-size:.74rem;line-height:1.6}.card small{color:var(--color);font-size:.66rem;font-weight:600}.card>b{color:#aeb8bd}@media(max-width:560px){.hero>b{display:none}.hero{padding:23px 20px}.grid{grid-template-columns:1fr}}</style>
