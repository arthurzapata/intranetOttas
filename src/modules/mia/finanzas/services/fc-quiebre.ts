import { apiRequest } from '@/services/auth'
import type { FcQuiebre, FcQuiebrePayload, FcQuiebreResponse } from '../interfaces/fc-quiebre.interface'
const base = '/mia/finanzas/quiebres-flujo-caja'
export const listarQuiebresFlujoCaja = () => apiRequest<FcQuiebreResponse>(base)
export const obtenerQuiebreFlujoCaja = (id: number) => apiRequest<FcQuiebre>(`${base}/${id}`)
export const guardarQuiebreFlujoCaja = (id: number | null, data: FcQuiebrePayload) => apiRequest<void>(`${base}${id ? `/${id}` : ''}`, { method: id ? 'PUT' : 'POST', body: JSON.stringify({ ...data, tipo_movimiento: data.tipo_movimiento || null }) })
export const cambiarEstadoQuiebreFlujoCaja = (id: number) => apiRequest<void>(`${base}/${id}/estado`, { method: 'PATCH', body: JSON.stringify({}) })
