import { apiRequest } from '@/services/auth'
import type { DetalleIngreso, PeriodoAlmacen, TipoIngreso } from '../interfaces/ingresos.interface'
import type { PedidoSalida, SalidaAlmacen, SalidasResponse, SalidaPayload } from '../interfaces/salidas.interface'

const base='/mia/logistica/almacen/salidas'
export function listarSalidas(filters:{criterio:string;tipo_id:string;desde:string;hasta:string;page:number}){const q=new URLSearchParams({criterio:filters.criterio,tipo_documento:filters.tipo_id,desde:filters.desde,hasta:filters.hasta,page:String(filters.page)});return apiRequest<SalidasResponse>(`${base}?${q}`)}
export function obtenerSalida(id:number){return apiRequest<SalidaAlmacen>(`${base}/${id}`)}
export function buscarPedidos(search:string){return apiRequest<PedidoSalida[]>(`${base}/pedidos?search=${encodeURIComponent(search)}`)}
export function guardarSalida(data:SalidaPayload){return apiRequest<void>(base,{method:'POST',body:JSON.stringify(data)})}
export function anularSalida(id:number,almacenId:number,motivo:string){return apiRequest<void>(`${base}/${id}/anular`,{method:'POST',body:JSON.stringify({almacen_id:almacenId,motivo})})}
export function urlNotaSalida(id:number,almacenId:number){return `${base}/${id}/nota?almacen_id=${almacenId}`}
