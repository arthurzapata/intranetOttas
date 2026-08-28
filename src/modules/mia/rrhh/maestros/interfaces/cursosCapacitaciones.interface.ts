export interface CentroOption { id:number; codigo:string; nombre:string }
export interface CursoCapacitacion { id:number; codigo:string; centro_id:number; centro?:CentroOption|null; nombre:string; estado:boolean }
export interface CursosResponse { data:CursoCapacitacion[]; total:number; current_page:number; last_page:number }
export interface CursoPayload { codigo:string; centro_id:number|null; nombre:string }

