export interface MaterialAlmacen{id:number;nombre:string;unidad:string;grupo?:string;saldo:number}
export interface RequerimientoLinea{id?:number;item_id:number;item?:string;unidad?:string;saldo?:number;cantidad:number;glosa:string;centro_costos_id:number;actividad_presupuestal_id:number;atendido?:number}
export interface RequerimientoAlmacen{id:number;informacion?:string;prioridad:'n'|'u'|'m';inversion_id:number;fecha_registro:string;estado:string;estado_label?:string;detalles:RequerimientoLinea[]}
export interface RequerimientoOptions{materiales:MaterialAlmacen[];centros_costos:Array<{id:number;nombre:string}>;actividades:Array<{id:number;nombre:string}>}
export interface RequerimientoResponse{data:RequerimientoAlmacen[];total:number;page:number;last_page:number}
