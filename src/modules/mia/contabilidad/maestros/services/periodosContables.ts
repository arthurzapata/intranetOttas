import { apiRequest } from '@/services/auth'
import type { PeriodoContable, PeriodoContablePayload, PeriodosContablesResponse, ProcesoPeriodoPayload } from '../interfaces/periodosContables.interface'

const base='/mia/contabilidad/maestros/periodos-contables'
export function listarPeriodosContables(criterio:string,page:number){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<PeriodosContablesResponse>(`${base}?${q}`)}
export function guardarPeriodoContable(id:number|null,payload:PeriodoContablePayload){return apiRequest<PeriodoContable>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export function cambiarEstadoPeriodo(id:number){return apiRequest<PeriodoContable>(`${base}/${id}/estado`,{method:'PATCH'})}
export function marcarPeriodoVigente(id:number){return apiRequest<PeriodoContable>(`${base}/${id}/vigente`,{method:'PATCH'})}
export function procesarPeriodo(id:number,accion:'aperturar'|'cerrar',payload:ProcesoPeriodoPayload){return apiRequest<PeriodoContable>(`${base}/${id}/${accion}`,{method:'POST',body:JSON.stringify(payload)})}
