import { apiRequest } from '@/services/auth'
import type { DocumentosCompraResponse, DocumentoCompraPayload } from '../interfaces/documentosCompra.interface'
const base='/mia/logistica/documentos-compra'
export function listarDocumentosCompra(criterio:string,page:number){return apiRequest<DocumentosCompraResponse>(`${base}?criterio=${encodeURIComponent(criterio)}&page=${page}`)}
export function guardarDocumentoCompra(id:number|null,data:DocumentoCompraPayload){return apiRequest<void>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarDocumentoCompra(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
