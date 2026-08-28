import { apiRequest } from '@/services/auth'
import type { DistritoSucursalOption, SucursalContable, SucursalContablePayload, SucursalesContablesResponse } from '../interfaces/sucursales.interface'
const base='/mia/contabilidad/maestros/sucursales'
export function listarSucursales(criterio:string,page:number){const query=new URLSearchParams({criterio,page:String(page)});return apiRequest<SucursalesContablesResponse>(`${base}?${query}`)}
export const listarDistritosSucursal=()=>apiRequest<DistritoSucursalOption[]>(`${base}/distritos`)
export function guardarSucursal(id:number|null,payload:SucursalContablePayload){return apiRequest<SucursalContable>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoSucursal=(id:number)=>apiRequest<SucursalContable>(`${base}/${id}/estado`,{method:'PATCH'})
