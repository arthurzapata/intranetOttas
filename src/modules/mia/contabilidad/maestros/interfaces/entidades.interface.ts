export interface EntidadContable {
  id: number
  nombre: string
  descripcion: string
  estado: boolean
}

export interface EntidadesContablesResponse {
  data: EntidadContable[]
  total: number
  current_page: number
  last_page: number
}

export interface EntidadContablePayload {
  nombre: string
  descripcion: string
}
