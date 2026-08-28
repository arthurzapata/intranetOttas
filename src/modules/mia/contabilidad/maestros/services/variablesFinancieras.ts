import { apiRequest } from '@/services/auth'
import type { VariableFinanciera, VariableFinancieraPayload, VariablesFinancierasResponse } from '../interfaces/variablesFinancieras.interface'

const base='/mia/contabilidad/maestros/variables-financieras'
export function listarVariablesFinancieras(criterio:string,page:number){const query=new URLSearchParams({criterio,page:String(page)});return apiRequest<VariablesFinancierasResponse>(`${base}?${query}`)}
export function obtenerSiguienteCodigo(){return apiRequest<{codigo:string}>(`${base}/siguiente-codigo`)}
export function guardarVariableFinanciera(id:number|null,payload:VariableFinancieraPayload){return apiRequest<VariableFinanciera>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export function cambiarEstadoVariableFinanciera(id:number){return apiRequest<VariableFinanciera>(`${base}/${id}/estado`,{method:'PATCH'})}
