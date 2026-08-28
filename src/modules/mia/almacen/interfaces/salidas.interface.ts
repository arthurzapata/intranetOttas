export interface PedidoSalida { id:number; numero:string; area:string; solicitante:string; fecha:string; items:Array<{item_id:number;item:string;unidad:string;cantidad_pedida:number;cantidad_atendida:number;stock_comprometido:number;precio_medio:number}> }
export interface SalidaAlmacen { id:number; almacen_id:number; almacen:string; tipo_id:number; tipo:string; fecha_operacion:string; pedido_id?:number; pedido?:string; entregado_a:string; notas:string; items_count:number; valor_total:number; anulado:boolean; detalles?:DetalleIngreso[] }
export interface SalidasResponse { data:SalidaAlmacen[]; total:number; page:number; last_page:number; tipos:TipoIngreso[]; periodo:PeriodoAlmacen|null }
export interface SalidaPayload { tipo_id:number; pedido_id:number; entregado_a_id:number; notas:string; items:Array<{item_id:number;cantidad:number}> }
import type { DetalleIngreso, PeriodoAlmacen, TipoIngreso } from './ingresos.interface'
