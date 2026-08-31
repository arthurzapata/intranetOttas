import { apiRequest } from '@/services/auth'
import type { CatalogoEquivalencia, FcEquivalencia, FcEquivalenciaPayload, FcEquivalenciaResponse } from '../interfaces/fc-equivalencia.interface'
const base = '/mia/finanzas/equivalencias-flujo-caja'
export const listarEquivalenciasFlujoCaja = () => apiRequest<FcEquivalenciaResponse>(base)
export const obtenerEquivalenciaFlujoCaja = (id: number) => apiRequest<FcEquivalencia>(`${base}/${id}`)
export const buscarCuentasEquivalencia = (q: string) => apiRequest<CatalogoEquivalencia[]>(`${base}/cuentas?q=${encodeURIComponent(q)}`)
export const guardarEquivalenciaFlujoCaja = (id: number | null, data: FcEquivalenciaPayload) => apiRequest<void>(`${base}${id ? `/${id}` : ''}`, { method: id ? 'PUT' : 'POST', body: JSON.stringify(data) })
export const cambiarEstadoEquivalenciaFlujoCaja = (id: number) => apiRequest<void>(`${base}/${id}/estado`, { method: 'PATCH', body: JSON.stringify({}) })
