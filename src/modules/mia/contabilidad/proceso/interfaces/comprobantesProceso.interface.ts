export interface TipoComprobanteProceso { id:number; nombre:string; diminutivo?:string|null }
export interface DetalleComprobanteProceso { cta_contable:string; descripcion_cuenta:string; debe:number; haber:number; cc_analitico:string|null }
export interface ComprobanteProceso { id?:number; numero:string; tipo_comprobante:string; responsable:string; origen:string; fecha_contable:string; documento:string; fecha_doc:string|null; moneda:string; glosa:string|null; detalles:DetalleComprobanteProceso[]; total_debe:number; total_haber:number }
export interface FiltrosComprobantesProceso { fecha_desde:string; fecha_hasta:string; tipo_comprobante_id:number|null; tipo_documento_id:number|null; nro_desde:string; nro_hasta:string }
export interface ComprobantesProcesoResponse { tipos_comprobante:TipoComprobanteProceso[]; tipos_documento:TipoComprobanteProceso[]; data:ComprobanteProceso[] }
