export interface UbigeoOption { id:number; nombre:string }
export interface CentroEnsenanza { id:number; codigo:string; nombre:string; pais_id:number|null; departamento_id:number|null; provincia_id:number|null; distrito_id:number|null; pais_nombre?:string|null; departamento_nombre?:string|null; provincia_nombre?:string|null; distrito_nombre?:string|null; estado:boolean }
export interface CentrosResponse { data:CentroEnsenanza[]; total:number; current_page:number; last_page:number }
export type CentroPayload=Pick<CentroEnsenanza,'codigo'|'nombre'|'pais_id'|'departamento_id'|'provincia_id'|'distrito_id'>

