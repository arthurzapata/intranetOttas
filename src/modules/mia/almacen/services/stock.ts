import { apiRequest } from '@/services/auth'
export interface CatalogoStock { id:number; nombre:string }
export interface StockComprometido { id:number; item_id:number; item:string; unidad:string; pedido_id:number; pedido:string; almacen_id:number; almacen:string; stock_fisico:number; cantidad_comprometida:number; cantidad_consumida:number; stock_comprometido_pendiente:number; disponible:number; estado:number; estado_nombre:string; fecha:string; solicitante?:string; area?:string }
export interface StockResponse { data:StockComprometido[]; total:number; page:number; last_page:number; almacenes:CatalogoStock[]; estados:Record<string,string>; resumen:{fisico:number;comprometido:number;disponible:number;alertas:number} }
export interface StockFilters { almacen:string;estado:string;pedido:string;fecha_desde:string;fecha_hasta:string;page:number }
const base='/lecturita/mia/logistica/almacen/stock'
export function listarStock(filters:StockFilters){const q=new URLSearchParams({...filters,page:String(filters.page)});return apiRequest<StockResponse>(`${base}?${q}`)}
export function obtenerCompromiso(id:number){return apiRequest<StockComprometido>(`${base}/${id}`)}
export function urlExportarStock(format:'xlsx'|'pdf',filters:Omit<StockFilters,'page'>){return `${base}/exportar/${format}?${new URLSearchParams(filters)}`}
