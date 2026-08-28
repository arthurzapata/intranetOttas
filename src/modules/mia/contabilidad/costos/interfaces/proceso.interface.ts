export interface MacroProcesoOption { id:number; nombre:string }
export interface Proceso { id:number; nombre:string; descripcion:string|null; macro_proceso_id:number; macro_proceso?:MacroProcesoOption|null; activo:boolean }
export interface ProcesoPayload { nombre:string; descripcion:string; macro_proceso_id:number }
export interface ProcesosResponse { data:Proceso[]; current_page:number; last_page:number; per_page:number; total:number; macroprocesos:MacroProcesoOption[] }
