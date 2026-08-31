export interface MesConsultaSaldo { id:number; mes:number; mes_label:string }
export interface CuentaConsultaSaldo { cta_contable:string; descripcion:string; nivel:number; es_padre:boolean; saldo_debe:number; saldo_haber:number; saldo_final:number }
export interface ConsultaSaldosData { periodo:MesConsultaSaldo; cuentas:CuentaConsultaSaldo[]; anio:number; mes:number }
export interface FiltrosConsultaSaldos { anio:number|null; mes:number|null }
export interface ConsultaSaldosResponse { anios:number[]; meses:MesConsultaSaldo[]; data:ConsultaSaldosData|null }
