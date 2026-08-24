import { apiRequest } from '@/services/auth'

export interface DistritoOption { id: number; nombre: string }
export interface Calle { id: number; nombre: string; distrito_id: number; distrito: DistritoOption; estado: boolean }
export interface CallesResponse {
  data: Calle[]
  current_page: number
  last_page: number
  per_page: number
  total: number
  distritos: DistritoOption[]
}
export interface CallePayload { distrito_id: number; nombre: string }

const basePath = '/lecturita/evan/catastro/calles'

export function listarCalles(params: { criterio: string; distrito_id: number; page: number }) {
  const query = new URLSearchParams({ page: String(params.page) })
  if (params.criterio) query.set('criterio', params.criterio)
  if (params.distrito_id) query.set('distrito_id', String(params.distrito_id))
  return apiRequest<CallesResponse>(`${basePath}?${query}`)
}
export function crearCalle(payload: CallePayload) {
  return apiRequest<Calle>(basePath, { method: 'POST', body: JSON.stringify(payload) })
}
export function actualizarCalle(id: number, payload: CallePayload) {
  return apiRequest<Calle>(`${basePath}/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
}
export function eliminarCalle(id: number) {
  return apiRequest<void>(`${basePath}/${id}`, { method: 'DELETE' })
}
