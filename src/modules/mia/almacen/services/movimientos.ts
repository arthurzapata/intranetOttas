import { apiRequest } from '@/services/auth'
import type { CatalogoSaldo } from './saldos'
export interface ItemOption { id:number; nombre:string }
export interface MovimientoDocumento { modo:'documento'; movimiento_id:number; almacen_id:number; fecha:string; movimiento:string; cantidad:number; orden_compra?:string; pedido?:string; referencia?:string; doc_referencia?:string; descripcion:string; estado_movimiento:number }
export interface MovimientoItem { modo:'item'; id:number; item_id:number; almacen_id:number; fecha:string; nombre_item:string; unidad_item:string; tipo_movimiento:'INGRESO'|'SALIDA'; cantidad:number; valor_unitario:number; valor_total:number; saldo_cantidad:number; saldo_valor:number; detalle_movimiento:string; glosa_movimiento:string; estado_movimiento:number }
export type Movimiento=MovimientoDocumento|MovimientoItem
export interface MovimientosResponse { data:Movimiento[]; total:number; page:number; last_page:number; modo:'documento'|'item'; almacenes:CatalogoSaldo[]; almacen_default_id?:number; periodo:{fecha_inicio:string;fecha_fin:string}|null; resumen:{ingresos:number;salidas:number;documentos:number;anulados:number} }
const base='/lecturita/mia/logistica/almacen/movimientos'
export function listarMovimientos(filters:{almacen:string;desde:string;hasta:string;items:number[];page:number}){const q=new URLSearchParams({almacen:filters.almacen,desde:filters.desde,hasta:filters.hasta,page:String(filters.page)});filters.items.forEach(id=>q.append('items[]',String(id)));return apiRequest<MovimientosResponse>(`${base}?${q}`)}
export function buscarItems(search:string){return apiRequest<ItemOption[]>(`${base}/items?search=${encodeURIComponent(search)}`)}
export function obtenerDetalle(id:number,almacenId:number){return apiRequest<MovimientoItem[]>(`${base}/${id}/detalle?almacen=${almacenId}`)}
export function urlReporteMovimientos(filters:{almacen:string;desde:string;hasta:string;items:number[]}){const q=new URLSearchParams({almacen:filters.almacen,desde:filters.desde,hasta:filters.hasta});filters.items.forEach(id=>q.append('items[]',String(id)));return `${base}/exportar/pdf?${q}`}
