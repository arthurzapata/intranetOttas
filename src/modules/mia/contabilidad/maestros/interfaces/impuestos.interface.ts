export interface ImpuestoContable { id:number; codigo:string; descripcion:string; porcentaje:number|string; activo:boolean }
export interface ImpuestosContablesResponse { data:ImpuestoContable[]; total:number; current_page:number; last_page:number }
export interface ImpuestoContablePayload { codigo:string; descripcion:string; porcentaje:number }
