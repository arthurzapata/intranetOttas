import { apiRequest } from '@/services/auth'
import type { QuiebreCuenta, QuiebreCuentaPayload, QuiebresCuentaResponse } from '../interfaces/quiebresCuenta.interface'
const base='/mia/contabilidad/maestros/quiebres-cuenta'
export function listarQuiebresCuenta(criterio:string,page:number){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<QuiebresCuentaResponse>(`${base}?${q}`)}
export function guardarQuiebreCuenta(id:number|null,payload:QuiebreCuentaPayload){return apiRequest<QuiebreCuenta>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoQuiebreCuenta=(id:number)=>apiRequest<QuiebreCuenta>(`${base}/${id}/estado`,{method:'PATCH'})
