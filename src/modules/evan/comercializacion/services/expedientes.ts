import { apiRequest } from '@/services/auth'
import type { Expediente, ExpedientePayload, ExpedientesResponse } from '../interfaces/expedientes.interface'






const basePath = '/evan/atencion/expedientes'
export function listarExpedientes(params: { criterio: string; estado: string; tipoexpediente_id: number; page: number }) {
  const query = new URLSearchParams({ page: String(params.page) })
  Object.entries(params).forEach(([key, value]) => { if (key !== 'page' && value !== '' && value !== 0) query.set(key, String(value)) })
  return apiRequest<ExpedientesResponse>(`${basePath}?${query}`)
}
export function crearExpediente(payload: ExpedientePayload) { return apiRequest<Expediente>(basePath, { method: 'POST', body: JSON.stringify(payload) }) }
export function actualizarExpediente(id: number, payload: ExpedientePayload) { return apiRequest<Expediente>(`${basePath}/${id}`, { method: 'PUT', body: JSON.stringify(payload) }) }
export function eliminarExpediente(id: number) { return apiRequest<void>(`${basePath}/${id}`, { method: 'DELETE' }) }
