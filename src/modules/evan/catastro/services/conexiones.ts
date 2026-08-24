import { apiRequest } from '@/services/auth'

export interface CatalogOption {
  id: number
  nombre: string
}

export interface Conexion {
  id: number
  codigo: string
  codigo_catastral?: string | null
  propietario: string
  predio_id: number
  distrito?: string | null
  direccion?: string | null
  numero_medidor?: string | null
  tipo_facturacion?: string | null
  categoria?: string | null
  servicios: CatalogOption[]
}

export interface ConexionFilters {
  criterio: string
  distrito_id: number
  tipo_facturacion_id: number
  categoria_id: number
  servicio_id: number
  page: number
}

export interface ConexionesResponse {
  data: Conexion[]
  current_page: number
  last_page: number
  total: number
  per_page: number
  filtros: {
    distritos: CatalogOption[]
    tipos_facturacion: CatalogOption[]
    categorias: CatalogOption[]
    servicios: CatalogOption[]
  }
}

export async function listarConexiones(filters: ConexionFilters) {
  const query = new URLSearchParams()
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== '' && value !== 0) query.set(key, String(value))
  })
  query.set('page', String(filters.page))
  return apiRequest<ConexionesResponse>(`/lecturita/evan/catastro/conexiones?${query}`)
}
