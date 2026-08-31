import { apiRequest } from '@/services/auth'
import type { DestinoMovilidad, DestinoMovilidadPayload } from '../interfaces/destino-movilidad.interface'
const base = '/mia/finanzas/destinos-movilidad'
export const listarDestinosMovilidad = () => apiRequest<DestinoMovilidad[]>(base)
export const obtenerDestinoMovilidad = (id: number) => apiRequest<DestinoMovilidad>(`${base}/${id}`)
export const guardarDestinoMovilidad = (id: number | null, data: DestinoMovilidadPayload) => apiRequest<void>(`${base}${id ? `/${id}` : ''}`, { method: id ? 'PUT' : 'POST', body: JSON.stringify(data) })
export const cambiarEstadoDestinoMovilidad = (id: number) => apiRequest<void>(`${base}/${id}/estado`, { method: 'PATCH', body: JSON.stringify({}) })
