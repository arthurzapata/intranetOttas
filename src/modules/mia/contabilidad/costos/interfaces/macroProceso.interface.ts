export interface MacroProceso { id:number; nombre:string; descripcion:string|null; activo:boolean }
export interface MacroProcesoPayload { nombre:string; descripcion:string }
export interface MacroProcesosResponse { data:MacroProceso[]; current_page:number; last_page:number; per_page:number; total:number }
