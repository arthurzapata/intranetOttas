import { apiRequest } from '@/services/auth'
import type { DetalleIngreso, PeriodoAlmacen, TipoIngreso } from './ingresos'

export interface PedidoSalida { id:number; numero:string; area:string; solicitante:string; fecha:string; items:Array<{item_id:number;item:string;unidad:string;cantidad_pedida:number;cantidad_atendida:number;stock_comprometido:number;precio_medio:number}> }
export interface SalidaAlmacen { id:number; almacen_id:number; almacen:string; tipo_id:number; tipo:string; fecha_operacion:string; pedido_id?:number; pedido?:string; entregado_a:string; notas:string; items_count:number; valor_total:number; anulado:boolean; detalles?:DetalleIngreso[] }
export interface SalidasResponse { data:SalidaAlmacen[]; total:number; page:number; last_page:number; tipos:TipoIngreso[]; periodo:PeriodoAlmacen|null }
export interface SalidaPayload { tipo_id:number; pedido_id:number; entregado_a_id:number; notas:string; items:Array<{item_id:number;cantidad:number}> }
const base='/lecturita/mia/logistica/almacen/salidas'
export function listarSalidas(filters:{criterio:string;tipo_id:string;desde:string;hasta:string;page:number}){const q=new URLSearchParams({criterio:filters.criterio,tipo_documento:filters.tipo_id,desde:filters.desde,hasta:filters.hasta,page:String(filters.page)});return apiRequest<SalidasResponse>(`${base}?${q}`)}
export function obtenerSalida(id:number){return apiRequest<SalidaAlmacen>(`${base}/${id}`)}
export function buscarPedidos(search:string){return apiRequest<PedidoSalida[]>(`${base}/pedidos?search=${encodeURIComponent(search)}`)}
export function guardarSalida(data:SalidaPayload){return apiRequest<void>(base,{method:'POST',body:JSON.stringify(data)})}
export function anularSalida(id:number,almacenId:number,motivo:string){return apiRequest<void>(`${base}/${id}/anular`,{method:'POST',body:JSON.stringify({almacen_id:almacenId,motivo})})}
export function urlNotaSalida(id:number,almacenId:number){return `${base}/${id}/nota?almacen_id=${almacenId}`}
