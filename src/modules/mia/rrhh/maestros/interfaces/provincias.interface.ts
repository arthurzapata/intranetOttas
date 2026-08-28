export interface DepartamentoOption { id:number; ubigeo:string; nombre:string }
export interface Provincia { id:number; departamento_id:number; departamento?:DepartamentoOption|null; ubigeo:string; nombre:string; estado:boolean }
export interface ProvinciasResponse { data:Provincia[]; total:number; current_page:number; last_page:number }
export interface ProvinciaPayload { departamento_id:number|null; ubigeo:string; nombre:string }

