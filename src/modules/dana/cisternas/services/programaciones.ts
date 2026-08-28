import { apiRequest } from '@/services/auth'
import type { Programacion, ProgramacionPayload, ProgramacionesResponse, IncidenciaProgramacion, EvidenciaProgramacion } from '../interfaces/programaciones.interface'







const base='/dana/gestion-cisternas/programaciones'
export function listarProgramaciones(filters:{criterio:string;fecha_desde:string;fecha_hasta:string;motivo:string;incidencias:string},page=1){const q=new URLSearchParams({...filters,page:String(page)});return apiRequest<ProgramacionesResponse>(`${base}?${q}`)}
export function guardarProgramacion(data:ProgramacionPayload,id?:number){return apiRequest<Programacion>(id?`${base}/${id}`:base,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarProgramacion(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
export function listarIncidencias(id:number){return apiRequest<IncidenciaProgramacion[]>(`${base}/${id}/incidencias`)}
export function listarEvidencias(id:number){return apiRequest<EvidenciaProgramacion[]>(`${base}/${id}/evidencias`)}
