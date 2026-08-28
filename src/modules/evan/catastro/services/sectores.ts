import { apiRequest } from '@/services/auth'
import type { Sector, SectoresResponse, SectorPayload } from '../interfaces/sectores.interface'









const basePath = '/lecturita/evan/catastro/sectores'

export function listarSectores(params: { criterio: string; distrito_id: number; page: number }) {
  const query = new URLSearchParams({ page: String(params.page) })
  if (params.criterio) query.set('criterio', params.criterio)
  if (params.distrito_id) query.set('distrito_id', String(params.distrito_id))
  return apiRequest<SectoresResponse>(`${basePath}?${query}`)
}

export function crearSector(payload: SectorPayload) {
  return apiRequest<Sector>(basePath, { method: 'POST', body: JSON.stringify(payload) })
}

export function actualizarSector(id: number, payload: SectorPayload) {
  return apiRequest<Sector>(`${basePath}/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
}

export function eliminarSector(id: number) {
  return apiRequest<void>(`${basePath}/${id}`, { method: 'DELETE' })
}
