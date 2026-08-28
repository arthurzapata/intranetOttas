import { apiRequest } from '@/services/auth'
import type { Resumen } from '../interfaces/estadisticas.interface'


const base='/lecturita/evan/comercializacion/estadisticas'
export const obtenerResumen=(anio:number,mes:number)=>apiRequest<Resumen>(`${base}?anio=${anio}&mes=${mes}`)
export const urlReporte=(tipo:'totales'|'atendidos'|'pendientes',periodo:string,concepto:number)=>`${base}/reportes/${tipo}?periodo=${periodo}&concepto_id=${concepto}`
export const urlExportacion=(tipo:'tickets'|'tareas'|'interacciones',anio:number)=>`${base}/exportar/${tipo}?anio=${anio}`
