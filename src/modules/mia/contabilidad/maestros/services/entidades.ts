import { apiRequest } from '@/services/auth'
import type { EntidadContable, EntidadContablePayload, EntidadesContablesResponse } from '../interfaces/entidades.interface'

const base = '/mia/contabilidad/maestros/entidades'

export function listarEntidades(criterio: string, page: number) {
  const query = new URLSearchParams({ criterio, page: String(page) })
  return apiRequest<EntidadesContablesResponse>(`${base}?${query}`)
}

export function guardarEntidad(id: number | null, payload: EntidadContablePayload) {
  return apiRequest<EntidadContable>(`${base}${id ? `/${id}` : ''}`, {
    method: id ? 'PUT' : 'POST',
    body: JSON.stringify(payload),
  })
}

export function cambiarEstadoEntidad(id: number) {
  return apiRequest<EntidadContable>(`${base}/${id}/estado`, { method: 'PATCH' })
}
