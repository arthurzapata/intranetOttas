export type BaseTareaje='MES_30_DIAS'|'MES_REAL'|'SEMANAL'
export type ModoDescuento='ACUMULABLE'|'NO_ACUMULABLE'
export interface Regimen { id:number; codigo:string; descripcion:string; horas_ordinarias_mes:number; horas_dia:number; base_tareaje_default:BaseTareaje; tolerancia_tardanza_minutos:number; modo_descuento_tardanza:ModoDescuento; afecto_gratificacion:boolean; afecto_cts:boolean; afecto_vacaciones:boolean; estado:boolean }
export type RegimenPayload=Omit<Regimen,'id'|'estado'>
export interface RegimenesResponse { data:Regimen[]; total:number; current_page:number; last_page:number }

