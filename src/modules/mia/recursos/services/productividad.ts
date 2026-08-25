import { apiRequest } from '@/services/auth'
export interface Colaborador { id:number; username:string; nombre_completo:string; dni:string; fecha_nacimiento?:string; sexo?:string; imagen_url?:string; total_tareas:number; total_culminadas:number }
export interface Actividad { id:number; descripcion:string; seccion:string; fecha_registro:string; registrado_por:string; atendido:boolean; fecha_atencion?:string }
export interface ColaboradoresResponse { data:Colaborador[]; current_page:number; last_page:number; total:number }
export interface ProductividadResponse { colaborador:Colaborador; actividades:Actividad[] }
const base='/lecturita/mia/recursos/productividad'
export function listarColaboradores(criterio:string,page=1){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<ColaboradoresResponse>(`${base}?${q}`)}
export function obtenerProductividad(usuarioId:number){return apiRequest<ProductividadResponse>(`${base}/${usuarioId}`)}
export function asignarActividad(usuarioId:number,descripcion:string){return apiRequest<Actividad>(`${base}/${usuarioId}/actividades`,{method:'POST',body:JSON.stringify({descripcion})})}
export function eliminarActividad(usuarioId:number,tareaId:number){return apiRequest<void>(`${base}/${usuarioId}/actividades/${tareaId}`,{method:'DELETE'})}
