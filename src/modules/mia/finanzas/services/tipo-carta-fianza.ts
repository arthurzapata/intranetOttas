import { apiRequest } from '@/services/auth'
import type { TipoCartaFianza,TipoCartaFianzaPayload,TipoCartaFianzaResponse } from '../interfaces/tipo-carta-fianza.interface'
const base='/mia/finanzas/tipos-carta-fianza'
export function listarTiposCartaFianza(texto='',estado='',page=1){const q=new URLSearchParams({texto,estado,page:String(page)});return apiRequest<TipoCartaFianzaResponse>(`${base}?${q}`)}
export const obtenerTipoCartaFianza=(id:number)=>apiRequest<TipoCartaFianza>(`${base}/${id}`)
export const guardarTipoCartaFianza=(id:number|null,data:TipoCartaFianzaPayload)=>apiRequest<TipoCartaFianza>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})
export const cambiarEstadoTipoCartaFianza=(id:number)=>apiRequest<TipoCartaFianza>(`${base}/${id}/estado`,{method:'PATCH',body:JSON.stringify({})})
