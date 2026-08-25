import { apiRequest } from '@/services/auth'

export interface Conductor {
  id: number
  apellido_paterno: string
  apellido_materno: string
  nombre: string
  dni: string
  direccion: string
  referencia: string
  celular: string
  email: string
  programaciones_count?: number
}

export interface ConductorPayload {
  apellido_paterno: string
  apellido_materno: string
  nombre: string
  dni: string
  direccion: string
  referencia: string
  celular: string
  email: string
}

export interface ConductoresResponse {
  data: Conductor[]
  current_page: number
  last_page: number
  total: number
}

const base = '/lecturita/dana/gestion-cisternas/conductores'

export function listarConductores(criterio = '', page = 1) {
  const query = new URLSearchParams({ criterio, page: String(page) })
  return apiRequest<ConductoresResponse>(`${base}?${query}`)
}

export function guardarConductor(data: ConductorPayload, id?: number) {
  return apiRequest<Conductor>(id ? `${base}/${id}` : base, {
    method: id ? 'PUT' : 'POST',
    body: JSON.stringify(data),
  })
}
