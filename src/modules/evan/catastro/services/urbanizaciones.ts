import { apiRequest } from '@/services/auth'

export interface DistritoOption { id: number; nombre: string }
export interface Urbanizacion { id: number; nombre: string; distrito_id: number; distrito: DistritoOption; estado: boolean }
export interface UrbanizacionesResponse {
  data: Urbanizacion[]
  current_page: number
  last_page: number
  per_page: number
  total: number
  distritos: DistritoOption[]
}
export interface UrbanizacionPayload { distrito_id: number; nombre: string }

const basePath = '/lecturita/evan/catastro/urbanizaciones'

export function listarUrbanizaciones(params: { criterio: string; distrito_id: number; page: number }) {
  const query = new URLSearchParams({ page: String(params.page) })
  if (params.criterio) query.set('criterio', params.criterio)
  if (params.distrito_id) query.set('distrito_id', String(params.distrito_id))
  return apiRequest<UrbanizacionesResponse>(`${basePath}?${query}`)
}
export function crearUrbanizacion(payload: UrbanizacionPayload) {
  return apiRequest<Urbanizacion>(basePath, { method: 'POST', body: JSON.stringify(payload) })
}
export function actualizarUrbanizacion(id: number, payload: UrbanizacionPayload) {
  return apiRequest<Urbanizacion>(`${basePath}/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
}
export function eliminarUrbanizacion(id: number) {
  return apiRequest<void>(`${basePath}/${id}`, { method: 'DELETE' })
}
