import { apiDownload,apiRequest } from '@/services/auth'
import type { CatalogoSimple,DocumentoProveedor,DocumentoProveedorFiltros,DocumentoProveedorOpciones,DocumentoProveedorPayload,DocumentoProveedorResponse,ProveedorFinanzas } from '../interfaces/documento-proveedor.interface'
const base='/mia/finanzas/proveedores/documentos'
export function listarDocumentosProveedor(f:DocumentoProveedorFiltros,page=1){const q=new URLSearchParams({page:String(page)});Object.entries(f).forEach(([k,v])=>{if(v)q.set(k,v)});return apiRequest<DocumentoProveedorResponse>(`${base}?${q}`)}
export const opcionesDocumentoProveedor=(fecha='')=>apiRequest<DocumentoProveedorOpciones>(`${base}/opciones?fecha=${fecha}`)
export const buscarProveedorDocumento=(q:string)=>apiRequest<ProveedorFinanzas[]>(`${base}/proveedores?q=${encodeURIComponent(q)}`)
export const catalogosDetraccionDocumento=(fecha:string)=>apiRequest<CatalogoSimple[]>(`${base}/catalogo-detracciones?fecha=${fecha}`)
export const obtenerDocumentoProveedor=(id:number)=>apiRequest<DocumentoProveedor>(`${base}/${id}`)
export const guardarDocumentoProveedor=(id:number|null,data:DocumentoProveedorPayload)=>apiRequest<DocumentoProveedor>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})
export const cambiarEstadoDocumentoProveedor=(id:number)=>apiRequest<void>(`${base}/${id}/estado`,{method:'PATCH',body:JSON.stringify({})})
export function adjuntarArchivoDocumento(id:number,tipo:string,archivo:File,principal:boolean){const data=new FormData();data.append('tipo_archivo',tipo);data.append('archivo',archivo);data.append('principal',principal?'1':'0');return apiRequest<void>(`${base}/${id}/archivos`,{method:'POST',body:data})}
export const descargarArchivoDocumento=(id:number,nombre:string)=>apiDownload(`${base}/archivos/${id}`,nombre)
export const eliminarArchivoDocumento=(id:number)=>apiRequest<void>(`${base}/archivos/${id}`,{method:'DELETE'})
