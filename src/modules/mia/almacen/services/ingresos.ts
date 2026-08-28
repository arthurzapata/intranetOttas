import { apiRequest } from '@/services/auth'
import type { IngresoAlmacen, IngresosResponse, IngresoPayload } from '../interfaces/ingresos.interface'


const base='/lecturita/mia/logistica/almacen/ingresos'
export function listarIngresos(filters:{criterio:string;tipo_id:string;desde:string;hasta:string;page:number}){const query=new URLSearchParams({criterio:filters.criterio,tipo_documento:filters.tipo_id,desde:filters.desde,hasta:filters.hasta,page:String(filters.page)});return apiRequest<IngresosResponse>(`${base}?${query}`)}
export function obtenerIngreso(id:number){return apiRequest<IngresoAlmacen>(`${base}/${id}`)}
export function guardarIngreso(data:IngresoPayload){return apiRequest<void>(base,{method:'POST',body:JSON.stringify(data)})}
export function anularIngreso(id:number,almacenId:number,motivo:string){return apiRequest<void>(`${base}/${id}/anular`,{method:'POST',body:JSON.stringify({almacen_id:almacenId,motivo})})}
export function urlNotaIngreso(id:number,almacenId:number){return `${base}/${id}/nota?almacen_id=${almacenId}`}
