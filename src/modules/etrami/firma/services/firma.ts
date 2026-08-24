import { apiDownload, apiRequest } from '@/services/auth'
import type { CatalogOption } from '../../interfaces/documento'
export interface DocumentoFirma{id:number;numero?:string|null;asunto:string;tipo_documento?:CatalogOption|null;archivo?:string|null;archivo_firmado?:string|null;firmado_digitalmente:boolean;estado_firma?:'listo'|'pendiente'|'firmado'|'error'|null;fecha_firma?:string|null;certificado_firmante?:string|null;created_at:string}
export interface FirmaResponse{data:DocumentoFirma[];current_page:number;last_page:number;total:number;firma_habilitada:boolean;instancia?:CatalogOption|null}
export function listarFirma(criterio:string,estado:string,page:number){return apiRequest<FirmaResponse>(`/lecturita/etrami/v2/firma/documentos?criterio=${encodeURIComponent(criterio)}&estado=${encodeURIComponent(estado)}&page=${page}`)}
export function prepararFirma(id:number,options:{signatureReason:number;signatureStyle:number;stampTextSize:number}){return apiRequest<{launch_url:string;message?:string}>(`/lecturita/etrami/v2/firma/documentos/${id}/preparar`,{method:'POST',body:JSON.stringify(options)})}
export function descargarFirmado(id:number){return apiDownload(`/lecturita/etrami/v2/firma/documentos/${id}/descargar`,`documento_firmado_${id}.pdf`)}
