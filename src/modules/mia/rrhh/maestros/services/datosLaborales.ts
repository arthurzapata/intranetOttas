import { apiDownload,apiRequest } from '@/services/auth'
import type { PersonaOption, CatalogoOption, DatosLaborales, DatosLaboralesResponse, DatosLaboralesOptions, DatosLaboralesPayload } from '../interfaces/datosLaborales.interface'
const base='/lecturita/mia/rrhh/maestros/datos-laborales'
export function listarDatosLaborales(criterio:string,page:number,personaId:number|null=null){const q=new URLSearchParams({criterio,page:String(page)});if(personaId)q.set('persona_id',String(personaId));return apiRequest<DatosLaboralesResponse>(`${base}?${q}`)}
export const listarOpcionesDatosLaborales=()=>apiRequest<DatosLaboralesOptions>(`${base}/opciones`)
function body(payload:DatosLaboralesPayload){const data=new FormData();for(const [key,value] of Object.entries(payload)){if(value!==null)data.append(key,value instanceof File?value:String(value))}return data}
export function guardarDatosLaborales(id:number|null,payload:DatosLaboralesPayload){return apiRequest<DatosLaborales>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:body(payload)})}
export const cambiarEstadoDatosLaborales=(id:number)=>apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})
export const descargarSustentoContrato=(id:number,codigo:string)=>apiDownload(`${base}/${id}/sustento`,`contrato_${codigo}.pdf`)
