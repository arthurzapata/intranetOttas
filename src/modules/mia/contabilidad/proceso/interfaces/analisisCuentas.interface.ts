export interface CuentaAnalisisOption { cta_contable:string; descripcion:string }
export interface MesAnalisis { mes:number; mes_label:string }
export interface MovimientoAnalisis { nro:number; fecha:string; glosa:string; ref_operacion:string|null; cta_contable:string; denominacion:string; debe:number; haber:number }
export interface CuentaAnalisis { cta_contable:string; denominacion:string; movimientos:MovimientoAnalisis[]; total_debe:number; total_haber:number; saldo_ant_debe:number; saldo_ant_haber:number; saldo_ant_diff:number; total_balance_debe:number; total_balance_haber:number; total_balance_diff:number }
export interface AnalisisCuentasFiltros { cuenta_desde:string; cuenta_hasta:string; anio:number|null; mes_inicio:number|null; mes_fin:number|null }
export interface AnalisisCuentasResponse { anios:number[]; cuentas:CuentaAnalisisOption[]; meses:MesAnalisis[]; digitos:number; data:{cuentas:CuentaAnalisis[]}|null }
