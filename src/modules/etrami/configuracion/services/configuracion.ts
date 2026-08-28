import { apiRequest } from '@/services/auth'
import type { CatalogOption, CargoOption } from '../../interfaces/documento'
import type { TipoDocumentoConfig, Correlativo, Page } from '../interfaces/configuracion.interface'



export function listarTipos(criterio:string,page:number){return apiRequest<Page<TipoDocumentoConfig>>(`/etrami/v2/configuracion/tipos-documento?criterio=${encodeURIComponent(criterio)}&page=${page}`)}
export function guardarTipo(id:number|null,data:Omit<TipoDocumentoConfig,'id'>){return apiRequest<void>(`/etrami/v2/configuracion/tipos-documento${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function alternarTipo(id:number){return apiRequest<void>(`/etrami/v2/configuracion/tipos-documento/${id}/estado`,{method:'PATCH',body:JSON.stringify({})})}
export function opcionesCorrelativos(){return apiRequest<{tipos_documento:CatalogOption[];instancias:CatalogOption[]}>('/etrami/v2/configuracion/correlativos/opciones')}
export function cargosCorrelativo(instanciaId:number){return apiRequest<CargoOption[]>(`/etrami/v2/configuracion/correlativos/instancias/${instanciaId}/cargos`)}
export function listarCorrelativos(filters:{tipo_documento_id:number;instancia_id:number;cargo_id:number;page:number}){const q=new URLSearchParams({page:String(filters.page)});Object.entries(filters).forEach(([k,v])=>{if(k!=='page'&&v)q.set(k,String(v))});return apiRequest<Page<Correlativo>>(`/etrami/v2/configuracion/correlativos?${q}`)}
export function guardarCorrelativo(id:number|null,data:{tipo_documento_id:number;instancia_id:number;cargo_id:number;numero:number}){return apiRequest<void>(`/etrami/v2/configuracion/correlativos${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function resetearCorrelativo(id:number,numero:number){return apiRequest<void>(`/etrami/v2/configuracion/correlativos/${id}/resetear`,{method:'POST',body:JSON.stringify({numero})})}
export function eliminarCorrelativo(id:number){return apiRequest<void>(`/etrami/v2/configuracion/correlativos/${id}`,{method:'DELETE'})}
