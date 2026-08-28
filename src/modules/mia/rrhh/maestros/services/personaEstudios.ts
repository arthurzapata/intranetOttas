import { apiDownload,apiRequest } from '@/services/auth'
import type { EstudioPersona, EstudioCatalogo, PersonaEstudio, PersonaEstudiosResponse, PersonaEstudiosOptions, PersonaEstudioPayload } from '../interfaces/personaEstudios.interface'
const base='/mia/rrhh/maestros/persona-estudios'
export function listarPersonaEstudios(criterio:string,page:number,personaId:number|null=null){const q=new URLSearchParams({criterio,page:String(page)});if(personaId)q.set('persona_id',String(personaId));return apiRequest<PersonaEstudiosResponse>(`${base}?${q}`)}
export const listarOpcionesPersonaEstudios=()=>apiRequest<PersonaEstudiosOptions>(`${base}/opciones`)
export const listarDepartamentosEstudios=(paisId:number)=>apiRequest<EstudioCatalogo[]>(`${base}/ubicacion/paises/${paisId}/departamentos`)
export const listarProvinciasEstudios=(departamentoId:number)=>apiRequest<EstudioCatalogo[]>(`${base}/ubicacion/departamentos/${departamentoId}/provincias`)
export const listarDistritosEstudios=(provinciaId:number)=>apiRequest<EstudioCatalogo[]>(`${base}/ubicacion/provincias/${provinciaId}/distritos`)
function body(payload:PersonaEstudioPayload){const data=new FormData();for(const [key,value] of Object.entries(payload)){if(value!==null)data.append(key,value instanceof File?value:String(value))}return data}
export function guardarPersonaEstudio(id:number|null,payload:PersonaEstudioPayload){return apiRequest<PersonaEstudio>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:body(payload)})}
export const cambiarEstadoPersonaEstudio=(id:number)=>apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})
export const descargarSustentoEstudio=(id:number)=>apiDownload(`${base}/${id}/sustento`,`sustento_estudio_${id}.pdf`)
