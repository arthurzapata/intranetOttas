import { apiDownload, apiRequest } from '@/services/auth'
export type ResultadoTecnico='aprobado'|'rechazado'|'sin evaluacion'
export interface DocumentoOferta{id:number;nombre:string;tipo?:string;fecha?:string}
export interface ValidacionOferta{id:number;resultado:ResultadoTecnico;comentario?:string;ronda:number;fecha:string;usuario?:string;correo_enviado?:string}
export interface ProveedorOferta{id:number;ruc:string;razon_social:string;email?:string;documentos:DocumentoOferta[];validacion?:ValidacionOferta;historial:ValidacionOferta[]}
export interface ProcesoEvaluacion{id:number;nombre:string;descripcion?:string;inicio?:string;fin?:string;estado:number;estado_nombre:string;etapa_nombre?:string;postores_count:number;created_at:string;proveedores?:ProveedorOferta[];pedidos?:Array<{id:number;informacion?:string}>}
export interface EvaluacionResponse{data:ProcesoEvaluacion[];total:number;page:number;last_page:number;estados:Array<{id:number;nombre:string}>;etapas:Array<{id:number;nombre:string}>}
export function listarEvaluaciones(filters:Record<string,string|number>){const q=new URLSearchParams();Object.entries(filters).forEach(([k,v])=>q.set(k,String(v)));return apiRequest<EvaluacionResponse>(`/lecturita/mia/logistica/evaluacion-tecnica?${q}`)}
export function detalleEvaluacion(id:number){return apiRequest<ProcesoEvaluacion>(`/lecturita/mia/logistica/evaluacion-tecnica/${id}`)}
export function validarProveedor(procesoId:number,proveedorId:number,resultado:ResultadoTecnico,comentario:string){return apiRequest<ValidacionOferta>(`/lecturita/mia/logistica/evaluacion-tecnica/${procesoId}/proveedores/${proveedorId}/validar`,{method:'POST',body:JSON.stringify({resultado,comentario})})}
export function resolverProceso(id:number,resultado:'aprobar'|'rechazar',comentario=''){return apiRequest<void>(`/lecturita/mia/logistica/evaluacion-tecnica/${id}/${resultado}`,{method:'POST',body:JSON.stringify({comentario})})}
export function notificarProveedores(id:number,proveedorId?:number){return apiRequest<void>(`/lecturita/mia/logistica/evaluacion-tecnica/${id}/notificar${proveedorId?`/${proveedorId}`:''}`,{method:'POST'})}
export function descargarDocumento(procesoId:number,documentoId:number,nombre:string){return apiDownload(`/lecturita/mia/logistica/evaluacion-tecnica/${procesoId}/documentos/${documentoId}`,nombre)}
