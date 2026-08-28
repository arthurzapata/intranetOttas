import { apiRequest } from '@/services/auth'
import type { Medidor, MedidorPayload, MedidoresResponse } from '../interfaces/medidores.interface'






const basePath = '/evan/medicion/medidores'
export function listarMedidores(filters: { criterio: string; procedencia_id: number; diametro_id: number; marca_id: number; tipo: string; page: number }) {
  const query = new URLSearchParams({ page: String(filters.page) })
  Object.entries(filters).forEach(([key, value]) => { if (key !== 'page' && value) query.set(key, String(value)) })
  return apiRequest<MedidoresResponse>(`${basePath}?${query}`)
}
export function crearMedidor(payload: MedidorPayload) {
  return apiRequest<Medidor>(basePath, { method: 'POST', body: JSON.stringify(payload) })
}
export function obtenerMedidor(id: number) { return apiRequest<Medidor>(`${basePath}/${id}`) }
