import type { ConceptoFlujoCaja } from './concepto-flujo-caja.interface'

export interface CuentaContableFlujo {
  id: number
  cta_contable: string
  descripcion: string
}

export interface CuentaFlujoCaja {
  id: number
  concepto_flujo_caja_id: number
  cuenta_contable_id: number
  activo: boolean
  cuenta_contable: CuentaContableFlujo
}

export interface CuentaFlujoCajaPayload {
  concepto_flujo_caja_id: number
  cuenta_contable_id: number
}

export type ConceptoCuentaFlujo = ConceptoFlujoCaja
