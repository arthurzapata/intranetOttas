import { apiRequest } from '@/services/auth'
import type { Cuadrilla, CuadrillaPayload, CuadrillasResponse } from '../interfaces/cuadrillas.interface'





const base='/dana/cuadrillas'
export function listarCuadrillas(criterio=''){const q=new URLSearchParams({criterio});return apiRequest<CuadrillasResponse>(`${base}?${q}`)}
export function guardarCuadrilla(data:CuadrillaPayload,id?:number){return apiRequest<Cuadrilla>(id?`${base}/${id}`:base,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarCuadrilla(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
