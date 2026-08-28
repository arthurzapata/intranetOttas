<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import {
  cambiarEstadoDepartamento, guardarDepartamento, listarDepartamentos, listarPaisesActivos } from '../services/departamentos'
import type { Departamento, DepartamentoPayload, PaisOption } from '../interfaces/departamentos.interface'

const rows = ref<Departamento[]>([])
const countries = ref<PaisOption[]>([])
const criterio = ref('')
const page = ref(1)
const lastPage = ref(1)
const total = ref(0)
const loading = ref(false)
const saving = ref(false)
const error = ref('')
const success = ref('')
const modal = ref(false)
const editing = ref<number | null>(null)
const form = reactive<DepartamentoPayload>({ pais_id: null, ubigeo: '', nombre: '' })

const message = (value: unknown) => value instanceof Error ? value.message : 'No se pudo completar la operación.'

async function load(nextPage = 1) {
  loading.value = true
  error.value = ''
  try {
    const response = await listarDepartamentos(criterio.value, nextPage)
    rows.value = response.data
    page.value = response.current_page
    lastPage.value = response.last_page
    total.value = response.total
  } catch (value) {
    error.value = message(value)
  } finally {
    loading.value = false
  }
}

async function loadCountries() {
  try {
    countries.value = await listarPaisesActivos()
  } catch (value) {
    error.value = message(value)
  }
}

async function open(item?: Departamento) {
  editing.value = item?.id ?? null
  Object.assign(form, { pais_id: item?.pais_id ?? null, ubigeo: item?.ubigeo ?? '', nombre: item?.nombre ?? '' })
  error.value = ''
  modal.value = true
  if (!countries.value.length) await loadCountries()
}

async function save() {
  const ubigeo = form.ubigeo.trim().toUpperCase()
  const nombre = form.nombre.trim().toUpperCase()
  if (!ubigeo) return void (error.value = 'El código ubigeo es obligatorio.')
  if (ubigeo.length > 10) return void (error.value = 'El código ubigeo admite como máximo 10 caracteres.')
  if (nombre.length < 3) return void (error.value = 'El nombre debe tener al menos 3 caracteres.')
  saving.value = true
  error.value = ''
  try {
    await guardarDepartamento(editing.value, { pais_id: form.pais_id || null, ubigeo, nombre })
    modal.value = false
    success.value = `Departamento ${editing.value ? 'actualizado' : 'registrado'} correctamente.`
    await load(editing.value ? page.value : 1)
  } catch (value) {
    error.value = message(value)
  } finally {
    saving.value = false
  }
}

async function toggle(item: Departamento) {
  const action = item.estado ? 'desactivar' : 'activar'
  if (!confirm(`¿Desea ${action} el departamento ${item.nombre}?`)) return
  error.value = ''
  try {
    const response = await cambiarEstadoDepartamento(item.id)
    item.estado = response.estado
    success.value = response.message ?? `Departamento ${item.estado ? 'activado' : 'desactivado'} correctamente.`
  } catch (value) {
    error.value = message(value)
  }
}

onMounted(() => load())
</script>

<template>
  <div class="page">
    <nav><RouterLink to="/inicio">Inicio</RouterLink> / Administración / Recursos Humanos / Departamentos</nav>
    <header class="hero"><div class="mark">DE</div><div><small>MIA · RECURSOS HUMANOS · MAESTROS</small><h1>Departamentos</h1><p>Divisiones territoriales asociadas al catálogo de países.</p></div><strong>{{ total }} registros</strong><button @click="open()">+ Nuevo departamento</button></header>
    <p v-if="success" class="flash success">✓ {{ success }}</p><p v-if="error" class="flash">{{ error }}</p>
    <form class="filters" @submit.prevent="load(1)"><label>Buscar por ubigeo o nombre<input v-model.trim="criterio" placeholder="Ej. 15 o LIMA"></label><button>Buscar</button><button type="button" class="soft" @click="criterio = ''; load(1)">Limpiar</button></form>
    <section class="table-card"><header><div><small>MAESTRO DE UBIGEO</small><h2>Departamentos registrados</h2></div></header><div v-if="loading" class="empty">Consultando departamentos…</div><div v-else-if="!rows.length" class="empty">No se encontraron departamentos.</div><div v-else class="scroll"><table><thead><tr><th>#</th><th>Ubigeo</th><th>Nombre</th><th>País</th><th>Estado</th><th>Acciones</th></tr></thead><tbody><tr v-for="item in rows" :key="item.id"><td>{{ item.id }}</td><td><b>{{ item.ubigeo }}</b></td><td>{{ item.nombre }}</td><td>{{ item.pais?.nombre ?? '—' }}</td><td><span :class="item.estado ? 'active' : 'inactive'">{{ item.estado ? 'Activo' : 'Inactivo' }}</span></td><td class="actions"><button class="edit" @click="open(item)">Editar</button><button :class="item.estado ? 'disable' : 'enable'" @click="toggle(item)">{{ item.estado ? 'Desactivar' : 'Activar' }}</button></td></tr></tbody></table></div><footer v-if="lastPage > 1"><button :disabled="page <= 1" @click="load(page - 1)">Anterior</button><span>Página {{ page }} de {{ lastPage }}</span><button :disabled="page >= lastPage" @click="load(page + 1)">Siguiente</button></footer></section>
    <div v-if="modal" class="backdrop" @mousedown.self="modal = false"><form class="dialog" @submit.prevent="save"><header><div class="mark">DE</div><div><small>MAESTRO DE UBIGEO</small><h2>{{ editing ? 'Editar' : 'Registrar' }} departamento</h2></div><button type="button" @click="modal = false">×</button></header><label>País<select v-model="form.pais_id"><option :value="null">-- Seleccionar país --</option><option v-for="country in countries" :key="country.id" :value="country.id">{{ country.nombre }}</option></select></label><div class="grid"><label>Código ubigeo *<input v-model="form.ubigeo" maxlength="10" @input="form.ubigeo = form.ubigeo.toUpperCase()"></label><label>Nombre *<input v-model="form.nombre" maxlength="100" @input="form.nombre = form.nombre.toUpperCase()"></label></div><footer><button type="button" class="soft" @click="modal = false">Cancelar</button><button :disabled="saving">{{ saving ? 'Guardando…' : editing ? 'Actualizar' : 'Registrar' }}</button></footer></form></div>
  </div>
</template>

<style scoped>
.page{--accent:#d64f83;color:#35464e}nav{margin-bottom:16px;color:#929fa5;font-size:.68rem}nav a{color:var(--accent);text-decoration:none}.hero{padding:20px 23px;display:flex;align-items:center;gap:14px;border-left:5px solid var(--accent);border-radius:12px;background:#fff}.mark{width:48px;height:48px;display:grid;place-items:center;border-radius:10px;color:#fff;background:var(--accent);font-size:.65rem;font-weight:800}.hero small,.table-card small,.dialog small{color:var(--accent);font-size:.48rem;font-weight:800}.hero h1{margin:2px 0;font-size:1.3rem}.hero p{margin:0;color:#7e8a90;font-size:.67rem}.hero strong{margin-left:auto;padding:6px 9px;border-radius:12px;color:var(--accent);background:#fff0f5;font-size:.52rem}.hero button,.filters button,.table-card footer button,.dialog button{padding:9px 12px;border:0;border-radius:6px;color:#fff;background:var(--accent);font-size:.52rem}.flash{padding:9px;border-radius:7px;color:#a64046;background:#fff0f0;font-size:.6rem}.flash.success{color:#287052;background:#edf9f3}.filters{margin-top:10px;padding:13px;display:flex;align-items:end;gap:6px;border-radius:9px;background:#fff}.filters label{margin-right:auto;width:min(420px,100%);font-size:.52rem}.filters input,.dialog input,.dialog select{width:100%;box-sizing:border-box;margin-top:4px;padding:8px;border:1px solid #d7dfe2;border-radius:6px;background:#fff;font:inherit;font-size:.54rem}.soft{color:#64727a!important;background:#edf1f3!important}.table-card{margin-top:10px;border-radius:10px;background:#fff;overflow:hidden}.table-card>header{padding:13px 15px;border-bottom:1px solid #e7ebed}.table-card h2{margin:2px 0;font-size:.78rem}.scroll{overflow:auto}table{width:100%;border-collapse:collapse;font-size:.54rem}th,td{padding:10px;border-bottom:1px solid #e8ecee;text-align:left}th{color:#fff;background:#5b6e8e}.active,.inactive{display:inline-block;padding:4px 7px;border-radius:10px;font-size:.44rem}.active{color:#287154;background:#e6f7ee}.inactive{color:#9d4046;background:#fdebed}.actions{display:flex;gap:5px}.actions button{padding:6px 8px;border:0;border-radius:5px;font-size:.46rem}.edit{color:#79500b;background:#ffe7bd}.disable{color:#9d4046;background:#fdebed}.enable{color:#287154;background:#e6f7ee}.empty{padding:45px;text-align:center;font-size:.6rem}.table-card>footer{padding:10px;display:flex;justify-content:center;align-items:center;gap:9px;font-size:.52rem}.backdrop{position:fixed;z-index:100;inset:0;padding:20px;display:grid;place-items:center;background:#172b3d88}.dialog{width:min(620px,100%);padding:20px;box-sizing:border-box;border-radius:12px;background:#fff}.dialog>header{display:flex;align-items:center;gap:9px}.dialog h2{margin:2px 0 12px;font-size:.9rem}.dialog>header>button{margin-left:auto;color:#59666c;background:none;font-size:1.2rem}.dialog label{display:grid;margin-top:10px;font-size:.5rem}.grid{display:grid;grid-template-columns:1fr 2fr;gap:9px}.dialog>footer{margin-top:16px;display:flex;justify-content:flex-end;gap:6px}@media(max-width:760px){.hero,.filters{flex-wrap:wrap}.hero strong{margin-left:0}.filters label{width:100%}.grid{grid-template-columns:1fr}.actions{min-width:140px}}
</style>
