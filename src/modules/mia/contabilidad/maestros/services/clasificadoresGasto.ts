import { apiRequest } from '@/services/auth'
import type { ClasificadorGasto, ClasificadorGastoPayload, ClasificadoresGastoResponse } from '../interfaces/clasificadoresGasto.interface'

const base='/mia/contabilidad/maestros/clasificadores-gasto'
export function listarClasificadoresGasto(criterio:string,page:number){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<ClasificadoresGastoResponse>(`${base}?${q}`)}
export function guardarClasificadorGasto(id:number|null,payload:ClasificadorGastoPayload){return apiRequest<ClasificadorGasto>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoClasificadorGasto=(id:number)=>apiRequest<ClasificadorGasto>(`${base}/${id}/estado`,{method:'PATCH'})
