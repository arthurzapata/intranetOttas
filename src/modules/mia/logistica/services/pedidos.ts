import { apiDownload, apiRequest } from '@/services/auth'
import type { Pedido, PedidoOptions, PedidoResponse } from '../interfaces/pedidos.interface'
export function listarPedidos(filters:Record<string,string|number>){const q=new URLSearchParams();Object.entries(filters).forEach(([k,v])=>q.set(k,String(v)));return apiRequest<PedidoResponse>(`/lecturita/mia/logistica/pedidos?${q}`)}
export function opcionesPedido(){return apiRequest<PedidoOptions>('/lecturita/mia/logistica/pedidos/opciones')}
export function guardarPedido(id:number|null,data:FormData){return apiRequest<void>(`/lecturita/mia/logistica/pedidos${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:data})}
export function accionPedido(id:number,accion:'enviar'|'anular'|'aprobar'|'rechazar',comentario=''){return apiRequest<void>(`/lecturita/mia/logistica/pedidos/${id}/${accion}`,{method:'POST',body:JSON.stringify({comentario})})}
export function detallePedido(id:number){return apiRequest<Pedido>(`/lecturita/mia/logistica/pedidos/${id}`)}
export function imprimirPedido(id:number){return apiDownload(`/lecturita/mia/logistica/pedidos/${id}/imprimir`,`pedido_${id}.pdf`)}
