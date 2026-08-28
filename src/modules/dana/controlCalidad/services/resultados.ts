import { apiRequest } from '@/services/auth'
import type { ResultadoCalidad, ResultadoPayload, ResultadosResponse } from '../interfaces/resultados.interface'





const base='/lecturita/dana/control-calidad/resultados'
export function listarResultados(filters:{fecha_desde:string;fecha_hasta:string;parametros:number[];muestra_id:string;page:number}){const q=new URLSearchParams({fecha_desde:filters.fecha_desde,fecha_hasta:filters.fecha_hasta,muestra_id:filters.muestra_id,page:String(filters.page)});filters.parametros.forEach(id=>q.append('parametros[]',String(id)));return apiRequest<ResultadosResponse>(`${base}?${q}`)}
export function guardarResultado(data:ResultadoPayload,id?:number){return apiRequest<ResultadoCalidad>(id?`${base}/${id}`:base,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarResultado(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
