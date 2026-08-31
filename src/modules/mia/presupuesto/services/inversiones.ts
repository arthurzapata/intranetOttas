import { apiRequest } from '@/services/auth'
import type { Inversion, InversionPayload, InversionesResponse } from '../interfaces/inversion.interface'
const base='/mia/presupuesto/inversiones'
export function listarInversiones(criterio:string,page:number){const q=new URLSearchParams({page:String(page)});if(criterio)q.set('criterio',criterio);return apiRequest<InversionesResponse>(`${base}?${q}`)}
export function guardarInversion(id:number|null,payload:InversionPayload){return apiRequest<Inversion>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoInversion=(id:number)=>apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})

