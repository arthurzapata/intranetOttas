import { apiRequest } from '@/services/auth'
import type { Pais, PaisesResponse, PaisPayload } from '../interfaces/paises.interface'
const base = '/mia/rrhh/maestros/paises'

export function listarPaises(criterio: string, page: number) {
  const query = new URLSearchParams({ criterio, page: String(page) })
  return apiRequest<PaisesResponse>(`${base}?${query}`)
}

export function guardarPais(id: number | null, payload: PaisPayload) {
  return apiRequest<Pais>(`${base}${id ? `/${id}` : ''}`, {
    method: id ? 'PUT' : 'POST',
    body: JSON.stringify(payload),
  })
}

export function cambiarEstadoPais(id: number) {
  return apiRequest<{ estado: boolean; message?: string }>(`${base}/${id}/estado`, {
    method: 'PATCH',
  })
}
