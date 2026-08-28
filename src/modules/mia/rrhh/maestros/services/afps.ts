import { apiRequest } from '@/services/auth'
import type { Afp, AfpPayload, AfpsResponse } from '../interfaces/afps.interface'
const base = '/mia/rrhh/maestros/afps'

export function listarAfps(criterio: string, page: number) {
  const query = new URLSearchParams({ criterio, page: String(page) })
  return apiRequest<AfpsResponse>(`${base}?${query}`)
}

export function guardarAfp(id: number | null, payload: AfpPayload) {
  return apiRequest<Afp>(`${base}${id ? `/${id}` : ''}`, {
    method: id ? 'PUT' : 'POST',
    body: JSON.stringify(payload),
  })
}

export function cambiarEstadoAfp(id: number) {
  return apiRequest<{ estado: boolean; message?: string }>(`${base}/${id}/estado`, { method: 'PATCH' })
}
