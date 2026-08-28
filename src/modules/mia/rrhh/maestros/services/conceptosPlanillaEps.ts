import { apiRequest } from '@/services/auth'
import type { EpsOption, ConceptoEpsOption, ConceptoPlanillaEps, ConceptosEpsOptions } from '../interfaces/conceptosPlanillaEps.interface'
const base='/lecturita/mia/rrhh/maestros/conceptos-planilla-eps'
export const listarConceptosPlanillaEps=()=>apiRequest<ConceptoPlanillaEps[]>(base)
export const listarOpcionesConceptosEps=()=>apiRequest<ConceptosEpsOptions>(`${base}/opciones`)
export function guardarConceptoPlanillaEps(id:number|null,conceptoId:number){return apiRequest<ConceptoPlanillaEps>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify({concepto_id:conceptoId})})}
export function cambiarEstadoConceptoPlanillaEps(id:number){return apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})}
