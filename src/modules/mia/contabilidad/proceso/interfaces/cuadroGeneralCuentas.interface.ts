export type TipoSaldoCuadro = 'mensual' | 'acumulado'
export interface CuentaCuadroOption { cta_contable:string; descripcion:string }
export interface PeriodoCuadro { id:number; mes:number; mes_label:string }
export interface FilaCuadroGeneral { cta_contable:string; descripcion:string; nivel:number; es_total:boolean; es_padre:boolean; saldos_mensuales:Record<number,number>; saldo_acumulado:number|null; grupo:string }
export interface CuadroGeneralData { periodos:PeriodoCuadro[]; cuentas:FilaCuadroGeneral[]; anio:number; mes_inicio:number; mes_fin:number; cuenta_desde:string; cuenta_hasta:string; tipo_saldo:TipoSaldoCuadro }
export interface FiltrosCuadroGeneral { cuenta_desde:string; cuenta_hasta:string; anio:number|null; mes_inicio:number|null; mes_fin:number|null; tipo_saldo:TipoSaldoCuadro }
export interface CuadroGeneralResponse { anios:number[]; cuentas_lista:CuentaCuadroOption[]; meses:PeriodoCuadro[]; digitos:number; data:CuadroGeneralData|null }
