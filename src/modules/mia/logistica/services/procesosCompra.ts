import { apiDownload, apiRequest } from '@/services/auth'
export interface EtapaProceso{id:number;nombre:string;fecha_inicio?:string;fecha_fin?:string;orden?:number}
export interface PedidoProceso{id:number;informacion?:string;tipo?:string;fecha?:string}
export interface SeguimientoProceso{id:number;usuario?:string;proveedor?:string;resultado?:string;comentario?:string;comentario_logistica?:string;comentario_proveedor?:string;fecha:string}
export interface ProcesoCompra{id:number;nombre:string;descripcion?:string;tipo:'a'|'m'|'s';inicio?:string;fin?:string;registro?:string;estado:number;estado_nombre:string;estado_etapa:number;etapa_nombre?:string;postores_count:number;created_at:string;puede_editar?:boolean;puede_publicar?:boolean;puede_avanzar?:boolean;puede_enviar_validacion?:boolean;puede_declarar_desierto?:boolean;puede_generar_orden?:boolean;pedidos?:PedidoProceso[];etapas?:EtapaProceso[];seguimiento?:SeguimientoProceso[]}
export interface ProcesoOptions{estados:Array<{id:number;nombre:string}>;etapas:Array<{id:number;nombre:string}>;pedidos:Array<PedidoProceso>}
export interface ProcesoResponse{data:ProcesoCompra[];total:number;page:number;last_page:number;options:ProcesoOptions}
export function listarProcesos(filters:Record<string,string|number>){const q=new URLSearchParams();Object.entries(filters).forEach(([k,v])=>q.set(k,String(v)));return apiRequest<ProcesoResponse>(`/lecturita/mia/logistica/procesos-compra?${q}`)}
export function detalleProceso(id:number){return apiRequest<ProcesoCompra>(`/lecturita/mia/logistica/procesos-compra/${id}`)}
export function guardarProceso(id:number|null,data:Record<string,unknown>){return apiRequest<void>(`/lecturita/mia/logistica/procesos-compra${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function accionProceso(id:number,accion:'publicar'|'siguiente-etapa'|'enviar-validacion'|'retornar-evaluacion'|'declarar-desierto'|'eliminar'){return apiRequest<void>(`/lecturita/mia/logistica/procesos-compra/${id}/${accion}`,{method:'POST'})}
export function guardarComentario(id:number,validacionId:number,comentario:string){return apiRequest<void>(`/lecturita/mia/logistica/procesos-compra/${id}/validaciones/${validacionId}/comentario`,{method:'POST',body:JSON.stringify({comentario})})}
export function descargarArchivo(id:number,nombre:string){return apiDownload(`/lecturita/mia/logistica/procesos-compra/archivos/${id}`,nombre)}
