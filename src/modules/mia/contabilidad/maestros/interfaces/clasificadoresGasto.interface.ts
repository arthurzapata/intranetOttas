export interface AgrupadorGastoOption { id:number; nombre:string }
export interface ClasificadorGasto { id:number; nombre:string; descripcion:string; agrupador_gastos_id:number; agrupador:string; activo:boolean }
export interface ClasificadoresGastoResponse { data:ClasificadorGasto[]; total:number; current_page:number; last_page:number; agrupadores:AgrupadorGastoOption[] }
export interface ClasificadorGastoPayload { nombre:string; descripcion:string; agrupador_gastos_id:number }
