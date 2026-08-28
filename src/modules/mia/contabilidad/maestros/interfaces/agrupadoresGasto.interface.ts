export interface AgrupadorGasto { id:number; nombre:string; descripcion:string; estado:boolean }
export interface AgrupadoresGastoResponse { data:AgrupadorGasto[]; total:number; current_page:number; last_page:number }
export interface AgrupadorGastoPayload { nombre:string; descripcion:string }
