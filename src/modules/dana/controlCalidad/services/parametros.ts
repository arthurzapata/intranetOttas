import { apiRequest } from '@/services/auth'
export interface UnidadParametro { id:number; nombre:string; descripcion?:string }
export interface ParametroCalidad { id:number; nombre:string; codigo:string; unidad_id:number; unidad:string; created_at:string; resultados_count:number }
export interface ParametroPayload { nombre:string; codigo:string; unidad_id:number|null }
export interface ParametrosResponse { data:ParametroCalidad[]; unidades:UnidadParametro[]; current_page:number; last_page:number; total:number }
const base='/lecturita/dana/control-calidad/parametros'
export function listarParametros(criterio:string,page=1){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<ParametrosResponse>(`${base}?${q}`)}
export function guardarParametro(data:ParametroPayload,id?:number){return apiRequest<ParametroCalidad>(id?`${base}/${id}`:base,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarParametro(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
