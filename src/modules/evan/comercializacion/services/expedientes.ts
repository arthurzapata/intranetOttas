import { apiRequest } from '@/services/auth'

export interface Option { id: number; nombre: string }
export interface Expediente {
  id: number
  numero_expediente: string
  fecha: string
  estado: number
  tipoexpediente_id: number
  flujoatencion_id: number
  motivoexpediente_id: number
  tipo_expediente?: Option | null
  flujo?: Option | null
  motivo?: Option | null
  trabajos_count?: number
}
export interface ExpedientePayload {
  numero_expediente: string
  fecha: string
  estado: number
  tipoexpediente_id: number
  flujoatencion_id: number
  motivoexpediente_id: number
}
export interface ExpedientesResponse {
  data: Expediente[]
  current_page: number
  last_page: number
  total: number
  catalogs: { tipos: Option[]; flujos: Option[]; motivos: Option[] }
}

const basePath = '/lecturita/evan/atencion/expedientes'
export function listarExpedientes(params: { criterio: string; estado: string; tipoexpediente_id: number; page: number }) {
  const query = new URLSearchParams({ page: String(params.page) })
  Object.entries(params).forEach(([key, value]) => { if (key !== 'page' && value !== '' && value !== 0) query.set(key, String(value)) })
  return apiRequest<ExpedientesResponse>(`${basePath}?${query}`)
}
export function crearExpediente(payload: ExpedientePayload) { return apiRequest<Expediente>(basePath, { method: 'POST', body: JSON.stringify(payload) }) }
export function actualizarExpediente(id: number, payload: ExpedientePayload) { return apiRequest<Expediente>(`${basePath}/${id}`, { method: 'PUT', body: JSON.stringify(payload) }) }
export function eliminarExpediente(id: number) { return apiRequest<void>(`${basePath}/${id}`, { method: 'DELETE' }) }
