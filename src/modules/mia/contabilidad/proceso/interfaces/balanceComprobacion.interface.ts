export type ColumnaBalance = 'apertura_debe'|'apertura_haber'|'mov_acum_debe'|'mov_acum_haber'|'mov_mes_debe'|'mov_mes_haber'|'saldo_mayor_debe'|'saldo_mayor_haber'|'cargas_debe'|'cargas_haber'|'inv_activo'|'inv_pasivo'|'res_nat_perdida'|'res_nat_ganancia'|'res_func_perdida'|'res_func_ganancia'
export type ValoresBalance = Record<ColumnaBalance,number>
export type FilaBalance = ValoresBalance & { cta_contable:string; descripcion:string }
export type PieBalance = ValoresBalance & { descripcion:string }
export interface MesBalanceComprobacion { id:number; mes:number; mes_label:string }
export interface BalanceComprobacionData { anio:number; mes:number; digitos:number; rows:FilaBalance[]; totales:ValoresBalance; footer:PieBalance[] }
export interface FiltrosBalanceComprobacion { mes:number|null; digitos:number|null }
export interface BalanceComprobacionResponse { anio_vigente:number; mes_vigente:number; meses:MesBalanceComprobacion[]; digitos_disponibles:number[]; digitos_plan:number; data:BalanceComprobacionData|null }
