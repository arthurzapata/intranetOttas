import { apiRequest } from '@/services/auth'
import type { NumeracionComprobante, NumeracionComprobantePayload, NumeracionesComprobanteResponse, TipoDocumentoNumeracion } from '../interfaces/numeracionComprobantes.interface'
const base='/mia/contabilidad/maestros/numeracion-comprobantes'
export function listarNumeraciones(anio:number|null,page:number){const q=new URLSearchParams({page:String(page)});if(anio)q.set('anio',String(anio));return apiRequest<NumeracionesComprobanteResponse>(`${base}?${q}`)}
export const listarTiposDocumentoNumeracion=()=>apiRequest<TipoDocumentoNumeracion[]>(`${base}/tipos-documento`)
export function guardarNumeracion(id:number|null,payload:NumeracionComprobantePayload){return apiRequest<NumeracionComprobante>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoNumeracion=(id:number)=>apiRequest<NumeracionComprobante>(`${base}/${id}/estado`,{method:'PATCH'})
