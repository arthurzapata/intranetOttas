import { apiRequest } from '@/services/auth'
import type { ImpuestoContable, ImpuestoContablePayload, ImpuestosContablesResponse } from '../interfaces/impuestos.interface'
const base='/mia/contabilidad/maestros/impuestos'
export function listarImpuestos(criterio:string,page:number){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<ImpuestosContablesResponse>(`${base}?${q}`)}
export function guardarImpuesto(id:number|null,payload:ImpuestoContablePayload){return apiRequest<ImpuestoContable>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoImpuesto=(id:number)=>apiRequest<ImpuestoContable>(`${base}/${id}/estado`,{method:'PATCH'})
