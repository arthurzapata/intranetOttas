import { apiRequest } from '@/services/auth'
import type { CatalogoAfectacion, AfectacionPlanilla, AfectacionPlanillaPayload, OpcionesAfectacion } from '../interfaces/afectacionesPlanilla.interface'
const base = '/mia/rrhh/maestros/afectaciones-planilla'

export function listarAfectacionesPlanilla() {
  return apiRequest<AfectacionPlanilla[]>(base)
}

export function listarOpcionesAfectacion() {
  return apiRequest<OpcionesAfectacion>(`${base}/opciones`)
}

export function guardarAfectacionPlanilla(id: number | null, payload: AfectacionPlanillaPayload) {
  return apiRequest<AfectacionPlanilla>(`${base}${id ? `/${id}` : ''}`, {
    method: id ? 'PUT' : 'POST',
    body: JSON.stringify(payload),
  })
}

export function cambiarEstadoAfectacionPlanilla(id: number) {
  return apiRequest<{ estado: boolean; message?: string }>(`${base}/${id}/estado`, { method: 'PATCH' })
}
