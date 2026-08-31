export type VistaLibroDiario = 'analitica' | 'resumida'
export interface PeriodoLibroDiario { id:number; codigo:string; mes:number; mes_label:string; anio:number; vigente:boolean }
export interface DetalleLibroDiario { fecha:string; numero_comprobante:string; cta_contable:string; descripcion_cuenta:string; glosa:string|null; debe:number; haber:number }
export interface TipoLibroDiario { tipo_comprobante_id:number; tipo_codigo:string; tipo_nombre:string; detalles:DetalleLibroDiario[]; primer_numero:string; ultimo_numero:string; total_debe:number; total_haber:number }
export interface ResumenLibroDiario { cta_contable:string; descripcion:string; total_debe:number; total_haber:number }
export interface LibroDiarioData { periodo:PeriodoLibroDiario; dataPorTipo?:TipoLibroDiario[]; rows?:ResumenLibroDiario[]; totalGeneralDebe?:number; totalGeneralHaber?:number; totalDebe?:number; totalHaber?:number }
export interface FiltrosLibroDiario { detalle_periodo_id:number|null; vista:VistaLibroDiario }
export interface LibroDiarioResponse { periodos:PeriodoLibroDiario[]; data:LibroDiarioData|null }
