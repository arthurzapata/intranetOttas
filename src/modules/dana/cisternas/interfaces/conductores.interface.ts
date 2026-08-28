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
