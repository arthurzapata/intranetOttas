export type EstadoProcesoContable = 'CREADO' | 'ABIERTO' | 'CERRADO'

export interface PeriodoContable {
  id: number
  codigo: string
  descripcion: string
  estado: boolean
  vigente: boolean
  estado_proceso: EstadoProcesoContable
  estado_proceso_label?: string
}

export interface PeriodosContablesResponse {
  data: PeriodoContable[]
  total: number
  current_page: number
  last_page: number
}

export interface PeriodoContablePayload { codigo: string; descripcion: string }
export interface ProcesoPeriodoPayload { generar_asiento: boolean; fecha: string; glosa: string }
