import { apiRequest } from '@/services/auth'
import type { StockComprometido, StockResponse, StockFilters } from '../interfaces/stock.interface'
const base='/lecturita/mia/logistica/almacen/stock'
export function listarStock(filters:StockFilters){const q=new URLSearchParams({...filters,page:String(filters.page)});return apiRequest<StockResponse>(`${base}?${q}`)}
export function obtenerCompromiso(id:number){return apiRequest<StockComprometido>(`${base}/${id}`)}
export function urlExportarStock(format:'xlsx'|'pdf',filters:Omit<StockFilters,'page'>){return `${base}/exportar/${format}?${new URLSearchParams(filters)}`}
