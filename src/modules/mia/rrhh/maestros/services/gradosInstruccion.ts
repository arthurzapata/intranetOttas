import { apiRequest } from '@/services/auth'
import type { GradoInstruccion, GradosResponse, GradoPayload } from '../interfaces/gradosInstruccion.interface'
const base='/lecturita/mia/rrhh/maestros/grados-instruccion'
export function listarGrados(criterio:string,page:number){const query=new URLSearchParams({criterio,page:String(page)});return apiRequest<GradosResponse>(`${base}?${query}`)}
export function guardarGrado(id:number|null,payload:GradoPayload){return apiRequest<GradoInstruccion>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export function cambiarEstadoGrado(id:number){return apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})}
