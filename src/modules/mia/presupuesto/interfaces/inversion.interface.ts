export interface Inversion { id:number; nombre:string; descripcion:string; estado:boolean }
export interface InversionPayload { nombre:string; descripcion:string }
export interface InversionesResponse { data:Inversion[]; current_page:number; last_page:number; total:number }

