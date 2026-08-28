import { apiRequest } from '@/services/auth'
import type { OrigenComprobante, OrigenComprobantePayload, OrigenesComprobanteResponse } from '../interfaces/origenesComprobante.interface'

const base='/mia/contabilidad/maestros/origenes-comprobante'
export function listarOrigenesComprobante(criterio:string,page:number){const query=new URLSearchParams({criterio,page:String(page)});return apiRequest<OrigenesComprobanteResponse>(`${base}?${query}`)}
export function guardarOrigenComprobante(id:number|null,payload:OrigenComprobantePayload){return apiRequest<OrigenComprobante>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export function cambiarEstadoOrigenComprobante(id:number){return apiRequest<OrigenComprobante>(`${base}/${id}/estado`,{method:'PATCH'})}
