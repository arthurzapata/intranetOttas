import { apiDownload, apiRequest } from '@/services/auth'
import type { CommunicationItem, CommunicationResource, DashboardData } from '../interfaces/comunicaciones.interface'
export function dashboard(desde:string,hasta:string){const q=new URLSearchParams({desde,hasta});return apiRequest<DashboardData>(`/lecturita/aura/comunicaciones/dashboard?${q}`)}
export function listar(resource:CommunicationResource,search=''){return apiRequest<CommunicationItem[]>(`/lecturita/aura/comunicaciones/${resource}?criterio=${encodeURIComponent(search)}`)}
export function guardar(resource:CommunicationResource,id:number|null,data:FormData|Record<string,unknown>){return apiRequest<void>(`/lecturita/aura/comunicaciones/${resource}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:data instanceof FormData?data:JSON.stringify(data)})}
export function eliminar(resource:CommunicationResource,id:number){return apiRequest<void>(`/lecturita/aura/comunicaciones/${resource}/${id}`,{method:'DELETE'})}
export function exportar(resource:CommunicationResource,format:'pdf'|'docx'='pdf'){return apiDownload(`/lecturita/aura/comunicaciones/${resource}/exportar/${format}`,`${resource}.${format}`)}
