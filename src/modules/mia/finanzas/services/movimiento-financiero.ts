import { apiRequest } from '@/services/auth'
import type { MovimientoFiltros,MovimientoFinanciero,MovimientoOpciones,MovimientoPayload,MovimientoResponse } from '../interfaces/movimiento-financiero.interface'
const base='/mia/finanzas/movimientos-financieros'
export function listarMovimientosFinancieros(f:MovimientoFiltros,page=1){const q=new URLSearchParams({page:String(page)});Object.entries(f).forEach(([k,v])=>{if(v)q.set(k,v)});return apiRequest<MovimientoResponse>(`${base}?${q}`)}
export const opcionesMovimientoFinanciero=()=>apiRequest<MovimientoOpciones>(`${base}/opciones`)
export const obtenerMovimientoFinanciero=(id:number)=>apiRequest<MovimientoFinanciero>(`${base}/${id}`)
export const guardarMovimientoFinanciero=(id:number|null,data:MovimientoPayload)=>apiRequest<MovimientoFinanciero>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})
export const cambiarEstadoMovimientoFinanciero=(id:number)=>apiRequest<void>(`${base}/${id}/estado`,{method:'POST',body:JSON.stringify({})})
