export interface ProcesoOption { id:number; nombre:string }
export interface SubProceso { id:number; nombre:string; descripcion:string|null; proceso_id:number; proceso?:ProcesoOption|null; activo:boolean }
export interface SubProcesoPayload { nombre:string; descripcion:string; proceso_id:number }
export interface SubProcesosResponse { data:SubProceso[]; current_page:number; last_page:number; per_page:number; total:number; procesos:ProcesoOption[] }
