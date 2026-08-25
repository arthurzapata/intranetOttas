import { apiDownload, apiRequest } from '@/services/auth'
export interface PedidoDetalle{id:number;item_id:number;item:string;cantidad:number;unidad?:string;glosa?:string}
export interface PedidoSeguimiento{id:number;estado:string;comentario?:string;usuario?:string;fecha:string}
export interface Pedido{id:number;tipo:'m'|'s'|'a';informacion:string;prioridad?:string;fecha_registro:string;estado:string;estado_label:string;es_requerimiento_almacen:boolean;evaluaciones_count:number;detalles?:PedidoDetalle[];seguimiento?:PedidoSeguimiento[]}
export interface PedidoOptions{estados:Array<{value:string;label:string}>;items:Array<{id:number;nombre:string;unidad?:string;tipo:'m'|'s'|'a';uso_comun?:boolean}>;inversiones:Array<{id:number;nombre:string}>}
export interface PedidoResponse{data:Pedido[];total:number;page:number;last_page:number}
export function listarPedidos(filters:Record<string,string|number>){const q=new URLSearchParams();Object.entries(filters).forEach(([k,v])=>q.set(k,String(v)));return apiRequest<PedidoResponse>(`/lecturita/mia/logistica/pedidos?${q}`)}
export function opcionesPedido(){return apiRequest<PedidoOptions>('/lecturita/mia/logistica/pedidos/opciones')}
export function guardarPedido(id:number|null,data:FormData){return apiRequest<void>(`/lecturita/mia/logistica/pedidos${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:data})}
export function accionPedido(id:number,accion:'enviar'|'anular'|'aprobar'|'rechazar',comentario=''){return apiRequest<void>(`/lecturita/mia/logistica/pedidos/${id}/${accion}`,{method:'POST',body:JSON.stringify({comentario})})}
export function detallePedido(id:number){return apiRequest<Pedido>(`/lecturita/mia/logistica/pedidos/${id}`)}
export function imprimirPedido(id:number){return apiDownload(`/lecturita/mia/logistica/pedidos/${id}/imprimir`,`pedido_${id}.pdf`)}
