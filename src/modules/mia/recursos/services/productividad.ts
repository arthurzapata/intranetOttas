import { apiRequest } from '@/services/auth'
import type { Actividad, ColaboradoresResponse, ProductividadResponse } from '../interfaces/productividad.interface'
const base='/lecturita/mia/recursos/productividad'
export function listarColaboradores(criterio:string,page=1){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<ColaboradoresResponse>(`${base}?${q}`)}
export function obtenerProductividad(usuarioId:number){return apiRequest<ProductividadResponse>(`${base}/${usuarioId}`)}
export function asignarActividad(usuarioId:number,descripcion:string){return apiRequest<Actividad>(`${base}/${usuarioId}/actividades`,{method:'POST',body:JSON.stringify({descripcion})})}
export function eliminarActividad(usuarioId:number,tareaId:number){return apiRequest<void>(`${base}/${usuarioId}/actividades/${tareaId}`,{method:'DELETE'})}
