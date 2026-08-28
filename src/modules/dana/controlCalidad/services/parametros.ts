import { apiRequest } from '@/services/auth'
import type { ParametroCalidad, ParametroPayload, ParametrosResponse } from '../interfaces/parametros.interface'




const base='/lecturita/dana/control-calidad/parametros'
export function listarParametros(criterio:string,page=1){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<ParametrosResponse>(`${base}?${q}`)}
export function guardarParametro(data:ParametroPayload,id?:number){return apiRequest<ParametroCalidad>(id?`${base}/${id}`:base,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarParametro(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
