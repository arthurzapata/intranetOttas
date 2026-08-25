import { apiRequest } from '@/services/auth'
export interface Option{id:number;nombre:string}
export interface Adjunto{id:number;tipo?:string;nombre_original:string;tamano_bytes?:number}
export interface Relacion{id:number;tipo:string;contenido?:string;documento:{id:number;numero_documento:string;tipo?:string;titulo:string;estado?:string}}
export interface DocumentoNormativo{id:number;tipo_documento_id:number;tipo?:string;oficina_id:number;oficina?:string;estado_id:number;estado?:string;estado_color?:string;numero_documento:string;titulo:string;fecha_aprobacion:string;fecha_vigencia?:string;contenido?:string;adjuntos?:Adjunto[];relaciones_origen?:Relacion[];relaciones_destino?:Relacion[]}
export interface Options{tipos:Option[];estados:Option[];oficinas:Option[];tipos_relacion:Option[]}
export interface Page{data:DocumentoNormativo[];total:number;page:number;last_page:number;options:Options}
const qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarDocumentos=(f:Record<string,string|number>)=>apiRequest<Page>(`/lecturita/mat/documentos-normativos?${qs(f)}`)
export const detalleDocumento=(id:number)=>apiRequest<DocumentoNormativo>(`/lecturita/mat/documentos-normativos/${id}`)
export const registrarDocumento=(data:FormData)=>apiRequest<{id:number}>('/lecturita/mat/documentos-normativos',{method:'POST',body:data})
export const obtenerCorrelativo=(tipo:number|string,oficina:number|string)=>apiRequest<{numero:string}>(`/lecturita/mat/documentos-normativos/correlativo?tipo_documento_id=${tipo}&oficina_id=${oficina}`)
