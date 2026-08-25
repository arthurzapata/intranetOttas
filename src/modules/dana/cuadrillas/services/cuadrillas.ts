import { apiRequest } from '@/services/auth'
export interface PersonalOperativo { id:number; nombre:string; cargo:string; disponible:boolean }
export interface MiembroCuadrilla extends PersonalOperativo { lider:boolean }
export interface Cuadrilla { id:number; nombre:string; tipo_servicio_id:number; tipo_servicio:string; activa:boolean; lider_id:number; lider:string; miembros:MiembroCuadrilla[]; trabajos_pendientes:number; trabajos_atendidos:number }
export interface CuadrillaPayload { nombre:string; tipo_servicio_id:number|null; lider_id:number|null; miembros_ids:number[]; activa:boolean }
export interface CuadrillasResponse { data:Cuadrilla[]; personal:PersonalOperativo[]; tipos_servicio:Record<number,string>; total:number; resumen:{activas:number;personal_asignado:number;trabajos_pendientes:number} }
const base='/lecturita/dana/cuadrillas'
export function listarCuadrillas(criterio=''){const q=new URLSearchParams({criterio});return apiRequest<CuadrillasResponse>(`${base}?${q}`)}
export function guardarCuadrilla(data:CuadrillaPayload,id?:number){return apiRequest<Cuadrilla>(id?`${base}/${id}`:base,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarCuadrilla(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
