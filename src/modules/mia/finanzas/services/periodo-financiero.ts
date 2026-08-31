import { apiRequest } from '@/services/auth'
import type { PeriodoFinanciero, PeriodoFinancieroPayload } from '../interfaces/periodo-financiero.interface'
const base = '/mia/finanzas/periodos-financieros'
export const listarPeriodosFinancieros = () => apiRequest<PeriodoFinanciero[]>(base)
export const obtenerPeriodoFinanciero = (id: number) => apiRequest<PeriodoFinanciero>(`${base}/${id}`)
export const guardarPeriodoFinanciero = (id: number | null, data: PeriodoFinancieroPayload) => apiRequest<void>(`${base}${id ? `/${id}` : ''}`, { method: id ? 'PUT' : 'POST', body: JSON.stringify(data) })
export const cambiarEstadoPeriodoFinanciero = (id: number) => apiRequest<void>(`${base}/${id}/estado`, { method: 'PATCH', body: JSON.stringify({}) })
export const obtenerMesesPeriodoFinanciero = (id: number) => apiRequest<PeriodoFinanciero>(`${base}/${id}/meses`)
export const generarMesesPeriodoFinanciero = (id: number) => apiRequest<void>(`${base}/${id}/meses`, { method: 'POST', body: JSON.stringify({}) })
export const cambiarEstadoMesFinanciero = (id: number, estado: 'abrir' | 'cerrar') => apiRequest<void>(`${base}/meses/${id}/${estado}`, { method: 'PATCH', body: JSON.stringify({}) })
