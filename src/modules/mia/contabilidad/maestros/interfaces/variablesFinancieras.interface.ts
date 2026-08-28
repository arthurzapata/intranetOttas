export type TipoPeriodoFinanciero = 'M' | 'A'
export type TipoValorFinanciero = 'Contable' | 'Predeterminado' | 'Fijo' | 'Formula'
export type TipoPublicacionFinanciera = 'LOCAL' | 'SUNASS/OTASS' | 'SUNASS' | 'OTASS'

export interface VariableFinanciera {
  id: number
  codigo: string
  nombre: string
  formula_valor: string
  tipo_periodo: TipoPeriodoFinanciero
  tipo_periodo_label?: string
  tipo_valor: TipoValorFinanciero
  tipo_valor_label?: string
  cod_equivalente: string | null
  tipo_equivalente: TipoPublicacionFinanciera | null
  unidad_ambito: string | null
  estado: boolean
}

export interface VariablesFinancierasResponse { data: VariableFinanciera[]; total: number; current_page: number; last_page: number }
export interface VariableFinancieraPayload {
  codigo?: string
  nombre: string
  formula_valor: string
  tipo_periodo: TipoPeriodoFinanciero
  tipo_valor: TipoValorFinanciero
  cod_equivalente: string | null
  tipo_equivalente: TipoPublicacionFinanciera | null
  unidad_ambito: string | null
}
