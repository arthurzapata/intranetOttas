export type NivelSucursal = 'E' | 'Z' | 'L'
export interface DistritoSucursalOption { id:number; nombre:string }
export interface SucursalContable { id:number; distrito_id:number; distrito_nombre?:string; nombre:string; fecha_contable:string; nivel:NivelSucursal; estado:boolean }
export interface SucursalesContablesResponse { data:SucursalContable[]; total:number; current_page:number; last_page:number }
export interface SucursalContablePayload { distrito_id:number; nombre:string; fecha_contable:string; nivel:NivelSucursal }
