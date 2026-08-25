import { apiRequest } from '@/services/auth'
export interface CatalogoSaldo { id:number; nombre:string; por_defecto?:boolean }
export interface SaldoItem { item_id:number; descripcion:string; unidad:string; stock:number; valor_total:number; precio_medio:number; tipo_codigo:string; tipo:string; ultimo_mov:'INGRESO'|'SALIDA'|string; fecha:string }
export interface FichaItem { item_id:number; descripcion:string; codigo?:string; unidad:string; tipo:string; almacen:string; stock:number; valor_total:number; precio_medio:number; consumo_medio:number; stock_minimo?:number; stock_maximo?:number; ubicacion?:string }
export interface SaldosResponse { data:SaldoItem[]; total:number; page:number; last_page:number; almacenes:CatalogoSaldo[]; periodos:CatalogoSaldo[]; tipos:Record<string,string>; almacen_default_id?:number; resumen:{items:number;unidades:number;valor_total:number;sin_stock:number} }
export interface SaldoFilters { almacen:string;tipo:string;periodo:string;item:string;page:number }
const base='/lecturita/mia/logistica/almacen/saldos'
export function listarSaldos(filters:SaldoFilters){const q=new URLSearchParams({...filters,page:String(filters.page)});return apiRequest<SaldosResponse>(`${base}?${q}`)}
export function obtenerFicha(itemId:number,almacen:string,periodo:string){return apiRequest<FichaItem>(`${base}/items/${itemId}/ficha?almacen=${almacen}&periodo=${periodo}`)}
export function urlKardex(itemId:number,almacen:string,periodo:string){return `${base}/items/${itemId}/kardex?almacen=${almacen}&periodo=${periodo}`}
export function urlExportarSaldos(format:'xlsx'|'pdf',filters:Omit<SaldoFilters,'page'>){return `${base}/exportar/${format}?${new URLSearchParams(filters)}`}
