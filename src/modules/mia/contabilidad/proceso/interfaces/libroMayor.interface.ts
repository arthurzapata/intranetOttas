export type VistaLibroMayor = 'analitica' | 'resumida'
export interface PeriodoLibroMayor { id:number; codigo:string; mes:number; mes_label:string; anio:number; vigente:boolean }
export interface MovimientoLibroMayor { fecha:string; numero_comprobante:string; tipo_codigo:string; tipo_nombre:string; glosa:string|null; debe:number; haber:number }
export interface CuentaLibroMayor { cuenta_contable_id?:number; cta_contable:string; descripcion:string; naturaleza:string; saldo_inicial_debe:number; saldo_inicial_haber:number; movimientos?:MovimientoLibroMayor[]; total_debe_mov:number; total_haber_mov:number; total_mes_debe:number; total_mes_haber:number; saldo_final:number; saldo_final_tipo:'D'|'H' }
export interface LibroMayorData { periodo:PeriodoLibroMayor; cuentas:CuentaLibroMayor[]; totalGeneralDebe:number; totalGeneralHaber:number }
export interface FiltrosLibroMayor { detalle_periodo_id:number|null; vista:VistaLibroMayor }
export interface LibroMayorResponse { periodos:PeriodoLibroMayor[]; data:LibroMayorData|null }
