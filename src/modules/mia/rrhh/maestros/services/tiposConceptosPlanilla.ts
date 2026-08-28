import { apiRequest } from '@/services/auth'
import type { AgrupadoraBoleta, TipoConceptoPlanilla, TipoConceptoPlanillaPayload } from '../interfaces/tiposConceptosPlanilla.interface'
const base = '/lecturita/mia/rrhh/maestros/tipos-conceptos-planilla'

export const agrupadoras: AgrupadoraBoleta[] = ['REMUNERACIONES', 'DESCUENTOS', 'APORTACIONES DEL EMPLEADOR']

export function listarTiposConceptosPlanilla() {
  return apiRequest<TipoConceptoPlanilla[]>(base)
}

export function guardarTipoConceptoPlanilla(id: number | null, payload: TipoConceptoPlanillaPayload) {
  return apiRequest<TipoConceptoPlanilla>(`${base}${id ? `/${id}` : ''}`, {
    method: id ? 'PUT' : 'POST',
    body: JSON.stringify(payload),
  })
}

export function cambiarEstadoTipoConceptoPlanilla(id: number) {
  return apiRequest<{ estado: boolean; message?: string }>(`${base}/${id}/estado`, { method: 'PATCH' })
}
