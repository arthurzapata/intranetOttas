import { apiDownload, apiRequest } from '@/services/auth'
export type TipoOrden='compra'|'servicio'
export interface OrdenLinea{id?:number;codigo:number;denominacion:string;glosa?:string;unidad?:string;cantidad:number;precio:number;valor:number;atendido?:number}
export interface OrdenSeguimiento{pedido?:{id:number;informacion?:string;estado?:string};proceso?:{id:number;nombre:string;estado?:string};evaluacion?:{id:number;nombre?:string;estado?:string;observacion?:string};atenciones:Array<{id:number;item:string;cantidad:number;tipo:string;fecha:string;usuario?:string}>}
export interface Orden{id:number;correlativo?:number;tipo:TipoOrden;fecha_emision:string;fecha_notificacion?:string;proveedor_id:number;proveedor:string;ruc:string;moneda_id:number;subtotal:number;igv:number;total:number;otros_conceptos:number;estado:number;estado_label:string;proveedor_notificado:boolean;proceso_id:number;pedido_id?:number;observacion?:string;forma_pago?:string;forma_entrega?:string;plazo_entrega?:string;validez_oferta?:string;detalles?:OrdenLinea[];seguimiento?:OrdenSeguimiento;puede_editar?:boolean;puede_notificar?:boolean;puede_anular?:boolean}
export interface OrdenOptions{proveedores:Array<{id:number;nombre:string;ruc?:string}>;estados:Array<{value:number;label:string}>;procesos:Array<{id:number;nombre:string;tipo:TipoOrden}>}
export interface OrdenResponse{data:Orden[];total:number;page:number;last_page:number;options:OrdenOptions}
export function listarOrdenes(tipo:TipoOrden,filters:Record<string,string|number>){const q=new URLSearchParams({tipo});Object.entries(filters).forEach(([k,v])=>q.set(k,String(v)));return apiRequest<OrdenResponse>(`/lecturita/mia/logistica/ordenes?${q}`)}
export function prepararOrden(procesoId:number,tipo:TipoOrden){return apiRequest<Orden>(`/lecturita/mia/logistica/ordenes/preparar/${procesoId}?tipo=${tipo}`)}
export function detalleOrden(id:number){return apiRequest<Orden>(`/lecturita/mia/logistica/ordenes/${id}`)}
export function guardarOrden(id:number|null,data:Record<string,unknown>){return apiRequest<void>(`/lecturita/mia/logistica/ordenes${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function accionOrden(id:number,accion:'notificar'|'anular'){return apiRequest<void>(`/lecturita/mia/logistica/ordenes/${id}/${accion}`,{method:'POST'})}
export function imprimirOrden(id:number){return apiDownload(`/lecturita/mia/logistica/ordenes/${id}/imprimir`,`orden_${id}.pdf`)}
