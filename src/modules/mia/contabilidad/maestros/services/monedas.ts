import { apiRequest } from '@/services/auth'
import type { Moneda, MonedaPayload, MonedasResponse } from '../interfaces/monedas.interface'

const base = '/mia/contabilidad/maestros/monedas'

export function listarMonedas(criterio: string, page: number) {
  const query = new URLSearchParams({ criterio, page: String(page) })
  return apiRequest<MonedasResponse>(`${base}?${query}`)
}

export function guardarMoneda(id: number | null, payload: MonedaPayload) {
  return apiRequest<Moneda>(`${base}${id ? `/${id}` : ''}`, {
    method: id ? 'PUT' : 'POST',
    body: JSON.stringify(payload),
  })
}

export function cambiarEstadoMoneda(id: number) {
  return apiRequest<Moneda>(`${base}/${id}/estado`, { method: 'PATCH' })
}
