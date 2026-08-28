export interface TipoTransaccion { id:number;nombre:string;grupo:'i'|'s';orden_compra:boolean;pedido:boolean;documento:boolean;requiere_asiento_contable:boolean;requiere_almacen_destino:boolean;estado:boolean;documentos_count?:number }
export interface TiposTransaccionResponse { data:TipoTransaccion[];total:number;page:number;last_page:number }
export type TipoTransaccionPayload=Omit<TipoTransaccion,'id'|'documentos_count'>
