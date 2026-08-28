import { apiRequest } from '@/services/auth'
import type { PersonaGradoPersona, PersonaGradoCatalogo, PersonaGrado, PersonaGradosResponse, PersonaGradosOptions, PersonaGradoPayload } from '../interfaces/personaGrados.interface'
const base='/lecturita/mia/rrhh/maestros/persona-grados-instruccion'
export function listarPersonaGrados(criterio:string,page:number,personaId:number|null=null){const q=new URLSearchParams({criterio,page:String(page)});if(personaId)q.set('persona_id',String(personaId));return apiRequest<PersonaGradosResponse>(`${base}?${q}`)}
export const listarOpcionesPersonaGrados=()=>apiRequest<PersonaGradosOptions>(`${base}/opciones`)
export function guardarPersonaGrado(id:number|null,payload:PersonaGradoPayload){return apiRequest<PersonaGrado>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoPersonaGrado=(id:number)=>apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})
