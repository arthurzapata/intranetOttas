import { apiDownload, apiRequest } from '@/services/auth'
import type { TipoOrden, Orden, OrdenResponse } from '../interfaces/ordenes.interface'
export function listarOrdenes(tipo:TipoOrden,filters:Record<string,string|number>){const q=new URLSearchParams({tipo});Object.entries(filters).forEach(([k,v])=>q.set(k,String(v)));return apiRequest<OrdenResponse>(`/lecturita/mia/logistica/ordenes?${q}`)}
export function prepararOrden(procesoId:number,tipo:TipoOrden){return apiRequest<Orden>(`/lecturita/mia/logistica/ordenes/preparar/${procesoId}?tipo=${tipo}`)}
export function detalleOrden(id:number){return apiRequest<Orden>(`/lecturita/mia/logistica/ordenes/${id}`)}
export function guardarOrden(id:number|null,data:Record<string,unknown>){return apiRequest<void>(`/lecturita/mia/logistica/ordenes${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function accionOrden(id:number,accion:'notificar'|'anular'){return apiRequest<void>(`/lecturita/mia/logistica/ordenes/${id}/${accion}`,{method:'POST'})}
export function imprimirOrden(id:number){return apiDownload(`/lecturita/mia/logistica/ordenes/${id}/imprimir`,`orden_${id}.pdf`)}
