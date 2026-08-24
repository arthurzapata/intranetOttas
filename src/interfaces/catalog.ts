export interface CatalogDistrict { id: number; nombre: string }

export interface CatalogItem {
  id: number
  nombre: string
  distrito_id: number
  distrito: CatalogDistrict
  estado: boolean
  conexiones_count?: number
  manzanas_count?: number
}

export interface CatalogResponse<T extends CatalogItem = CatalogItem> {
  data: T[]
  current_page: number
  last_page: number
  per_page: number
  total: number
  distritos: CatalogDistrict[]
}

export interface CatalogFilters { criterio: string; distrito_id: number; page: number }
export interface CatalogPayload { distrito_id: number; nombre: string }
export interface CatalogService<T extends CatalogItem = CatalogItem> {
  list: (filters: CatalogFilters) => Promise<CatalogResponse<T>>
  create: (payload: CatalogPayload) => Promise<T>
  update: (id: number, payload: CatalogPayload) => Promise<T>
  remove?: (id: number) => Promise<void>
}
