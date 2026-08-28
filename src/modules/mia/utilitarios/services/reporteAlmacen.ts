import { apiRequest } from '@/services/auth'
import type { ReporteAlmacenResponse } from '../interfaces/reporteAlmacen.interface'
const base='/mia/utilitarios/almacen'
export function obtenerReporteAlmacen(anio:number){return apiRequest<ReporteAlmacenResponse>(`${base}/${anio}`)}
export function urlPdfReporteAlmacen(anio:number){return `/mia/utilitario/almacen/${anio}`}
