export interface EvaluacionProforma { id:number;nombre:string;proceso:string;estado_nombre:string;items_count:number;proformas_count:number }
export interface PrecioProforma { detalle_id:number;proforma_id:number;proveedor_id:number;proveedor:string;ruc:string;precio_unitario:number;subtotal:number;seleccionado:boolean }
export interface ItemProforma { item_id:number;nombre:string;imagen_url?:string;unidad:string;cantidad:number;pedidos:Array<{pedido_id:number;cantidad:number}>;precios:PrecioProforma[] }
export interface Proforma { id:number;evaluacion_id:number;proveedor_id:number;proveedor:string;ruc:string;fecha_vencimiento:string;total:number;vigente:boolean }
export interface ProformasResponse { evaluaciones:EvaluacionProforma[];evaluacion?:EvaluacionProforma;items:ItemProforma[];proformas:Proforma[] }
export interface ProveedorCotizacion { id:number;ruc:string;razon_social:string }
