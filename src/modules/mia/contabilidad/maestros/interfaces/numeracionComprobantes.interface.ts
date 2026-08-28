export interface TipoDocumentoNumeracion { id:number; nombre:string; diminutivo:string|null }
export interface NumeracionComprobante { id:number; anio:number; tipo_documento_id:number; tipo_documento?:TipoDocumentoNumeracion|null; desde:number; hasta:number; actual:number; estado:boolean }
export interface NumeracionesComprobanteResponse { data:NumeracionComprobante[]; total:number; current_page:number; last_page:number; anios_disponibles:number[] }
export interface NumeracionComprobantePayload { anio:number; tipo_documento_id:number; desde:number; hasta:number; actual:number }
