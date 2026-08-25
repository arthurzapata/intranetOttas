import { apiRequest } from '@/services/auth'
export interface MuestraResultado { id:number; etiqueta:string; componente:string; fecha:string }
export interface ParametroResultado { id:number; nombre:string; codigo:string; unidad:string }
export interface ResultadoCalidad { id:number; muestra_id:number; muestra:string; componente:string; parametro_id:number; parametro:string; codigo:string; unidad:string; valor:number; created_at:string }
export interface ResultadoPayload { muestra_id:number|null; parametro_id:number|null; valor:number|null }
export interface ResultadosResponse { data:ResultadoCalidad[]; muestras:MuestraResultado[]; parametros:ParametroResultado[]; current_page:number; last_page:number; total:number }
const base='/lecturita/dana/control-calidad/resultados'
export function listarResultados(filters:{fecha_desde:string;fecha_hasta:string;parametros:number[];muestra_id:string;page:number}){const q=new URLSearchParams({fecha_desde:filters.fecha_desde,fecha_hasta:filters.fecha_hasta,muestra_id:filters.muestra_id,page:String(filters.page)});filters.parametros.forEach(id=>q.append('parametros[]',String(id)));return apiRequest<ResultadosResponse>(`${base}?${q}`)}
export function guardarResultado(data:ResultadoPayload,id?:number){return apiRequest<ResultadoCalidad>(id?`${base}/${id}`:base,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarResultado(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
