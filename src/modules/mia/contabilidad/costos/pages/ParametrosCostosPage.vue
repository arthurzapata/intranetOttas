<script setup lang="ts">
const opciones = [
  { sigla: 'MP', nombre: 'Macro procesos', descripcion: 'Gestión de macroprocesos que agrupan los procesos principales de la institución.', color: '#426f9f', to: '/modulos/administracion/contabilidad/macroprocesos' },
  { sigla: 'PR', nombre: 'Procesos', descripcion: 'Administración de los procesos que componen cada macroproceso institucional.', color: '#32936f', to: '/modulos/administracion/contabilidad/procesos-costos' },
  { sigla: 'SP', nombre: 'Subprocesos', descripcion: 'Subdivisión de procesos para un desglose detallado de las operaciones.', color: '#2f91a0', to: '/modulos/administracion/contabilidad/subprocesos-costos' },
  { sigla: 'AC', nombre: 'Actividades', descripcion: 'Registro de las actividades específicas ejecutadas dentro de cada subproceso.', color: '#d08b32', to: '/modulos/administracion/contabilidad/actividades-costos' },
  { sigla: 'SA', nombre: 'Subactividades', descripcion: 'Desagregación de actividades en tareas más específicas y medibles.', color: '#c65a62', to: '/modulos/administracion/contabilidad/subactividades-costos' },
  { sigla: 'IN', nombre: 'Inductores', descripcion: 'Definición de inductores para la asignación y distribución de costos.', color: '#268c86', to: '/modulos/administracion/contabilidad/inductores-costos' },
  { sigla: 'CC', nombre: 'Centros de costos', descripcion: 'Gestión de centros de costos con estructura jerárquica y clasificación de gastos.', color: '#655b9c', to: '/modulos/administracion/contabilidad/centros-costos' },
]
</script>

<template>
  <div class="page">
    <nav>
      <RouterLink to="/inicio">Inicio</RouterLink> /
      <RouterLink to="/modulos/administracion/contabilidad">Contabilidad</RouterLink> /
      Parámetros de costos
    </nav>

    <header class="hero">
      <div class="mark">PC</div>
      <div>
        <small>MIA · CONTABILIDAD · COSTOS</small>
        <h1>Parámetros de costos por actividad</h1>
        <p>Configuración de la estructura jerárquica utilizada para calcular, distribuir y controlar costos.</p>
      </div>
    </header>

    <main class="cards">
      <component :is="opcion.to ? 'RouterLink' : 'article'" v-for="opcion in opciones" :key="opcion.nombre" class="card" :style="{ '--color': opcion.color }" :to="opcion.to">
        <div class="icon">{{ opcion.sigla }}</div>
        <div class="content">
          <h2>{{ opcion.nombre }}</h2>
          <p>{{ opcion.descripcion }}</p>
          <span>La gestión detallada se habilitará en las siguientes migraciones</span>
        </div>
      </component>
    </main>
  </div>
</template>

<style scoped>
.page{color:#35464e}nav{margin-bottom:16px;color:#929fa5;font-size:.68rem}nav a{color:#426f9f;text-decoration:none}.hero{padding:20px;display:flex;align-items:center;gap:14px;border-left:5px solid #426f9f;border-radius:12px;background:#fff}.mark{width:50px;height:50px;display:grid;place-items:center;border-radius:11px;color:#fff;background:#426f9f;font-weight:800}.hero small{color:#426f9f;font-size:.5rem;font-weight:800}.hero h1{margin:3px 0;font-size:1.3rem}.hero p{margin:0;color:#7e8a90;font-size:.68rem}.cards{margin-top:16px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.card{overflow:hidden;border:1px solid color-mix(in srgb,var(--color),white 62%);border-radius:11px;background:#fff;box-shadow:0 3px 12px #263b4b0d}.icon{height:82px;display:grid;place-items:center;color:#fff;background:linear-gradient(135deg,var(--color),color-mix(in srgb,var(--color),white 22%));font-size:1.25rem;font-weight:800}.content{padding:16px;text-align:center}.content h2{margin:0 0 9px;color:#263943;font-size:.8rem;text-transform:uppercase}.content p{min-height:48px;margin:0;color:#65747b;font-size:.61rem;line-height:1.55}.content span{display:block;margin-top:13px;padding-top:10px;border-top:1px solid #edf0f2;color:var(--color);font-size:.5rem;font-weight:700}@media(max-width:850px){.cards{grid-template-columns:repeat(2,1fr)}}@media(max-width:520px){.cards{grid-template-columns:1fr}.hero{align-items:flex-start}.content p{min-height:auto}}
</style>
