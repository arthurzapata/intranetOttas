import { apiRequest } from '@/services/auth'
import type { Calle, CallesResponse, CallePayload } from '../interfaces/calles.interface'






const basePath = '/evan/catastro/calles'

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
