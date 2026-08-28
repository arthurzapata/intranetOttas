import { apiRequest } from '@/services/auth'
import type { SistemaOperacional, SistemaPayload, SistemasResponse } from '../interfaces/sistemas.interface'






const base='/dana/sistemas'
export function listarSistemas(criterio:string,page=1){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<SistemasResponse>(`${base}?${q}`)}
export function guardarSistema(data:SistemaPayload,id?:number){return apiRequest<SistemaOperacional>(id?`${base}/${id}`:base,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarSistema(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
