import { apiRequest } from '@/services/auth'
import type { ConceptoCuenta, ConceptoCuentaPayload } from '../interfaces/concepto-cuenta.interface'

const base = '/mia/finanzas/conceptos-cuenta'

export function listarConceptosCuenta(buscar = '') {
  return apiRequest<ConceptoCuenta[]>(`${base}?buscar=${encodeURIComponent(buscar)}`)
}
export const obtenerConceptoCuenta = (id: number) => apiRequest<ConceptoCuenta>(`${base}/${id}`)
export const guardarConceptoCuenta = (id: number | null, data: ConceptoCuentaPayload) => apiRequest<ConceptoCuenta>(`${base}${id ? `/${id}` : ''}`, { method: id ? 'PUT' : 'POST', body: JSON.stringify(data) })
export const cambiarEstadoConceptoCuenta = (id: number) => apiRequest<ConceptoCuenta>(`${base}/${id}/estado`, { method: 'PATCH', body: JSON.stringify({}) })
export const eliminarConceptoCuenta = (id: number) => apiRequest<void>(`${base}/${id}`, { method: 'DELETE' })
