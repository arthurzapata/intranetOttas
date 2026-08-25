import { apiRequest } from '@/services/auth'
export interface Indicador{id:number;nombre:string;total:number;atendidos:number;pendientes:number;porcentaje:number;promedio_minutos?:number}
export interface Resumen{data:Indicador[];totales:{recibidos:number;atendidos:number;pendientes:number};periodo:string}
const base='/lecturita/evan/comercializacion/estadisticas'
export const obtenerResumen=(anio:number,mes:number)=>apiRequest<Resumen>(`${base}?anio=${anio}&mes=${mes}`)
export const urlReporte=(tipo:'totales'|'atendidos'|'pendientes',periodo:string,concepto:number)=>`${base}/reportes/${tipo}?periodo=${periodo}&concepto_id=${concepto}`
export const urlExportacion=(tipo:'tickets'|'tareas'|'interacciones',anio:number)=>`${base}/exportar/${tipo}?anio=${anio}`
