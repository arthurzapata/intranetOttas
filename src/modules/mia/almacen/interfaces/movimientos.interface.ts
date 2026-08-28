export interface ItemOption { id:number; nombre:string }
export interface MovimientoDocumento { modo:'documento'; movimiento_id:number; almacen_id:number; fecha:string; movimiento:string; cantidad:number; orden_compra?:string; pedido?:string; referencia?:string; doc_referencia?:string; descripcion:string; estado_movimiento:number }
export interface MovimientoItem { modo:'item'; id:number; item_id:number; almacen_id:number; fecha:string; nombre_item:string; unidad_item:string; tipo_movimiento:'INGRESO'|'SALIDA'; cantidad:number; valor_unitario:number; valor_total:number; saldo_cantidad:number; saldo_valor:number; detalle_movimiento:string; glosa_movimiento:string; estado_movimiento:number }
export type Movimiento=MovimientoDocumento|MovimientoItem
export interface MovimientosResponse { data:Movimiento[]; total:number; page:number; last_page:number; modo:'documento'|'item'; almacenes:CatalogoSaldo[]; almacen_default_id?:number; periodo:{fecha_inicio:string;fecha_fin:string}|null; resumen:{ingresos:number;salidas:number;documentos:number;anulados:number} }
import type { CatalogoSaldo } from './saldos.interface'
