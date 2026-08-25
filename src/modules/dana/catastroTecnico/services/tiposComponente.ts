import { apiRequest } from '@/services/auth'
export interface TipoComponente { id:number; nombre:string; categoria:string; puntos:number; color:string; grosor:number; descripcion:string; icono_url?:string; componentes_count:number }
export interface TipoComponentePayload { nombre:string; categoria:string; puntos:number; color:string; grosor:number; descripcion:string; icono:File|null }
const base='/lecturita/dana/catastro-tecnico/tipos-componentes'
export function listarTiposComponente(criterio:string){return apiRequest<TipoComponente[]>(`${base}?criterio=${encodeURIComponent(criterio)}`)}
export function guardarTipoComponente(data:TipoComponentePayload,id?:number){const body=new FormData();body.append('nombre',data.nombre);body.append('categoria',data.categoria);body.append('puntos',String(data.puntos));body.append('color',data.color);body.append('grosor',String(data.grosor));body.append('descripcion',data.descripcion);if(data.icono)body.append('icono',data.icono);if(id)body.append('_method','PUT');return apiRequest<TipoComponente>(id?`${base}/${id}`:base,{method:'POST',body})}
export function eliminarTipoComponente(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
