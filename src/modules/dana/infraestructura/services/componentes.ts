import { apiRequest } from '@/services/auth'
import type { ComponenteOperacional, ComponentePayload, ComponentesResponse } from '../interfaces/componentes.interface'







const base='/dana/componentes'
export function listarComponentes(criterio:string,sistemaId:string,page=1){const q=new URLSearchParams({criterio,sistema_id:sistemaId,page:String(page)});return apiRequest<ComponentesResponse>(`${base}?${q}`)}
export function guardarComponente(data:ComponentePayload,id?:number){return apiRequest<ComponenteOperacional>(id?`${base}/${id}`:base,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarComponente(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
