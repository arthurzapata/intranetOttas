import { apiRequest } from '@/services/auth'
import type { AgrupadoraConcepto, AgrupadoraConceptoPayload, AgrupadorasResponse } from '../interfaces/agrupadorasConceptos.interface'
const base='/mia/rrhh/maestros/agrupadoras-conceptos'
export function listarAgrupadorasConceptos(criterio:string,page:number){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<AgrupadorasResponse>(`${base}?${q}`)}
export function guardarAgrupadoraConcepto(id:number|null,payload:AgrupadoraConceptoPayload){return apiRequest<AgrupadoraConcepto>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export function cambiarEstadoAgrupadoraConcepto(id:number){return apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})}
