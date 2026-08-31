export type TipoBalanceGeneral = 'P'|'C'
export interface MesBalanceGeneral { id:number; mes:number; mes_label:string }
export interface FilaBalanceGeneral { codigo:string; nombre:string; saldo:number; saldo_anterior:number|null }
export interface GrupoBalanceGeneral { label:string; rows:FilaBalanceGeneral[]; total:number; total_anterior:number }
export interface ResumenBalanceGeneral { total_activo:number; total_pasivo:number; total_patrimonio:number; total_pasivo_patrimonio:number; total_activo_anterior?:number; total_pasivo_anterior?:number; total_patrimonio_anterior?:number; total_pasivo_patrimonio_anterior?:number }
export interface BalanceGeneralData { tipo:TipoBalanceGeneral; anio:number; mes:number; digitos:number; anio_anterior:number|null; grupos:Record<string,GrupoBalanceGeneral>; resumen:ResumenBalanceGeneral }
export interface FiltrosBalanceGeneral { mes:number|null; digitos:number|null; tipo:TipoBalanceGeneral }
export interface BalanceGeneralResponse { anio_vigente:number; mes_vigente:number; meses:MesBalanceGeneral[]; digitos_disponibles:number[]; digitos_plan:number; data:BalanceGeneralData|null }
