import { apiRequest } from '@/services/auth'
export interface ItemReporteAlmacen { almacen:string; codigo_avalon:string; descripcion:string; unidad_medida:string; saldo:number; valor_total:number }
export interface ReporteAlmacenResponse { anio:number; items:ItemReporteAlmacen[]; total_items:number; total_cantidad:number; total_valorizado:number }
const base='/lecturita/mia/utilitarios/almacen'
export function obtenerReporteAlmacen(anio:number){return apiRequest<ReporteAlmacenResponse>(`${base}/${anio}`)}
export function urlPdfReporteAlmacen(anio:number){return `/mia/utilitario/almacen/${anio}`}
