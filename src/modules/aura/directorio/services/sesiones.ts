import { apiRequest } from '@/services/auth'
import type { Sesion, SesionPage, SesionPayload } from '../interfaces/sesiones.interface'
export function listarSesiones(filters:{criterio:string;desde:string;hasta:string;page:number}){const q=new URLSearchParams({page:String(filters.page)});Object.entries(filters).forEach(([k,v])=>{if(k!=='page'&&v)q.set(k,String(v))});return apiRequest<SesionPage>(`/aura/directorio/sesiones?${q}`)}
export function guardarSesion(id:number|null,data:SesionPayload){return apiRequest<void>(`/aura/directorio/sesiones${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function detallarSesion(id:number){return apiRequest<Sesion>(`/aura/directorio/sesiones/${id}`)}
export function eliminarSesion(id:number){return apiRequest<void>(`/aura/directorio/sesiones/${id}`,{method:'DELETE'})}
export function finalizarSesion(id:number){return apiRequest<void>(`/aura/directorio/sesiones/${id}/finalizar`,{method:'POST',body:JSON.stringify({})})}
