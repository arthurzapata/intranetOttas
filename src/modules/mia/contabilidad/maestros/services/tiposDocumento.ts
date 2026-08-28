import { apiRequest } from '@/services/auth'
import type { TipoComprobanteOption, TipoDocumentoContable, TipoDocumentoContablePayload, TiposDocumentoContableResponse } from '../interfaces/tiposDocumento.interface'

const base='/mia/contabilidad/maestros/tipos-documento'
export function listarTiposDocumento(criterio:string,page:number){const query=new URLSearchParams({criterio,page:String(page)});return apiRequest<TiposDocumentoContableResponse>(`${base}?${query}`)}
export function listarTiposComprobanteActivos(){return apiRequest<TipoComprobanteOption[]>('/mia/contabilidad/maestros/tipos-comprobante/activos')}
export function guardarTipoDocumento(id:number|null,payload:TipoDocumentoContablePayload){return apiRequest<TipoDocumentoContable>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export function cambiarEstadoTipoDocumento(id:number){return apiRequest<TipoDocumentoContable>(`${base}/${id}/estado`,{method:'PATCH'})}
