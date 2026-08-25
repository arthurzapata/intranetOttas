import { apiRequest } from '@/services/auth'
export interface Subgrupo { id:number;grupo_id:number;nombre:string;items_count:number }
export interface Caracteristica { id:number;grupo_id:number;nombre:string }
export interface GrupoItem { id:number;nombre:string;familia:'m'|'a'|'s';familia_nombre:string;vida_util?:number;deprec?:number;etiqueta:boolean;debe_deprec?:number;haber_deprec?:number;debe_revaluac?:number;haber_revaluac?:number;subgrupos_count:number;items_count:number;subgrupos?:Subgrupo[];caracteristicas?:Caracteristica[] }
export interface GruposResponse { data:GrupoItem[];total:number;page:number;last_page:number }
export type GrupoPayload=Pick<GrupoItem,'nombre'|'familia'|'vida_util'|'etiqueta'|'debe_deprec'|'haber_deprec'|'debe_revaluac'|'haber_revaluac'>
const base='/lecturita/mia/logistica/grupos-items'
export function listarGrupos(criterio:string,page:number){return apiRequest<GruposResponse>(`${base}?criterio=${encodeURIComponent(criterio)}&page=${page}`)}
export function obtenerGrupo(id:number){return apiRequest<GrupoItem>(`${base}/${id}`)}
export function guardarGrupo(id:number|null,data:GrupoPayload){return apiRequest<void>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarGrupo(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
export function guardarSubgrupo(grupoId:number,id:number|null,nombre:string){return apiRequest<void>(`${base}/${grupoId}/subgrupos${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify({nombre})})}
export function eliminarSubgrupo(grupoId:number,id:number){return apiRequest<void>(`${base}/${grupoId}/subgrupos/${id}`,{method:'DELETE'})}
export function guardarCaracteristica(grupoId:number,nombre:string){return apiRequest<void>(`${base}/${grupoId}/caracteristicas`,{method:'POST',body:JSON.stringify({nombre})})}
