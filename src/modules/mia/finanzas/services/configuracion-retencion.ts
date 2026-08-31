import { apiRequest } from '@/services/auth'
import type { ConfiguracionRetencion,ConfiguracionRetencionPayload,ConfiguracionRetencionResponse } from '../interfaces/configuracion-retencion.interface'
const base='/mia/finanzas/configuraciones-retencion'
export function listarConfiguracionesRetencion(buscar='',estado='',page=1){const q=new URLSearchParams({buscar,estado,page:String(page)});return apiRequest<ConfiguracionRetencionResponse>(`${base}?${q}`)}
export const obtenerConfiguracionRetencion=(id:number)=>apiRequest<ConfiguracionRetencion>(`${base}/${id}`)
export const guardarConfiguracionRetencion=(id:number|null,data:ConfiguracionRetencionPayload)=>apiRequest<ConfiguracionRetencion>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})
export const cambiarEstadoConfiguracionRetencion=(id:number)=>apiRequest<void>(`${base}/${id}/estado`,{method:'PATCH',body:JSON.stringify({})})
