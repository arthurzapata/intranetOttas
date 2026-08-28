import { apiRequest } from '@/services/auth'
import type { CuentaContable, CuentaContableOption, CuentaContablePayload, CuentasContablesResponse } from '../interfaces/cuentasContables.interface'
const base='/mia/contabilidad/maestros/cuentas-contables'
export function listarCuentasContables(criterio:string,page:number){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<CuentasContablesResponse>(`${base}?${q}`)}
export function buscarCuentasPadre(criterio:string){const q=new URLSearchParams({q:criterio});return apiRequest<CuentaContableOption[]>(`${base}/buscar?${q}`)}
export function guardarCuentaContable(id:number|null,payload:CuentaContablePayload){return apiRequest<CuentaContable>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoCuentaContable=(id:number)=>apiRequest<CuentaContable>(`${base}/${id}/estado`,{method:'PATCH'})
