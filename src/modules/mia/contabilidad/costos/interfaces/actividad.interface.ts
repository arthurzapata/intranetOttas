export interface SubProcesoOption { id:number; nombre:string }
export interface Actividad { id:number; nombre:string; descripcion:string|null; sub_proceso_id:number; sub_proceso?:SubProcesoOption|null; activo:boolean }
export interface ActividadPayload { nombre:string; descripcion:string; sub_proceso_id:number }
export interface ActividadesResponse { data:Actividad[]; current_page:number; last_page:number; per_page:number; total:number; subprocesos:SubProcesoOption[] }
