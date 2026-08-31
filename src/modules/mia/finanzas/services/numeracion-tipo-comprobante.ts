import { apiRequest } from '@/services/auth'
import type { NumeracionTipoComprobante, NumeracionTipoComprobantePayload, NumeracionTipoComprobanteResponse } from '../interfaces/numeracion-tipo-comprobante.interface'
const base = '/mia/finanzas/numeraciones-tipo-comprobante'
export const listarNumeracionesTipoComprobante = (buscar = '', page = 1) => apiRequest<NumeracionTipoComprobanteResponse>(`${base}?buscar=${encodeURIComponent(buscar)}&page=${page}`)
export const obtenerNumeracionTipoComprobante = (id: number) => apiRequest<NumeracionTipoComprobante>(`${base}/${id}`)
export const guardarNumeracionTipoComprobante = (id: number | null, data: NumeracionTipoComprobantePayload) => apiRequest<NumeracionTipoComprobante>(`${base}${id ? `/${id}` : ''}`, { method: id ? 'PUT' : 'POST', body: JSON.stringify(data) })
export const cambiarEstadoNumeracionTipoComprobante = (id: number) => apiRequest<void>(`${base}/${id}/estado`, { method: 'PATCH', body: JSON.stringify({}) })
