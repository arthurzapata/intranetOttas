import { apiRequest } from '@/services/auth'
export interface TipoTransaccion { id:number;nombre:string;grupo:'i'|'s';orden_compra:boolean;pedido:boolean;documento:boolean;requiere_asiento_contable:boolean;requiere_almacen_destino:boolean;estado:boolean;documentos_count?:number }
export interface TiposTransaccionResponse { data:TipoTransaccion[];total:number;page:number;last_page:number }
export type TipoTransaccionPayload=Omit<TipoTransaccion,'id'|'documentos_count'>
const base='/lecturita/mia/logistica/almacen/tipos-transaccion'
export function listarTiposTransaccion(criterio:string,page:number){return apiRequest<TiposTransaccionResponse>(`${base}?criterio=${encodeURIComponent(criterio)}&page=${page}`)}
export function guardarTipoTransaccion(id:number|null,data:TipoTransaccionPayload){return apiRequest<void>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
