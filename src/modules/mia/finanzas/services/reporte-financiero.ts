import { apiDownload, apiRequest } from '@/services/auth'
import type { ReporteFinancieroClave, ReporteFinancieroFiltros, ReporteFinancieroOpciones, ReporteFinancieroPreview } from '../interfaces/reporte-financiero.interface'
const base='/mia/finanzas/reportes'
const query=(f:ReporteFinancieroFiltros)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v)q.set(k,v)});return q.toString()}
export const obtenerOpcionesReporteFinanciero=(key:ReporteFinancieroClave)=>apiRequest<ReporteFinancieroOpciones>(`${base}/${key}/opciones`)
export const previsualizarReporteFinanciero=(key:ReporteFinancieroClave,f:ReporteFinancieroFiltros)=>apiRequest<ReporteFinancieroPreview>(`${base}/${key}/preview?${query(f)}`)
export const descargarReporteFinanciero=(key:ReporteFinancieroClave,format:'pdf'|'excel',f:ReporteFinancieroFiltros)=>apiDownload(`${base}/${key}/${format}?${query(f)}`,`${key}.${format==='pdf'?'pdf':'xlsx'}`)
