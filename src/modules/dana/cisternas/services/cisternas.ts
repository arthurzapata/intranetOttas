import { apiRequest } from '@/services/auth'
import type { MantenimientoCisterna, Cisterna, CisternaPayload, CisternasResponse } from '../interfaces/cisternas.interface'





const base='/dana/gestion-cisternas/cisternas'
export function listarCisternas(criterio:string,fecha:string,page=1){const q=new URLSearchParams({criterio,fecha,page:String(page)});return apiRequest<CisternasResponse>(`${base}?${q}`)}
export function guardarCisterna(data:CisternaPayload,id?:number){return apiRequest<Cisterna>(id?`${base}/${id}`:base,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarCisterna(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
export function listarMantenimientos(id:number){return apiRequest<MantenimientoCisterna[]>(`${base}/${id}/mantenimientos`)}
export function guardarMantenimiento(cisternaId:number,data:{motivo_id:number|null;detalle:string;fecha_desde:string;fecha_hasta:string},id?:number){return apiRequest<MantenimientoCisterna>(id?`${base}/${cisternaId}/mantenimientos/${id}`:`${base}/${cisternaId}/mantenimientos`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarMantenimiento(cisternaId:number,id:number){return apiRequest<void>(`${base}/${cisternaId}/mantenimientos/${id}`,{method:'DELETE'})}
