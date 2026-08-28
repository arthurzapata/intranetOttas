export type PeriodicidadPlanilla = 'Mensual' | 'Quincenal' | 'Semanal' | 'Eventual' | 'Anual'

export interface RegimenOption {
  id: number
  codigo: string
  descripcion: string
}

export interface TipoPlanilla {
  id: number
  codigo: string
  descripcion: string
  periodicidad: PeriodicidadPlanilla
  regimen_id: number | null
  regimen?: RegimenOption | null
  estado: boolean
}

export interface TipoPlanillaPayload {
  codigo: string
  descripcion: string
  periodicidad: PeriodicidadPlanilla
  regimen_id: number | null
}

export interface TiposPlanillaResponse {
  data: TipoPlanilla[]
  total: number
  current_page: number
  last_page: number
}

