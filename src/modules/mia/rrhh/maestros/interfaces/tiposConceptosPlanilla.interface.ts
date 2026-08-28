export type AgrupadoraBoleta = 'REMUNERACIONES' | 'DESCUENTOS' | 'APORTACIONES DEL EMPLEADOR'

export interface TipoConceptoPlanilla {
  id: number
  codigo: string
  descripcion: string
  agrupadora: AgrupadoraBoleta | null
  estado: boolean
}

export type TipoConceptoPlanillaPayload = Omit<TipoConceptoPlanilla, 'id' | 'estado'>

