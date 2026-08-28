export interface CatalogoAfectacion {
  id: number
  codigo: string
  descripcion: string
}

export interface AfectacionPlanilla {
  id: number
  concepto_id: number
  tipo_afectacion_id: number
  valor: number | null
  concepto: CatalogoAfectacion | null
  tipo_afectacion: CatalogoAfectacion | null
  estado: boolean
}

export interface AfectacionPlanillaPayload {
  concepto_id: number | null
  tipo_afectacion_id: number | null
  valor: number | null
}

export interface OpcionesAfectacion {
  conceptos: CatalogoAfectacion[]
  tipos_afectacion: CatalogoAfectacion[]
}

