import { apiRequest } from '@/services/auth'
import type { PersonaProfesionPersona, PersonaProfesionCatalogo, PersonaProfesion, PersonaProfesionesResponse, PersonaProfesionesOptions, PersonaProfesionPayload } from '../interfaces/personaProfesiones.interface'
const base='/mia/rrhh/maestros/persona-profesiones'
export function listarPersonaProfesiones(criterio:string,page:number,personaId:number|null=null){const q=new URLSearchParams({criterio,page:String(page)});if(personaId)q.set('persona_id',String(personaId));return apiRequest<PersonaProfesionesResponse>(`${base}?${q}`)}
export const listarOpcionesPersonaProfesiones=()=>apiRequest<PersonaProfesionesOptions>(`${base}/opciones`)
export function guardarPersonaProfesion(id:number|null,payload:PersonaProfesionPayload){return apiRequest<PersonaProfesion>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoPersonaProfesion=(id:number)=>apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})
