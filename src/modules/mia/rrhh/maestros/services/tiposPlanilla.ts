import { apiRequest } from '@/services/auth'
import type { PeriodicidadPlanilla, RegimenOption, TipoPlanilla, TipoPlanillaPayload, TiposPlanillaResponse } from '../interfaces/tiposPlanilla.interface'
const base = '/mia/rrhh/maestros/tipos-planilla'

export const periodicidades: PeriodicidadPlanilla[] = ['Mensual', 'Quincenal', 'Semanal', 'Eventual', 'Anual']

export function listarTiposPlanilla(criterio: string, regimenId: number | null, page: number) {
  const query = new URLSearchParams({ criterio, page: String(page) })
  if (regimenId !== null) query.set('regimen_id', String(regimenId))
  return apiRequest<TiposPlanillaResponse>(`${base}?${query}`)
}

export function listarRegimenesActivos() {
  return apiRequest<RegimenOption[]>('/mia/rrhh/maestros/regimenes/opciones')
}

export function guardarTipoPlanilla(id: number | null, payload: TipoPlanillaPayload) {
  return apiRequest<TipoPlanilla>(`${base}${id ? `/${id}` : ''}`, {
    method: id ? 'PUT' : 'POST',
    body: JSON.stringify(payload),
  })
}

export function cambiarEstadoTipoPlanilla(id: number) {
  return apiRequest<{ estado: boolean; message?: string }>(`${base}/${id}/estado`, { method: 'PATCH' })
}
