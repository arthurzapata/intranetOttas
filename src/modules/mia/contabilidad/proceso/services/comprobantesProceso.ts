import { apiRequest } from '@/services/auth'
import type { ComprobantesProcesoResponse, FiltrosComprobantesProceso, TipoComprobanteProceso } from '../interfaces/comprobantesProceso.interface'
const base='/mia/contabilidad/proceso/comprobantes'
export const obtenerOpcionesComprobantes=()=>apiRequest<ComprobantesProcesoResponse>(base)
export const obtenerDocumentosComprobante=(id:number)=>apiRequest<TipoComprobanteProceso[]>(`${base}/tipos-documento?tipo_comprobante_id=${id}`)
export const consultarComprobantes=(filtros:FiltrosComprobantesProceso)=>apiRequest<ComprobantesProcesoResponse>(base,{method:'POST',body:JSON.stringify(filtros)})
