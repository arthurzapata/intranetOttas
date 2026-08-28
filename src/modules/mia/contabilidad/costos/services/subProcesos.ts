import { apiRequest } from '@/services/auth'
import type { SubProceso, SubProcesoPayload, SubProcesosResponse } from '../interfaces/subProceso.interface'
const base='/mia/contabilidad/parametros-costos/subprocesos'
export function listarSubProcesos(criterio:string,page:number){const query=new URLSearchParams({criterio,page:String(page)});return apiRequest<SubProcesosResponse>(`${base}?${query}`)}
export function guardarSubProceso(id:number|null,payload:SubProcesoPayload){return apiRequest<SubProceso>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoSubProceso=(id:number)=>apiRequest<SubProceso>(`${base}/${id}/estado`,{method:'PATCH'})
