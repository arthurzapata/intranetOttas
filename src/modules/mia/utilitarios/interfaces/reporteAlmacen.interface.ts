export interface ItemReporteAlmacen { almacen:string; codigo_avalon:string; descripcion:string; unidad_medida:string; saldo:number; valor_total:number }
export interface ReporteAlmacenResponse { anio:number; items:ItemReporteAlmacen[]; total_items:number; total_cantidad:number; total_valorizado:number }
