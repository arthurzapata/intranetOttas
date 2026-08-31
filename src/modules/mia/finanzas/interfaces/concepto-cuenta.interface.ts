export interface ConceptoCuenta {
  id: number
  nombre: string
  descripcion: string
  orden: number
  activo: boolean
  created_at?: string
  updated_at?: string
}

export interface ConceptoCuentaPayload {
  nombre: string
  descripcion: string
  orden: number
}
