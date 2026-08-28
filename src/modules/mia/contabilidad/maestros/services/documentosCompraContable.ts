import { apiRequest } from '@/services/auth'
import type { CuentaContableOption, DocumentoCompraContable, DocumentoCompraContablePayload, DocumentosCompraContableResponse } from '../interfaces/documentosCompraContable.interface'
const base='/mia/contabilidad/maestros/documentos-compra'
export function listarDocumentosCompraContable(criterio:string,page:number){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<DocumentosCompraContableResponse>(`${base}?${q}`)}
export function buscarCuentasDocumento(criterio:string){return apiRequest<CuentaContableOption[]>(`${base}/cuentas?q=${encodeURIComponent(criterio)}`)}
export function guardarDocumentoCompraContable(id:number|null,payload:DocumentoCompraContablePayload){return apiRequest<DocumentoCompraContable>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoDocumentoCompraContable=(id:number)=>apiRequest<DocumentoCompraContable>(`${base}/${id}/estado`,{method:'PATCH'})
