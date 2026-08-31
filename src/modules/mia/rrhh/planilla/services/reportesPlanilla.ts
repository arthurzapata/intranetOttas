import { apiRequest } from '@/services/auth'
import type { FiltrosReporteConcepto, ReporteConceptoResponse } from '../interfaces/reporteConcepto.interface'
import type { FiltrosReporteBoletas, ReporteBoletasResponse } from '../interfaces/reporteBoletas.interface'

const base='/mia/rrhh/planilla/reportes'
function params(filtros:FiltrosReporteConcepto,page:number){const q=new URLSearchParams({periodo:filtros.periodo,page:String(page)});filtros.regimen_ids.forEach(id=>q.append('regimen_ids[]',String(id)));filtros.datos_persona_ids.forEach(id=>q.append('datos_persona_ids[]',String(id)));return q}
export const listarReporteConcepto=(filtros:FiltrosReporteConcepto,page:number)=>apiRequest<ReporteConceptoResponse>(`${base}/reporte-concepto?${params(filtros,page)}`)
export function listarReporteBoletas(filtros:FiltrosReporteBoletas,page:number){const q=new URLSearchParams({periodo:filtros.periodo,page:String(page)});if(filtros.regimen_id)q.set('regimen_id',String(filtros.regimen_id));return apiRequest<ReporteBoletasResponse>(`${base}/reporte-boletas?${q}`)}
