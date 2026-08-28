import { apiRequest } from '@/services/auth'
import type { Proceso, ProcesoPayload, ProcesosResponse } from '../interfaces/proceso.interface'
const base='/mia/contabilidad/parametros-costos/procesos'
export function listarProcesos(criterio:string,page:number){const query=new URLSearchParams({criterio,page:String(page)});return apiRequest<ProcesosResponse>(`${base}?${query}`)}
export function guardarProceso(id:number|null,payload:ProcesoPayload){return apiRequest<Proceso>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoProceso=(id:number)=>apiRequest<Proceso>(`${base}/${id}/estado`,{method:'PATCH'})
