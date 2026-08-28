export interface Profesion { id:number; codigo:string; descripcion:string; estado:boolean }
export interface ProfesionesResponse { data:Profesion[]; total:number; current_page:number; last_page:number }
export interface ProfesionPayload { codigo:string; descripcion:string }

