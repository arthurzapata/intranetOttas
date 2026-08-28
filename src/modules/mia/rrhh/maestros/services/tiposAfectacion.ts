import { apiRequest } from '@/services/auth'
import type { TipoAfectacion, TipoAfectacionPayload } from '../interfaces/tiposAfectacion.interface'
const base = '/mia/rrhh/maestros/tipos-afectacion'

export function listarTiposAfectacion() {
  return apiRequest<TipoAfectacion[]>(base)
}

export function guardarTipoAfectacion(id: number | null, payload: TipoAfectacionPayload) {
  return apiRequest<TipoAfectacion>(`${base}${id ? `/${id}` : ''}`, {
    method: id ? 'PUT' : 'POST',
    body: JSON.stringify(payload),
  })
}

export function cambiarEstadoTipoAfectacion(id: number) {
  return apiRequest<{ estado: boolean; message?: string }>(`${base}/${id}/estado`, { method: 'PATCH' })
}
