import { apiRequest } from '@/services/auth'
import type { AgrupadorGasto, AgrupadorGastoPayload, AgrupadoresGastoResponse } from '../interfaces/agrupadoresGasto.interface'
const base='/mia/contabilidad/maestros/agrupadores-gasto'
export function listarAgrupadoresGasto(criterio:string,page:number){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<AgrupadoresGastoResponse>(`${base}?${q}`)}
export function guardarAgrupadorGasto(id:number|null,payload:AgrupadorGastoPayload){return apiRequest<AgrupadorGasto>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoAgrupadorGasto=(id:number)=>apiRequest<AgrupadorGasto>(`${base}/${id}/estado`,{method:'PATCH'})
