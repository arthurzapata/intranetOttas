import { apiRequest } from '@/services/auth'
import type { DependenciaOption, DependenciaConceptoEps, DependenciaPayload, DependenciaOpciones } from '../interfaces/dependenciasConceptosEps.interface'
const base='/lecturita/mia/rrhh/maestros/dependencias-conceptos-eps'
export const listarDependenciasConceptosEps=()=>apiRequest<DependenciaConceptoEps[]>(base)
export const listarOpcionesDependencias=()=>apiRequest<DependenciaOpciones>(`${base}/opciones`)
export function guardarDependenciaConceptoEps(id:number|null,payload:DependenciaPayload){return apiRequest<DependenciaConceptoEps>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export function cambiarEstadoDependenciaConceptoEps(id:number){return apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})}
