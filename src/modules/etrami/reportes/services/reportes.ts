import { apiDownload, apiRequest } from '@/services/auth'
import type { CatalogOption, DocumentoSeguimiento } from '../../interfaces/documento'
export interface ReportFilters{criterio:string;tipo_documento_id:number;remitente_id:number;fecha_inicio:string;fecha_fin:string;page:number}
export interface ReportDoc extends DocumentoSeguimiento{remitente?:string|null;instancia_emisora?:string|null}
export interface ReportResponse{data:ReportDoc[];current_page:number;last_page:number;total:number;tipos_documento:CatalogOption[]}
function query(filters:ReportFilters){const q=new URLSearchParams({page:String(filters.page)});Object.entries(filters).forEach(([k,v])=>{if(k!=='page'&&v!==''&&v!==0)q.set(k,String(v))});return q}
export function listarReporte(filters:ReportFilters){return apiRequest<ReportResponse>(`/lecturita/etrami/v2/reportes/documentos?${query(filters)}`)}
export function buscarRemitentesReporte(text:string){return apiRequest<Array<{id:number;text:string}>>(`/lecturita/etrami/v2/reportes/remitentes?criterio=${encodeURIComponent(text)}`)}
export function exportarReporte(format:'excel'|'pdf',filters:ReportFilters){return apiDownload(`/lecturita/etrami/v2/reportes/documentos/${format}?${query(filters)}`,`reporte_documentos.${format==='excel'?'xlsx':'pdf'}`)}
