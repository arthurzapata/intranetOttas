import { apiRequest } from '@/services/auth'
import type { TipoCambio,TipoCambioFiltros,TipoCambioPayload,TipoCambioResponse } from '../interfaces/tipo-cambio.interface'
const base='/mia/finanzas/tipos-cambio'
export function listarTiposCambio(f:TipoCambioFiltros,page=1){const q=new URLSearchParams({page:String(page)});Object.entries(f).forEach(([k,v])=>{if(v)q.set(k,v)});return apiRequest<TipoCambioResponse>(`${base}?${q}`)}
export const obtenerTipoCambio=(id:number)=>apiRequest<TipoCambio>(`${base}/${id}`)
export const guardarTipoCambio=(id:number|null,data:TipoCambioPayload)=>apiRequest<TipoCambio>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})
export const cambiarEstadoTipoCambio=(id:number)=>apiRequest<void>(`${base}/${id}/estado`,{method:'PATCH',body:JSON.stringify({})})
