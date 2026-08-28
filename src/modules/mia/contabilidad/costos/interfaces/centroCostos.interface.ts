export interface CentroOption { id:number; nombre:string }
export interface CuentaCentro { id:number; cta_contable:string; descripcion:string; naturaleza:string|null }
export type TipoCentro='D'|'I'|'R'
export interface CentroCostos { id:number; codigo:string; nombre:string; tipo:TipoCentro; cuenta_contable_9_id:number; cuenta_contable_7_id:number; sucursales_id:number|null; proceso_id:number|null; sub_proceso_id:number|null; actividad_id:number|null; clasificador_gastos_id:number|null; sucursal?:CentroOption|null; proceso?:CentroOption|null; cuenta_contable_9?:CuentaCentro|null; cuenta_contable_7?:CuentaCentro|null; activo:boolean }
export interface CentroCostosPayload { codigo:string; nombre:string; tipo:TipoCentro; cuenta_contable_9_id:number; cuenta_contable_7_id:number; sucursales_id:number|null; proceso_id:number|null; sub_proceso_id:number|null; actividad_id:number|null; clasificador_gastos_id:number|null }
export interface CentrosCostosResponse { data:CentroCostos[]; current_page:number; last_page:number; per_page:number; total:number; procesos:CentroOption[]; subprocesos:CentroOption[]; actividades:CentroOption[]; sucursales:CentroOption[]; clasificadores:CentroOption[] }
