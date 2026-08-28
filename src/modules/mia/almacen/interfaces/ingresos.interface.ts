export interface TipoIngreso { id:number; nombre:string }
export interface DetalleIngreso { id:number; item_id:number; item:string; unidad:string; cantidad:number; precio_unitario:number; valor_total:number }
export interface IngresoAlmacen { id:number; almacen_id:number; almacen:string; tipo_id:number; tipo:string; fecha_operacion:string; documento?:string; referencia?:string; observacion?:string; items_count:number; valor_total?:number; anulado:boolean; detalles?:DetalleIngreso[] }
export interface PeriodoAlmacen { id:number; nombre:string; fecha_inicio:string; fecha_fin:string; dia_vigente?:string; abierto:boolean }
export interface IngresosResponse { data:IngresoAlmacen[]; total:number; page:number; last_page:number; tipos:TipoIngreso[]; periodo:PeriodoAlmacen|null }
export interface IngresoPayload { tipo_id:number; fecha_operacion:string; documento:string; referencia:string; observacion:string; detalles:Array<{item_id:number;cantidad:number;precio_unitario:number}> }
