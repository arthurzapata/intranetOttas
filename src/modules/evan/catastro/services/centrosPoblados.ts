import { apiRequest } from '@/services/auth'
import type { CatalogDistrict, CatalogFilters, CatalogItem, CatalogPayload, CatalogResponse } from '@/interfaces/catalog'
import type { CentroPoblado } from '../interfaces/centrosPoblados.interface'



const basePath = '/evan/catastro/centros-poblados'

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
