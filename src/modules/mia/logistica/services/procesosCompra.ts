import { apiDownload, apiRequest } from '@/services/auth'
import type { ProcesoCompra, ProcesoResponse } from '../interfaces/procesosCompra.interface'
export function listarProcesos(filters:Record<string,string|number>){const q=new URLSearchParams();Object.entries(filters).forEach(([k,v])=>q.set(k,String(v)));return apiRequest<ProcesoResponse>(`/mia/logistica/procesos-compra?${q}`)}
export function detalleProceso(id:number){return apiRequest<ProcesoCompra>(`/mia/logistica/procesos-compra/${id}`)}
export function guardarProceso(id:number|null,data:Record<string,unknown>){return apiRequest<void>(`/mia/logistica/procesos-compra${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function accionProceso(id:number,accion:'publicar'|'siguiente-etapa'|'enviar-validacion'|'retornar-evaluacion'|'declarar-desierto'|'eliminar'){return apiRequest<void>(`/mia/logistica/procesos-compra/${id}/${accion}`,{method:'POST'})}
export function guardarComentario(id:number,validacionId:number,comentario:string){return apiRequest<void>(`/mia/logistica/procesos-compra/${id}/validaciones/${validacionId}/comentario`,{method:'POST',body:JSON.stringify({comentario})})}
export function descargarArchivo(id:number,nombre:string){return apiDownload(`/mia/logistica/procesos-compra/archivos/${id}`,nombre)}
