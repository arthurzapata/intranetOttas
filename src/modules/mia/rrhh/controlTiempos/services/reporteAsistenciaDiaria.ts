import { apiDownload, apiRequest } from '@/services/auth'
import type { FiltrosReporteAsistencia, ReporteAsistenciaDiariaResponse } from '../interfaces/reporteAsistenciaDiaria.interface'
const base='/mia/rrhh/controltiempos/reportes/reporte-por-dia'
function query(f:FiltrosReporteAsistencia,page?:number){const q=new URLSearchParams({mes:f.mes,fecha_inicio:f.fecha_inicio,fecha_fin:f.fecha_fin});if(f.datos_persona_id)q.set('datos_persona_id',String(f.datos_persona_id));if(page)q.set('page',String(page));return q}
export const listarReporteAsistenciaDiaria=(f:FiltrosReporteAsistencia,page:number)=>apiRequest<ReporteAsistenciaDiariaResponse>(`${base}?${query(f,page)}`)
export const descargarReporteAsistenciaPdf=(f:FiltrosReporteAsistencia)=>apiDownload(`${base}/pdf?${query(f)}`,'reporte_asistencia_marcaciones.pdf')

