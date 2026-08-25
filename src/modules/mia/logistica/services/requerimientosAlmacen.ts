import { apiDownload, apiRequest } from '@/services/auth'
export interface MaterialAlmacen{id:number;nombre:string;unidad:string;grupo?:string;saldo:number}
export interface RequerimientoLinea{id?:number;item_id:number;item?:string;unidad?:string;saldo?:number;cantidad:number;glosa:string;centro_costos_id:number;actividad_presupuestal_id:number;atendido?:number}
export interface RequerimientoAlmacen{id:number;informacion?:string;prioridad:'n'|'u'|'m';inversion_id:number;fecha_registro:string;estado:string;estado_label?:string;detalles:RequerimientoLinea[]}
export interface RequerimientoOptions{materiales:MaterialAlmacen[];centros_costos:Array<{id:number;nombre:string}>;actividades:Array<{id:number;nombre:string}>}
export interface RequerimientoResponse{data:RequerimientoAlmacen[];total:number;page:number;last_page:number}
export function listarRequerimientos(filters:Record<string,string|number>){const q=new URLSearchParams();Object.entries(filters).forEach(([k,v])=>q.set(k,String(v)));return apiRequest<RequerimientoResponse>(`/lecturita/mia/logistica/requerimientos-almacen?${q}`)}
export function opcionesRequerimiento(criterio=''){return apiRequest<RequerimientoOptions>(`/lecturita/mia/logistica/requerimientos-almacen/opciones?criterio=${encodeURIComponent(criterio)}`)}
export function detalleRequerimiento(id:number){return apiRequest<RequerimientoAlmacen>(`/lecturita/mia/logistica/requerimientos-almacen/${id}`)}
export function guardarRequerimiento(id:number|null,data:Record<string,unknown>){return apiRequest<void>(`/lecturita/mia/logistica/requerimientos-almacen${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function imprimirRequerimiento(id:number){return apiDownload(`/lecturita/mia/logistica/requerimientos-almacen/${id}/imprimir`,`requerimiento_almacen_${id}.pdf`)}
