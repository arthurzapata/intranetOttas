import { apiRequest } from '@/services/auth'
import type { Inductor, InductorPayload, InductoresResponse } from '../interfaces/inductor.interface'
const base='/mia/contabilidad/parametros-costos/inductores'
export function listarInductores(criterio:string,page:number){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<InductoresResponse>(`${base}?${q}`)}
export function guardarInductor(id:number|null,payload:InductorPayload){return apiRequest<Inductor>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoInductor=(id:number)=>apiRequest<Inductor>(`${base}/${id}/estado`,{method:'PATCH'})
