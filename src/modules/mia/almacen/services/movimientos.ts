import { apiRequest } from '@/services/auth'
import type { CatalogoSaldo } from '../interfaces/saldos.interface'
import type { ItemOption, MovimientoItem, MovimientosResponse } from '../interfaces/movimientos.interface'
const base='/lecturita/mia/logistica/almacen/movimientos'
export function listarMovimientos(filters:{almacen:string;desde:string;hasta:string;items:number[];page:number}){const q=new URLSearchParams({almacen:filters.almacen,desde:filters.desde,hasta:filters.hasta,page:String(filters.page)});filters.items.forEach(id=>q.append('items[]',String(id)));return apiRequest<MovimientosResponse>(`${base}?${q}`)}
export function buscarItems(search:string){return apiRequest<ItemOption[]>(`${base}/items?search=${encodeURIComponent(search)}`)}
export function obtenerDetalle(id:number,almacenId:number){return apiRequest<MovimientoItem[]>(`${base}/${id}/detalle?almacen=${almacenId}`)}
export function urlReporteMovimientos(filters:{almacen:string;desde:string;hasta:string;items:number[]}){const q=new URLSearchParams({almacen:filters.almacen,desde:filters.desde,hasta:filters.hasta});filters.items.forEach(id=>q.append('items[]',String(id)));return `${base}/exportar/pdf?${q}`}
