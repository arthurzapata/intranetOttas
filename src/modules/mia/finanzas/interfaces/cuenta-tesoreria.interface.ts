export interface CatalogoTesoreria { id: number; nombre?: string; descripcion?: string; simbolo?: string; cta_contable?: string }
export interface CuentaContableTesoreria extends CatalogoTesoreria { cta_contable: string; descripcion: string }
export interface CuentaTesoreria {
  id: number
  cuenta_contable_id: number
  codigo_concepto: number
  numero_cuenta_bancaria: string
  correlativo_cheque?: string | null
  moneda_id: number
  banco_id: number
  fuente_financiamiento_id: number
  activo: boolean
  cuenta_contable?: CuentaContableTesoreria
  concepto_cuenta?: CatalogoTesoreria
  moneda?: CatalogoTesoreria
  banco?: CatalogoTesoreria
  fuente_financiamiento?: CatalogoTesoreria
}
export interface CuentaTesoreriaPayload { cuenta_contable_id: number; codigo_concepto: number; numero_cuenta_bancaria: string; correlativo_cheque: string; moneda_id: number; banco_id: number; fuente_financiamiento_id: number }
export interface CatalogosCuentaTesoreria { cuentas_contables: CuentaContableTesoreria[]; conceptos: CatalogoTesoreria[]; fuentes: CatalogoTesoreria[]; monedas: CatalogoTesoreria[]; bancos: CatalogoTesoreria[] }
export type TipoFlujoCuenta = 'I' | 'E' | ''
export interface ClasificacionCuentaFlujo { id: number; cta_contable: string; descripcion: string; nivel: number; naturaleza_label?: string; tipo_flujo_caja?: 'I' | 'E' | null; activa: boolean }
