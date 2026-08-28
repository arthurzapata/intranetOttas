import { apiRequest } from '@/services/auth'
import type { BandejaResponse, BandejaTipo } from '../../interfaces/documento'
import type { BandejaFilters } from '../interfaces/bandejas.interface'

const basePath = '/lecturita/etrami/v2/bandejas'

export function listarBandeja(tipo: BandejaTipo, filters: BandejaFilters) {
  const query = new URLSearchParams({ page: String(filters.page) })
  Object.entries(filters).forEach(([key, value]) => { if (key !== 'page' && value !== '' && value !== 0) query.set(key, String(value)) })
  return apiRequest<BandejaResponse>(`${basePath}/${tipo}?${query}`)
}
export function ejecutarAccion(accion: string, historialIds: number[], payload: Record<string, unknown> = {}) {
  return apiRequest<void>(`/lecturita/etrami/v2/documentos/${accion}`, { method: 'POST', body: JSON.stringify({ historial_ids: historialIds, ...payload }) })
}
