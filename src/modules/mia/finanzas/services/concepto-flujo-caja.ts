import { apiRequest } from '@/services/auth'
import type { ConceptoFlujoCaja, ConceptoFlujoCajaPayload } from '../interfaces/concepto-flujo-caja.interface'

const base = '/mia/finanzas/conceptos-flujo-caja'
export const listarConceptosFlujoCaja = () => apiRequest<ConceptoFlujoCaja[]>(base)
export const obtenerConceptoFlujoCaja = (id: number) => apiRequest<ConceptoFlujoCaja>(`${base}/${id}`)
export const guardarConceptoFlujoCaja = (id: number | null, data: ConceptoFlujoCajaPayload) => apiRequest<ConceptoFlujoCaja>(`${base}${id ? `/${id}` : ''}`, { method: id ? 'PUT' : 'POST', body: JSON.stringify(data) })
export const cambiarEstadoConceptoFlujoCaja = (id: number) => apiRequest<ConceptoFlujoCaja>(`${base}/${id}/estado`, { method: 'PATCH', body: JSON.stringify({}) })
