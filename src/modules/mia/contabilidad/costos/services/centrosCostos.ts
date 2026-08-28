import { apiRequest } from '@/services/auth'
import type { CentroCostos, CentroCostosPayload, CentrosCostosResponse, CuentaCentro } from '../interfaces/centroCostos.interface'
const base='/mia/contabilidad/parametros-costos/centros-costos'
export function listarCentrosCostos(criterio:string,page:number){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<CentrosCostosResponse>(`${base}?${q}`)}
export function guardarCentroCostos(id:number|null,payload:CentroCostosPayload){return apiRequest<CentroCostos>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoCentroCostos=(id:number)=>apiRequest<CentroCostos>(`${base}/${id}/estado`,{method:'PATCH'})
export function buscarCuentasCentro(q:string){return apiRequest<CuentaCentro[]>(`${base}/cuentas?q=${encodeURIComponent(q)}`)}
