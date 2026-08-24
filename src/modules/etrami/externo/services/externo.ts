import { apiRequest } from '@/services/auth'
import type { CatalogOption } from '../../interfaces/documento'
export interface RemitenteExterno{id:number;tipo:1|2;nombre?:string;apellido_paterno?:string;apellido_materno?:string;dni?:string;razon_social?:string;ruc?:string;celular:string;telefono_fijo?:string;email:string;documentos_count?:number}
export interface DocumentoExterno{id:number;remitente_id?:number;tipo_documento_id?:number;numero?:string;asunto:string;archivo?:string;observacion?:string;created_at:string;nombre?:string;apellido_paterno?:string;apellido_materno?:string;dni?:string;ruc?:string;razon_social?:string;celular?:string;email?:string;tipo_documento?:CatalogOption;remitente?:RemitenteExterno}
export interface Page<T>{data:T[];current_page:number;last_page:number;total:number}
export function listarRemitentes(criterio:string,page:number){return apiRequest<Page<RemitenteExterno>>(`/lecturita/etrami/v2/externo/remitentes?criterio=${encodeURIComponent(criterio)}&page=${page}`)}
export function guardarRemitente(id:number|null,data:Omit<RemitenteExterno,'id'|'documentos_count'>){return apiRequest<{id:number}>(`/lecturita/etrami/v2/externo/remitentes${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarRemitente(id:number){return apiRequest<void>(`/lecturita/etrami/v2/externo/remitentes/${id}`,{method:'DELETE'})}
export function opcionesDocumentoExterno(){return apiRequest<{tipos_documento:CatalogOption[]}>('/lecturita/etrami/v2/externo/opciones')}
export function registrarDocumentoExterno(remitenteId:number,data:FormData){return apiRequest<void>(`/lecturita/etrami/v2/externo/remitentes/${remitenteId}/documentos`,{method:'POST',body:data})}
export function listarPendientesExternos(page:number){return apiRequest<Page<DocumentoExterno>&{tipos_documento:CatalogOption[];contexto?:{instancia_activa?:CatalogOption}}>(`/lecturita/etrami/v2/externo/pendientes?page=${page}`)}
export function validarExterno(id:number,data:{tipo_documento_id:number;numero:string;asunto:string;observacion:string;ruc?:string;razon_social?:string;apellido_paterno?:string;apellido_materno?:string;nombre?:string;dni?:string;celular?:string;email?:string}){return apiRequest<void>(`/lecturita/etrami/v2/externo/documentos/${id}/validar`,{method:'POST',body:JSON.stringify(data)})}
