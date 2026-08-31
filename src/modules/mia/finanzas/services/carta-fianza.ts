import { apiRequest } from '@/services/auth'
import type { CartaFianza, CartaFianzaFiltros, CartaFianzaOperacion, CartaFianzaPayload, CartaFianzaResponse } from '../interfaces/carta-fianza.interface'
const base='/mia/finanzas/carta-fianza'
export function listarCartasFianza(f:CartaFianzaFiltros,page=1){const q=new URLSearchParams({page:String(page)});Object.entries(f).forEach(([k,v])=>{if(v)q.set(k,String(v))});return apiRequest<CartaFianzaResponse>(`${base}?${q}`)}
export const obtenerCartaFianza=(id:number)=>apiRequest<CartaFianza>(`${base}/${id}`)
export const guardarCartaFianza=(id:number|null,data:CartaFianzaPayload)=>apiRequest<CartaFianza>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})
export const activarCartaFianza=(id:number)=>apiRequest<void>(`${base}/${id}/activar`,{method:'PATCH',body:JSON.stringify({})})
export function operarCartaFianza(id:number,data:CartaFianzaOperacion){const form=new FormData();Object.entries(data).forEach(([k,v])=>{if(v!==undefined&&v!=='')form.append(k,v instanceof File?v:String(v))});return apiRequest<void>(`${base}/${id}/operacion`,{method:'POST',body:form})}
export function adjuntarDocumento(id:number,data:{archivo:File;tipo:string;descripcion:string}){const form=new FormData();form.append('archivo',data.archivo);form.append('tipo',data.tipo);form.append('descripcion',data.descripcion);return apiRequest<void>(`${base}/${id}/documentos`,{method:'POST',body:form})}
export const eliminarDocumentoCarta=(id:number,documentoId:number)=>apiRequest<void>(`${base}/${id}/documentos/${documentoId}`,{method:'DELETE'})
