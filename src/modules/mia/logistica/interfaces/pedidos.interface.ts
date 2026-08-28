export interface PedidoDetalle{id:number;item_id:number;item:string;cantidad:number;unidad?:string;glosa?:string}
export interface PedidoSeguimiento{id:number;estado:string;comentario?:string;usuario?:string;fecha:string}
export interface Pedido{id:number;tipo:'m'|'s'|'a';informacion:string;prioridad?:string;fecha_registro:string;estado:string;estado_label:string;es_requerimiento_almacen:boolean;evaluaciones_count:number;detalles?:PedidoDetalle[];seguimiento?:PedidoSeguimiento[]}
export interface PedidoOptions{estados:Array<{value:string;label:string}>;items:Array<{id:number;nombre:string;unidad?:string;tipo:'m'|'s'|'a';uso_comun?:boolean}>;inversiones:Array<{id:number;nombre:string}>}
export interface PedidoResponse{data:Pedido[];total:number;page:number;last_page:number}
