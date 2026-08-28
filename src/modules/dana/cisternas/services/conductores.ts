import { apiRequest } from '@/services/auth'
import type { Conductor, ConductorPayload, ConductoresResponse } from '../interfaces/conductores.interface'







const base = '/lecturita/dana/gestion-cisternas/conductores'

export function listarConductores(criterio = '', page = 1) {
  const query = new URLSearchParams({ criterio, page: String(page) })
  return apiRequest<ConductoresResponse>(`${base}?${query}`)
}

export function guardarConductor(data: ConductorPayload, id?: number) {
  return apiRequest<Conductor>(id ? `${base}/${id}` : base, {
    method: id ? 'PUT' : 'POST',
    body: JSON.stringify(data),
  })
}
