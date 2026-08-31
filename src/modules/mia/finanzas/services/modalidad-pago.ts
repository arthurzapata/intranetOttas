import { apiRequest } from '@/services/auth'
import type { ModalidadPago, ModalidadPagoPayload, ModalidadPagoResponse } from '../interfaces/modalidad-pago.interface'
const base = '/mia/finanzas/modalidades-pago'
export const listarModalidadesPago = (buscar = '', page = 1) => apiRequest<ModalidadPagoResponse>(`${base}?buscar=${encodeURIComponent(buscar)}&page=${page}`)
export const obtenerModalidadPago = (id: number) => apiRequest<ModalidadPago>(`${base}/${id}`)
export const guardarModalidadPago = (id: number | null, data: ModalidadPagoPayload) => apiRequest<ModalidadPago>(`${base}${id ? `/${id}` : ''}`, { method: id ? 'PUT' : 'POST', body: JSON.stringify(data) })
export const desactivarModalidadPago = (id: number) => apiRequest<void>(`${base}/${id}`, { method: 'DELETE' })
