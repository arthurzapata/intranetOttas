import { apiRequest } from '@/services/auth'

export interface TipoIngreso { id:number; nombre:string }
export interface DetalleIngreso { id:number; item_id:number; item:string; unidad:string; cantidad:number; precio_unitario:number; valor_total:number }
export interface IngresoAlmacen { id:number; almacen_id:number; almacen:string; tipo_id:number; tipo:string; fecha_operacion:string; documento?:string; referencia?:string; observacion?:string; items_count:number; valor_total?:number; anulado:boolean; detalles?:DetalleIngreso[] }
export interface PeriodoAlmacen { id:number; nombre:string; fecha_inicio:string; fecha_fin:string; dia_vigente?:string; abierto:boolean }
export interface IngresosResponse { data:IngresoAlmacen[]; total:number; page:number; last_page:number; tipos:TipoIngreso[]; periodo:PeriodoAlmacen|null }
export interface IngresoPayload { tipo_id:number; fecha_operacion:string; documento:string; referencia:string; observacion:string; detalles:Array<{item_id:number;cantidad:number;precio_unitario:number}> }

const base='/lecturita/mia/logistica/almacen/ingresos'
export function listarIngresos(filters:{criterio:string;tipo_id:string;desde:string;hasta:string;page:number}){const query=new URLSearchParams({criterio:filters.criterio,tipo_documento:filters.tipo_id,desde:filters.desde,hasta:filters.hasta,page:String(filters.page)});return apiRequest<IngresosResponse>(`${base}?${query}`)}
export function obtenerIngreso(id:number){return apiRequest<IngresoAlmacen>(`${base}/${id}`)}
export function guardarIngreso(data:IngresoPayload){return apiRequest<void>(base,{method:'POST',body:JSON.stringify(data)})}
export function anularIngreso(id:number,almacenId:number,motivo:string){return apiRequest<void>(`${base}/${id}/anular`,{method:'POST',body:JSON.stringify({almacen_id:almacenId,motivo})})}
export function urlNotaIngreso(id:number,almacenId:number){return `${base}/${id}/nota?almacen_id=${almacenId}`}
