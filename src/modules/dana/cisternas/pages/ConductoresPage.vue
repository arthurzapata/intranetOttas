<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { guardarConductor, listarConductores } from '../services/conductores'
import type { Conductor, ConductorPayload } from '../interfaces/conductores.interface'

const records = ref<Conductor[]>([])
const query = ref('')
const loading = ref(false)
const saving = ref(false)
const error = ref('')
const success = ref('')
const modal = ref(false)
const editing = ref<number | null>(null)
const page = ref(1)
const lastPage = ref(1)
const total = ref(0)
const form = reactive<ConductorPayload>({ apellido_paterno:'', apellido_materno:'', nombre:'', dni:'', direccion:'', referencia:'', celular:'', email:'' })
const assigned = computed(() => records.value.filter(item => (item.programaciones_count ?? 0) > 0).length)

async function load(target = 1) {
  loading.value = true; error.value = ''
  try {
    const response = await listarConductores(query.value, target)
    records.value = response.data; page.value = response.current_page; lastPage.value = response.last_page; total.value = response.total
  } catch (e) { error.value = message(e) } finally { loading.value = false }
}

function open(item?: Conductor) {
  editing.value = item?.id ?? null
  Object.assign(form, item ? { apellido_paterno:item.apellido_paterno, apellido_materno:item.apellido_materno, nombre:item.nombre, dni:item.dni, direccion:item.direccion, referencia:item.referencia, celular:item.celular, email:item.email } : { apellido_paterno:'', apellido_materno:'', nombre:'', dni:'', direccion:'', referencia:'', celular:'', email:'' })
  error.value = ''; modal.value = true
}

async function save() {
  if (Object.values(form).some(value => !String(value).trim())) { error.value = 'Complete todos los campos obligatorios.'; return }
  if (!/^\d{8}$/.test(form.dni)) { error.value = 'El DNI debe contener exactamente 8 dígitos.'; return }
  if (!/^\d{9}$/.test(form.celular)) { error.value = 'El celular debe contener exactamente 9 dígitos.'; return }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { error.value = 'Ingrese un correo electrónico válido.'; return }
  saving.value = true
  try {
    await guardarConductor(form, editing.value ?? undefined)
    modal.value = false; success.value = `Conductor ${editing.value ? 'actualizado' : 'registrado'} correctamente.`; await load(page.value)
  } catch (e) { error.value = message(e) } finally { saving.value = false }
}

const fullName = (item: Conductor) => `${item.apellido_paterno} ${item.apellido_materno}, ${item.nombre}`
const initials = (item: Conductor) => `${item.nombre.charAt(0)}${item.apellido_paterno.charAt(0)}`.toUpperCase()
const message = (e: unknown) => e instanceof Error ? e.message : 'No se pudo completar la operación.'
onMounted(() => load())
</script>

<template>
  <div class="page">
    <nav><RouterLink to="/inicio">Inicio</RouterLink> / Operaciones / Gestión de Cisternas / Conductores</nav>
    <header class="hero"><div class="mark">CO</div><div><small>DANA · GESTIÓN DE CISTERNAS</small><h1>Conductores</h1><p>Administra los datos de contacto del personal asignado a las programaciones.</p></div><button @click="open()">+ Registrar conductor</button></header>
    <p v-if="success" class="flash success">✓ {{ success }}</p><p v-if="error" class="flash">{{ error }}</p>
    <section class="summary"><article><small>CONDUCTORES REGISTRADOS</small><b>{{ total }}</b></article><article><small>CON ASIGNACIONES VISIBLES</small><b>{{ assigned }}</b></article><article><small>PÁGINA ACTUAL</small><b>{{ page }} / {{ lastPage }}</b></article></section>
    <form class="filters" @submit.prevent="load(1)"><label>Buscar conductor<input v-model.trim="query" placeholder="DNI, nombres, apellidos, celular o correo"></label><button>Buscar</button><button v-if="query" type="button" class="soft" @click="query='';load(1)">Limpiar</button></form>
    <div v-if="loading" class="empty">Cargando conductores…</div><div v-else-if="!records.length" class="empty">No se encontraron conductores registrados.</div>
    <section v-else class="cards"><article v-for="item in records" :key="item.id"><header><div class="avatar">{{ initials(item) }}</div><div><small>CONDUCTOR #{{ item.id }}</small><h2>{{ fullName(item) }}</h2></div></header><div class="dni"><span>DOCUMENTO DE IDENTIDAD</span><b>{{ item.dni || 'SIN DNI' }}</b></div><dl><div><dt>Celular</dt><dd>{{ item.celular }}</dd></div><div><dt>Correo</dt><dd>{{ item.email }}</dd></div><div><dt>Dirección</dt><dd>{{ item.direccion }}</dd></div><div><dt>Referencia</dt><dd>{{ item.referencia }}</dd></div><div v-if="item.programaciones_count !== undefined"><dt>Programaciones</dt><dd>{{ item.programaciones_count }}</dd></div></dl><button class="edit" @click="open(item)">Modificar datos</button></article></section>
    <footer v-if="lastPage > 1" class="pager"><button :disabled="page===1" @click="load(page-1)">Anterior</button><span>Página {{ page }} de {{ lastPage }}</span><button :disabled="page===lastPage" @click="load(page+1)">Siguiente</button></footer>
    <div v-if="modal" class="backdrop" @mousedown.self="modal=false"><form class="dialog" @submit.prevent="save"><header><div><small>DATOS DE LA PERSONA</small><h2>{{ editing ? 'Modificar' : 'Registrar' }} conductor</h2></div><button type="button" @click="modal=false">×</button></header><div class="fields"><label>Apellido paterno *<input v-model.trim="form.apellido_paterno" maxlength="80"></label><label>Apellido materno *<input v-model.trim="form.apellido_materno" maxlength="80"></label><label>Nombres *<input v-model.trim="form.nombre" maxlength="100"></label><label>DNI *<input v-model="form.dni" maxlength="8" inputmode="numeric" :readonly="editing!==null"></label><label class="wide">Dirección *<input v-model.trim="form.direccion" maxlength="100"></label><label class="wide">Referencia *<input v-model.trim="form.referencia" maxlength="100"></label><label>Celular *<input v-model="form.celular" maxlength="9" inputmode="numeric"></label><label>Correo electrónico *<input v-model.trim="form.email" type="email"></label></div><footer><button type="button" class="soft" @click="modal=false">Cancelar</button><button :disabled="saving">{{ saving ? 'Guardando…' : editing ? 'Actualizar conductor' : 'Registrar conductor' }}</button></footer></form></div>
  </div>
</template>

<style scoped>
.page{--accent:#e38b2f;color:#35464e}nav{margin-bottom:16px;color:#929fa5;font-size:.68rem}nav a{color:var(--accent);text-decoration:none}.hero{padding:20px 23px;display:flex;align-items:center;gap:14px;border-left:5px solid var(--accent);border-radius:12px;background:#fff}.mark{width:48px;height:48px;display:grid;place-items:center;border-radius:10px;color:#fff;background:var(--accent);font-size:.65rem;font-weight:800}.hero small,.summary small,.cards small,.dialog small{color:var(--accent);font-size:.48rem;font-weight:800}.hero h1{margin:2px 0;font-size:1.3rem}.hero p{margin:0;color:#7e8a90;font-size:.67rem}.hero button,.filters button,.dialog button,.pager button{padding:9px 12px;border:0;border-radius:6px;color:#fff;background:var(--accent);font-size:.52rem}.hero>button{margin-left:auto}.flash{padding:9px;border-radius:7px;color:#a64046;background:#fff0f0;font-size:.6rem}.flash.success{color:#287052;background:#edf9f3}.summary{margin-top:10px;display:grid;grid-template-columns:repeat(3,1fr);gap:7px}.summary article{padding:11px;display:grid;border-radius:8px;background:#fff}.summary b{font-size:.85rem}.filters{margin-top:8px;padding:12px;display:flex;align-items:end;gap:7px;border-radius:9px;background:#fff}.filters label{display:grid;flex:1;gap:4px;font-size:.47rem}.filters input,.dialog input{box-sizing:border-box;padding:8px;border:1px solid #d7dfe2;border-radius:6px;font:inherit;font-size:.5rem}.soft{color:#64727a!important;background:#edf1f3!important}.empty{margin-top:9px;padding:45px;text-align:center;border-radius:9px;background:#fff;font-size:.58rem}.cards{margin-top:9px;display:grid;grid-template-columns:repeat(3,1fr);gap:9px}.cards article{padding:14px;border-top:4px solid #536d91;border-radius:9px;background:#fff}.cards header{display:flex;align-items:center;gap:9px}.avatar{width:39px;height:39px;display:grid;place-items:center;border-radius:50%;color:#fff;background:#536d91;font-size:.58rem;font-weight:800}.cards h2{margin:2px 0;font-size:.64rem}.dni{margin:12px 0;padding:9px;display:flex;align-items:center;justify-content:space-between;border-radius:6px;background:#f1f5f8}.dni span{color:#718087;font-size:.42rem}.dni b{color:#326383;font-size:.68rem}.cards dl{margin:0}.cards dl div{padding:6px 0;display:flex;justify-content:space-between;gap:12px;border-bottom:1px solid #e8ecee;font-size:.46rem}.cards dt{color:#7d898f}.cards dd{margin:0;max-width:65%;overflow-wrap:anywhere;text-align:right;font-weight:700}.edit{width:100%;margin-top:10px;padding:8px;border:0;border-radius:5px;color:#79500b;background:#ffe7bd;font-size:.46rem}.pager{margin-top:12px;display:flex;justify-content:center;align-items:center;gap:10px;font-size:.52rem}.backdrop{position:fixed;z-index:100;inset:0;padding:20px;display:grid;place-items:center;background:#172b3d88}.dialog{width:min(650px,100%);max-height:94vh;overflow:auto;padding:20px;box-sizing:border-box;border-radius:12px;background:#fff}.dialog>header{display:flex}.dialog h2{margin:2px 0 12px;font-size:.9rem}.dialog>header>button{margin-left:auto;color:#59666c;background:none;font-size:1.2rem}.fields{display:grid;grid-template-columns:repeat(2,1fr);gap:9px}.fields label{display:grid;gap:4px;font-size:.47rem}.fields .wide{grid-column:1/-1}.dialog>footer{margin-top:14px;display:flex;justify-content:flex-end;gap:5px}button:disabled{opacity:.4}@media(max-width:850px){.hero,.filters{flex-wrap:wrap}.hero>button{margin-left:0}.summary,.cards,.fields{grid-template-columns:1fr}.fields .wide{grid-column:auto}}
</style>
