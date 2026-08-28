import { apiRequest } from '@/services/auth'
import type { Profesion, ProfesionesResponse, ProfesionPayload } from '../interfaces/profesiones.interface'
const base='/lecturita/mia/rrhh/maestros/profesiones'
export function listarProfesiones(criterio:string,page:number){const query=new URLSearchParams({criterio,page:String(page)});return apiRequest<ProfesionesResponse>(`${base}?${query}`)}
export function guardarProfesion(id:number|null,payload:ProfesionPayload){return apiRequest<Profesion>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export function cambiarEstadoProfesion(id:number){return apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})}
