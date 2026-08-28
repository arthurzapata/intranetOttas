import { apiRequest } from '@/services/auth'
import type { ConexionFilters, ConexionesResponse } from '../interfaces/conexiones.interface'









export async function listarConexiones(filters: ConexionFilters) {
  const query = new URLSearchParams()
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== '' && value !== 0) query.set(key, String(value))
  })
  query.set('page', String(filters.page))
  return apiRequest<ConexionesResponse>(`/lecturita/evan/catastro/conexiones?${query}`)
}
