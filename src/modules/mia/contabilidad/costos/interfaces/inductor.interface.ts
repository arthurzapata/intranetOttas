export interface OrigenComprobanteOption { id:number; nombre:string }
export interface Inductor { id:number; nombre:string; descripcion:string|null; origen_comprobante_id:number; origen_comprobante?:OrigenComprobanteOption|null; activo:boolean }
export interface InductorPayload { nombre:string; descripcion:string; origen_comprobante_id:number }
export interface InductoresResponse { data:Inductor[]; current_page:number; last_page:number; per_page:number; total:number; origenes:OrigenComprobanteOption[] }
