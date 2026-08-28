import { apiRequest } from '@/services/auth'
import type { GrupoItem, GruposResponse, GrupoPayload } from '../interfaces/gruposItems.interface'
const base='/mia/logistica/grupos-items'
export function listarGrupos(criterio:string,page:number){return apiRequest<GruposResponse>(`${base}?criterio=${encodeURIComponent(criterio)}&page=${page}`)}
export function obtenerGrupo(id:number){return apiRequest<GrupoItem>(`${base}/${id}`)}
export function guardarGrupo(id:number|null,data:GrupoPayload){return apiRequest<void>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarGrupo(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
export function guardarSubgrupo(grupoId:number,id:number|null,nombre:string){return apiRequest<void>(`${base}/${grupoId}/subgrupos${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify({nombre})})}
export function eliminarSubgrupo(grupoId:number,id:number){return apiRequest<void>(`${base}/${grupoId}/subgrupos/${id}`,{method:'DELETE'})}
export function guardarCaracteristica(grupoId:number,nombre:string){return apiRequest<void>(`${base}/${grupoId}/caracteristicas`,{method:'POST',body:JSON.stringify({nombre})})}
