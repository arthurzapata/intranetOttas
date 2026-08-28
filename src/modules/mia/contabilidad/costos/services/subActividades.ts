import { apiRequest } from '@/services/auth'
import type { SubActividad, SubActividadPayload, SubActividadesResponse } from '../interfaces/subActividad.interface'
const base='/mia/contabilidad/parametros-costos/subactividades'
export function listarSubActividades(criterio:string,page:number){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<SubActividadesResponse>(`${base}?${q}`)}
export function guardarSubActividad(id:number|null,payload:SubActividadPayload){return apiRequest<SubActividad>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoSubActividad=(id:number)=>apiRequest<SubActividad>(`${base}/${id}/estado`,{method:'PATCH'})
