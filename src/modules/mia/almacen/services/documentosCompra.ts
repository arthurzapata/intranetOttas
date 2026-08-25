import { apiRequest } from '@/services/auth'
export interface DocumentoCompra { id:number;codigo:string;denominacion:string;tipo_operacion:0|1|2;afectacion:'S'|'N';cta_prov_moneda_nacional:string;cta_prov_moneda_extranjera:string;detraccion:boolean;activo:boolean;movimientos_count:number }
export interface DocumentosCompraResponse { data:DocumentoCompra[];total:number;page:number;last_page:number }
export type DocumentoCompraPayload=Omit<DocumentoCompra,'id'|'movimientos_count'>
const base='/lecturita/mia/logistica/documentos-compra'
export function listarDocumentosCompra(criterio:string,page:number){return apiRequest<DocumentosCompraResponse>(`${base}?criterio=${encodeURIComponent(criterio)}&page=${page}`)}
export function guardarDocumentoCompra(id:number|null,data:DocumentoCompraPayload){return apiRequest<void>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarDocumentoCompra(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
