import {apiDownload,apiRequest} from '@/services/auth'
import type {FiltrosReporteCajaChica,FondoReporteCajaChica,RendicionReporteCajaChica,ResultadoReporteCajaChica} from '../interfaces/reporte-caja-chica.interface'
const base='/mia/finanzas/reportes-caja-chica',query=(f:FiltrosReporteCajaChica)=>new URLSearchParams(Object.entries(f).map(([k,v])=>[k,String(v)])).toString()
export const listarFondosReporteCajaChica=()=>apiRequest<FondoReporteCajaChica[]>(`${base}/fondos`)
export const listarRendicionesReporteCajaChica=(fondoId:number)=>apiRequest<RendicionReporteCajaChica[]>(`${base}/fondos/${fondoId}/rendiciones`)
export const generarReporteCajaChica=(f:FiltrosReporteCajaChica)=>apiRequest<ResultadoReporteCajaChica>(`${base}/preview?${query(f)}`)
export const descargarReporteCajaChica=(format:'pdf'|'excel',f:FiltrosReporteCajaChica)=>apiDownload(`${base}/${format}?${query(f)}`,`reporte-caja-chica.${format==='pdf'?'pdf':'xlsx'}`)