import { apiDownload,apiRequest } from '@/services/auth'
import type { FamiliarPersona, PersonaFamiliar, PersonaFamiliaresResponse, PersonaFamiliaresOptions, PersonaFamiliarPayload } from '../interfaces/personaFamiliares.interface'
const base='/mia/rrhh/maestros/persona-familiares'
export function listarPersonaFamiliares(criterio:string,page:number,personaId:number|null=null){const q=new URLSearchParams({criterio,page:String(page)});if(personaId)q.set('persona_id',String(personaId));return apiRequest<PersonaFamiliaresResponse>(`${base}?${q}`)}
export const listarOpcionesPersonaFamiliares=()=>apiRequest<PersonaFamiliaresOptions>(`${base}/opciones`)
function body(payload:PersonaFamiliarPayload){const data=new FormData();for(const [key,value] of Object.entries(payload)){if(value!==null)data.append(key,value instanceof File?value:String(value))}return data}
export function guardarPersonaFamiliar(id:number|null,payload:PersonaFamiliarPayload){return apiRequest<PersonaFamiliar>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:body(payload)})}
export const cambiarEstadoPersonaFamiliar=(id:number)=>apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})
export const descargarSustentoFamiliar=(id:number)=>apiDownload(`${base}/${id}/sustento`,`sustento_familiar_${id}.pdf`)
