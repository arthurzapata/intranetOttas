import { apiRequest } from '@/services/auth'
import type { PaisOption, Departamento, DepartamentosResponse, DepartamentoPayload } from '../interfaces/departamentos.interface'
const base = '/mia/rrhh/maestros/departamentos'

export function listarDepartamentos(criterio: string, page: number) {
  const query = new URLSearchParams({ criterio, page: String(page) })
  return apiRequest<DepartamentosResponse>(`${base}?${query}`)
}

export function listarPaisesActivos() {
  return apiRequest<PaisOption[]>('/mia/rrhh/maestros/paises/opciones')
}

export function guardarDepartamento(id: number | null, payload: DepartamentoPayload) {
  return apiRequest<Departamento>(`${base}${id ? `/${id}` : ''}`, {
    method: id ? 'PUT' : 'POST',
    body: JSON.stringify(payload),
  })
}

export function cambiarEstadoDepartamento(id: number) {
  return apiRequest<{ estado: boolean; message?: string }>(`${base}/${id}/estado`, {
    method: 'PATCH',
  })
}
