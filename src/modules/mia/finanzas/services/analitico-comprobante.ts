import { apiDownload,apiRequest } from '@/services/auth'
import type { AnaliticoFiltros,ReporteAnalitico,TipoComprobanteAnalitico } from '../interfaces/analitico-comprobante.interface'
const base='/mia/finanzas/reportes/analitico-comprobantes'
export const listarTiposComprobanteAnalitico=()=>apiRequest<TipoComprobanteAnalitico[]>(`${base}/tipos-comprobante`)
export const generarAnaliticoComprobantes=(data:AnaliticoFiltros)=>apiRequest<ReporteAnalitico>(`${base}/generar`,{method:'POST',body:JSON.stringify(data)})
function query(data:AnaliticoFiltros){return new URLSearchParams(Object.entries(data).map(([k,v])=>[k,String(v)])).toString()}
export const descargarAnaliticoPdf=(data:AnaliticoFiltros)=>apiDownload(`${base}/pdf?${query(data)}`,'analitico_comprobantes.pdf')
export const descargarAnaliticoExcel=(data:AnaliticoFiltros)=>apiDownload(`${base}/excel?${query(data)}`,'analitico_comprobantes.xlsx')
