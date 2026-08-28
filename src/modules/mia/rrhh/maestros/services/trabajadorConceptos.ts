import { apiRequest } from '@/services/auth'
import type { TrabajadorOption, TrabajadorConceptoOption, TrabajadorConceptoConfig, TrabajadorConceptosOptions, TrabajadorConceptosResponse, TrabajadorConceptoPayload } from '../interfaces/trabajadorConceptos.interface'
const base='/mia/rrhh/maestros/trabajador-conceptos'
export const listarOpcionesTrabajadores=()=>apiRequest<TrabajadorConceptosOptions>(`${base}/opciones`)
export const listarTrabajadorConceptos=(id:number,estado:string='')=>apiRequest<TrabajadorConceptosResponse>(`${base}?${new URLSearchParams({datos_persona_id:String(id),estado})}`)
export const guardarAsignacionConceptos=(datosPersonaId:number,conceptoIds:number[])=>apiRequest<void>(`${base}/asignacion`,{method:'POST',body:JSON.stringify({datos_persona_id:datosPersonaId,concepto_ids:conceptoIds})})
export function guardarTrabajadorConcepto(id:number|null,payload:TrabajadorConceptoPayload){return apiRequest<TrabajadorConceptoConfig>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export function cambiarEstadoTrabajadorConcepto(id:number){return apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})}
