export interface DepartamentoDistrito { id:number; nombre:string }
export interface ProvinciaOption { id:number; ubigeo:string; nombre:string; departamento?:DepartamentoDistrito|null }
export interface Distrito { id:number; provincia_id:number; provincia?:ProvinciaOption|null; ubigeo:string; nombre:string; estado:boolean }
export interface DistritosResponse { data:Distrito[]; total:number; current_page:number; last_page:number }
export interface DistritoPayload { provincia_id:number|null; ubigeo:string; nombre:string }

