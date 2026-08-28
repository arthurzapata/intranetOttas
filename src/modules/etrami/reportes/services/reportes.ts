import { apiDownload, apiRequest } from '@/services/auth'
import type { CatalogOption, DocumentoSeguimiento } from '../../interfaces/documento'
import type { ReportFilters, ReportResponse } from '../interfaces/reportes.interface'



function query(filters:ReportFilters){const q=new URLSearchParams({page:String(filters.page)});Object.entries(filters).forEach(([k,v])=>{if(k!=='page'&&v!==''&&v!==0)q.set(k,String(v))});return q}
export function listarReporte(filters:ReportFilters){return apiRequest<ReportResponse>(`/etrami/v2/reportes/documentos?${query(filters)}`)}
export function buscarRemitentesReporte(text:string){return apiRequest<Array<{id:number;text:string}>>(`/etrami/v2/reportes/remitentes?criterio=${encodeURIComponent(text)}`)}
export function exportarReporte(format:'excel'|'pdf',filters:ReportFilters){return apiDownload(`/etrami/v2/reportes/documentos/${format}?${query(filters)}`,`reporte_documentos.${format==='excel'?'xlsx':'pdf'}`)}
