import { apiRequest } from '@/services/auth'
import type { TipoComprobante, TipoComprobantePayload, TiposComprobanteResponse } from '../interfaces/tiposComprobante.interface'

const base='/mia/contabilidad/maestros/tipos-comprobante'
export function listarTiposComprobante(criterio:string,page:number){const query=new URLSearchParams({criterio,page:String(page)});return apiRequest<TiposComprobanteResponse>(`${base}?${query}`)}
export function guardarTipoComprobante(id:number|null,payload:TipoComprobantePayload){return apiRequest<TipoComprobante>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export function cambiarEstadoTipoComprobante(id:number){return apiRequest<TipoComprobante>(`${base}/${id}/estado`,{method:'PATCH'})}
