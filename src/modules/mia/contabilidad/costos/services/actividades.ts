import { apiRequest } from '@/services/auth'
import type { Actividad, ActividadPayload, ActividadesResponse } from '../interfaces/actividad.interface'
const base='/mia/contabilidad/parametros-costos/actividades'
export function listarActividades(criterio:string,page:number){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<ActividadesResponse>(`${base}?${q}`)}
export function guardarActividad(id:number|null,payload:ActividadPayload){return apiRequest<Actividad>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoActividad=(id:number)=>apiRequest<Actividad>(`${base}/${id}/estado`,{method:'PATCH'})
