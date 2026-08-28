import { apiRequest } from '@/services/auth'
import type { Periodo, PeriodosResponse } from '../interfaces/periodos.interface'
const base='/mia/logistica/almacen/periodos'
export function listarPeriodos(criterio:string,page:number){return apiRequest<PeriodosResponse>(`${base}?criterio=${encodeURIComponent(criterio)}&page=${page}`)}
export function obtenerPeriodo(id:number){return apiRequest<Periodo>(`${base}/${id}`)}
export function inicializarPeriodos(){return apiRequest<void>(base,{method:'POST'})}
export function cambiarPeriodo(id:number,action:'cerrar'|'aperturar'){return apiRequest<void>(`${base}/${id}/${action}`,{method:'POST'})}
export function cambiarDia(id:number,action:'cerrar'|'aperturar'){return apiRequest<void>(`${base}/dias/${id}/${action}`,{method:'POST'})}
