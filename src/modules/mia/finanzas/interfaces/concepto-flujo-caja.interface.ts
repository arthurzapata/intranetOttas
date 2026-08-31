export type ActividadFlujoCaja = 'OPERACION' | 'INVERSION' | 'FINANCIAMIENTO'
export type NaturalezaFlujoCaja = 'INGRESO' | 'SALIDA'

export interface ConceptoFlujoCaja {
  id: number
  codigo: string
  nombre: string
  actividad: ActividadFlujoCaja
  naturaleza: NaturalezaFlujoCaja
  orden: number
  activo: boolean
}

export interface ConceptoFlujoCajaPayload {
  codigo: string
  nombre: string
  actividad: ActividadFlujoCaja
  naturaleza: NaturalezaFlujoCaja
  orden: number
}
