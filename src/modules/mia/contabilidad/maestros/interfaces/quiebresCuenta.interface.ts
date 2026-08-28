export interface QuiebreCuenta { id:number; posicion:number; descripcion:string; activo:boolean }
export interface QuiebresCuentaResponse { data:QuiebreCuenta[]; total:number; current_page:number; last_page:number }
export interface QuiebreCuentaPayload { posicion:number; descripcion:string }
