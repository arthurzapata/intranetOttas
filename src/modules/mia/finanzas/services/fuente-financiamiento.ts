import { apiRequest } from '@/services/auth'
import type { FuenteFinanciamiento, FuenteFinanciamientoPayload, FuenteFinanciamientoResponse } from '../interfaces/fuente-financiamiento.interface'
const base = '/mia/finanzas/fuentes-financiamiento'
export const listarFuentesFinanciamiento = (buscar = '', page = 1) => apiRequest<FuenteFinanciamientoResponse>(`${base}?buscar=${encodeURIComponent(buscar)}&page=${page}`)
export const obtenerFuenteFinanciamiento = (id: number) => apiRequest<FuenteFinanciamiento>(`${base}/${id}`)
export const guardarFuenteFinanciamiento = (id: number | null, data: FuenteFinanciamientoPayload) => apiRequest<FuenteFinanciamiento>(`${base}${id ? `/${id}` : ''}`, { method: id ? 'PUT' : 'POST', body: JSON.stringify(data) })
export const inactivarFuenteFinanciamiento = (id: number) => apiRequest<void>(`${base}/${id}`, { method: 'DELETE' })
