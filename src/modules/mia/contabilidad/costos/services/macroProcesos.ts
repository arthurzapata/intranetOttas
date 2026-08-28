import { apiRequest } from '@/services/auth'
import type { MacroProceso, MacroProcesoPayload, MacroProcesosResponse } from '../interfaces/macroProceso.interface'
const base='/mia/contabilidad/parametros-costos/macroprocesos'
export function listarMacroProcesos(criterio:string,page:number){const query=new URLSearchParams({criterio,page:String(page)});return apiRequest<MacroProcesosResponse>(`${base}?${query}`)}
export function guardarMacroProceso(id:number|null,payload:MacroProcesoPayload){return apiRequest<MacroProceso>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoMacroProceso=(id:number)=>apiRequest<MacroProceso>(`${base}/${id}/estado`,{method:'PATCH'})
