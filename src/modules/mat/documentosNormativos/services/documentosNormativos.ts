import { apiRequest } from '@/services/auth'
import type { DocumentoNormativo, Page } from '../interfaces/documentosNormativos.interface'






const qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarDocumentos=(f:Record<string,string|number>)=>apiRequest<Page>(`/lecturita/mat/documentos-normativos?${qs(f)}`)
export const detalleDocumento=(id:number)=>apiRequest<DocumentoNormativo>(`/lecturita/mat/documentos-normativos/${id}`)
export const registrarDocumento=(data:FormData)=>apiRequest<{id:number}>('/lecturita/mat/documentos-normativos',{method:'POST',body:data})
export const obtenerCorrelativo=(tipo:number|string,oficina:number|string)=>apiRequest<{numero:string}>(`/lecturita/mat/documentos-normativos/correlativo?tipo_documento_id=${tipo}&oficina_id=${oficina}`)
