import { apiRequest } from '@/services/auth'
export interface DiaOperativo { id:number;fecha:string;cerrado:boolean;fecha_cierre?:string;usuario_cierre?:string;observacion?:string;movimientos_count:number }
export interface Periodo { id:number;anio:number;mes:number;nombre:string;fecha_inicio:string;fecha_fin:string;cerrado:boolean;fecha_cierre?:string;usuario_cierre?:string;observacion?:string;dias_count:number;movimientos_count:number;dia_abierto?:DiaOperativo;dias?:DiaOperativo[] }
export interface PeriodosResponse { data:Periodo[];total:number;page:number;last_page:number;inicializado:boolean }
const base='/lecturita/mia/logistica/almacen/periodos'
export function listarPeriodos(criterio:string,page:number){return apiRequest<PeriodosResponse>(`${base}?criterio=${encodeURIComponent(criterio)}&page=${page}`)}
export function obtenerPeriodo(id:number){return apiRequest<Periodo>(`${base}/${id}`)}
export function inicializarPeriodos(){return apiRequest<void>(base,{method:'POST'})}
export function cambiarPeriodo(id:number,action:'cerrar'|'aperturar'){return apiRequest<void>(`${base}/${id}/${action}`,{method:'POST'})}
export function cambiarDia(id:number,action:'cerrar'|'aperturar'){return apiRequest<void>(`${base}/dias/${id}/${action}`,{method:'POST'})}
