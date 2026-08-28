import { apiDownload, apiRequest } from '@/services/auth'
import type { ResultadoTecnico, ValidacionOferta, ProcesoEvaluacion, EvaluacionResponse } from '../interfaces/evaluacionTecnica.interface'
export function listarEvaluaciones(filters:Record<string,string|number>){const q=new URLSearchParams();Object.entries(filters).forEach(([k,v])=>q.set(k,String(v)));return apiRequest<EvaluacionResponse>(`/lecturita/mia/logistica/evaluacion-tecnica?${q}`)}
export function detalleEvaluacion(id:number){return apiRequest<ProcesoEvaluacion>(`/lecturita/mia/logistica/evaluacion-tecnica/${id}`)}
export function validarProveedor(procesoId:number,proveedorId:number,resultado:ResultadoTecnico,comentario:string){return apiRequest<ValidacionOferta>(`/lecturita/mia/logistica/evaluacion-tecnica/${procesoId}/proveedores/${proveedorId}/validar`,{method:'POST',body:JSON.stringify({resultado,comentario})})}
export function resolverProceso(id:number,resultado:'aprobar'|'rechazar',comentario=''){return apiRequest<void>(`/lecturita/mia/logistica/evaluacion-tecnica/${id}/${resultado}`,{method:'POST',body:JSON.stringify({comentario})})}
export function notificarProveedores(id:number,proveedorId?:number){return apiRequest<void>(`/lecturita/mia/logistica/evaluacion-tecnica/${id}/notificar${proveedorId?`/${proveedorId}`:''}`,{method:'POST'})}
export function descargarDocumento(procesoId:number,documentoId:number,nombre:string){return apiDownload(`/lecturita/mia/logistica/evaluacion-tecnica/${procesoId}/documentos/${documentoId}`,nombre)}
