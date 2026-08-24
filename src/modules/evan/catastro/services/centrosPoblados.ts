import { apiRequest } from '@/services/auth'
import type { CatalogDistrict, CatalogFilters, CatalogItem, CatalogPayload, CatalogResponse } from '@/interfaces/catalog'

export interface CentroPoblado extends CatalogItem {
  distrito: CatalogDistrict
}

const basePath = '/lecturita/evan/catastro/centros-poblados'

export function listarCentrosPoblados(params: CatalogFilters) {
  const query = new URLSearchParams({ page: String(params.page) })
  if (params.criterio) query.set('criterio', params.criterio)
  if (params.distrito_id) query.set('distrito_id', String(params.distrito_id))
  return apiRequest<CatalogResponse<CentroPoblado>>(`${basePath}?${query}`)
}

export function crearCentroPoblado(payload: CatalogPayload) {
  return apiRequest<CentroPoblado>(basePath, { method: 'POST', body: JSON.stringify(payload) })
}

export function actualizarCentroPoblado(id: number, payload: CatalogPayload) {
  return apiRequest<CentroPoblado>(`${basePath}/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
}
