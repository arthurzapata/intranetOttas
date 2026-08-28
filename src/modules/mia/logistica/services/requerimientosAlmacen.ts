import { apiDownload, apiRequest } from '@/services/auth'
import type { RequerimientoAlmacen, RequerimientoOptions, RequerimientoResponse } from '../interfaces/requerimientosAlmacen.interface'
export function listarRequerimientos(filters:Record<string,string|number>){const q=new URLSearchParams();Object.entries(filters).forEach(([k,v])=>q.set(k,String(v)));return apiRequest<RequerimientoResponse>(`/lecturita/mia/logistica/requerimientos-almacen?${q}`)}
export function opcionesRequerimiento(criterio=''){return apiRequest<RequerimientoOptions>(`/lecturita/mia/logistica/requerimientos-almacen/opciones?criterio=${encodeURIComponent(criterio)}`)}
export function detalleRequerimiento(id:number){return apiRequest<RequerimientoAlmacen>(`/lecturita/mia/logistica/requerimientos-almacen/${id}`)}
export function guardarRequerimiento(id:number|null,data:Record<string,unknown>){return apiRequest<void>(`/lecturita/mia/logistica/requerimientos-almacen${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function imprimirRequerimiento(id:number){return apiDownload(`/lecturita/mia/logistica/requerimientos-almacen/${id}/imprimir`,`requerimiento_almacen_${id}.pdf`)}
