import { apiRequest } from '@/services/auth'
import type { CatalogOption } from '../../interfaces/documento'
import type { RemitenteExterno, DocumentoExterno, Page } from '../interfaces/externo.interface'



export function listarRemitentes(criterio:string,page:number){return apiRequest<Page<RemitenteExterno>>(`/etrami/v2/externo/remitentes?criterio=${encodeURIComponent(criterio)}&page=${page}`)}
export function guardarRemitente(id:number|null,data:Omit<RemitenteExterno,'id'|'documentos_count'>){return apiRequest<{id:number}>(`/etrami/v2/externo/remitentes${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarRemitente(id:number){return apiRequest<void>(`/etrami/v2/externo/remitentes/${id}`,{method:'DELETE'})}
export function opcionesDocumentoExterno(){return apiRequest<{tipos_documento:CatalogOption[]}>('/etrami/v2/externo/opciones')}
export function registrarDocumentoExterno(remitenteId:number,data:FormData){return apiRequest<void>(`/etrami/v2/externo/remitentes/${remitenteId}/documentos`,{method:'POST',body:data})}
export function listarPendientesExternos(page:number){return apiRequest<Page<DocumentoExterno>&{tipos_documento:CatalogOption[];contexto?:{instancia_activa?:CatalogOption}}>(`/etrami/v2/externo/pendientes?page=${page}`)}
export function validarExterno(id:number,data:{tipo_documento_id:number;numero:string;asunto:string;observacion:string;ruc?:string;razon_social?:string;apellido_paterno?:string;apellido_materno?:string;nombre?:string;dni?:string;celular?:string;email?:string}){return apiRequest<void>(`/etrami/v2/externo/documentos/${id}/validar`,{method:'POST',body:JSON.stringify(data)})}
