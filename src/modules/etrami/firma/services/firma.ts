import { apiDownload, apiRequest } from '@/services/auth'
import type { CatalogOption } from '../../interfaces/documento'
import type { FirmaResponse } from '../interfaces/firma.interface'


export function listarFirma(criterio:string,estado:string,page:number){return apiRequest<FirmaResponse>(`/etrami/v2/firma/documentos?criterio=${encodeURIComponent(criterio)}&estado=${encodeURIComponent(estado)}&page=${page}`)}
export function prepararFirma(id:number,options:{signatureReason:number;signatureStyle:number;stampTextSize:number}){return apiRequest<{launch_url:string;message?:string}>(`/etrami/v2/firma/documentos/${id}/preparar`,{method:'POST',body:JSON.stringify(options)})}
export function descargarFirmado(id:number){return apiDownload(`/etrami/v2/firma/documentos/${id}/descargar`,`documento_firmado_${id}.pdf`)}
