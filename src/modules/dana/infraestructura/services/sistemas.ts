import { apiRequest } from '@/services/auth'
export type TipoSistema='a'|'d'
export type EstadoSistema='O'|'P'|'C'|'D'
export interface DistritoSistema { id:number; nombre:string }
export interface SistemaOperacional { id:number; distrito_id:number; distrito_nombre:string; tipo:TipoSistema; nombre:string; descripcion:string; capacidad_diseno_lps:number|null; capacidad_actual_lps:number|null; fecha_puesta_servicio:string; estado_operativo:EstadoSistema; componentes_count:number }
export interface SistemaPayload { distrito_id:number|null; tipo:TipoSistema; nombre:string; descripcion:string; capacidad_diseno_lps:number|null; capacidad_actual_lps:number|null; fecha_puesta_servicio:string; estado_operativo:EstadoSistema }
export interface SistemasResponse { data:SistemaOperacional[]; distritos:DistritoSistema[]; current_page:number; last_page:number; total:number }
const base='/lecturita/dana/sistemas'
export function listarSistemas(criterio:string,page=1){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<SistemasResponse>(`${base}?${q}`)}
export function guardarSistema(data:SistemaPayload,id?:number){return apiRequest<SistemaOperacional>(id?`${base}/${id}`:base,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarSistema(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
