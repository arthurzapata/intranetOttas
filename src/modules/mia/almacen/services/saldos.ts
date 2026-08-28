import { apiRequest } from '@/services/auth'
import type { FichaItem, SaldosResponse, SaldoFilters } from '../interfaces/saldos.interface'
const base='/mia/logistica/almacen/saldos'
export function listarSaldos(filters:SaldoFilters){const q=new URLSearchParams({...filters,page:String(filters.page)});return apiRequest<SaldosResponse>(`${base}?${q}`)}
export function obtenerFicha(itemId:number,almacen:string,periodo:string){return apiRequest<FichaItem>(`${base}/items/${itemId}/ficha?almacen=${almacen}&periodo=${periodo}`)}
export function urlKardex(itemId:number,almacen:string,periodo:string){return `${base}/items/${itemId}/kardex?almacen=${almacen}&periodo=${periodo}`}
export function urlExportarSaldos(format:'xlsx'|'pdf',filters:Omit<SaldoFilters,'page'>){return `${base}/exportar/${format}?${new URLSearchParams(filters)}`}
