export interface GradoInstruccion { id:number; codigo:string; descripcion:string; orden_nivel:number|null; estado:boolean }
export interface GradosResponse { data:GradoInstruccion[]; total:number; current_page:number; last_page:number }
export interface GradoPayload { codigo:string; descripcion:string; orden_nivel:number|null }

