export type EstadoPeriodoFinanciero = 'CREADO' | 'ABIERTO' | 'CERRADO'
export interface DetallePeriodoFinanciero { id: number; periodo_financiero_id: number; anio: number; mes: number; estado: boolean; estado_periodo: EstadoPeriodoFinanciero }
export interface PeriodoFinanciero { id: number; anio: number; descripcion: string; estado: boolean; estado_ejercicio: EstadoPeriodoFinanciero; detalles_count?: number; detalles?: DetallePeriodoFinanciero[] }
export interface PeriodoFinancieroPayload { anio: number; descripcion: string }
