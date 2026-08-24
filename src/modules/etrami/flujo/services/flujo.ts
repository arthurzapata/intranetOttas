import { apiRequest } from '@/services/auth'
import type { CatalogOption, SeguimientoDetalle, SeguimientoResponse } from '../../interfaces/documento'

export interface SeguimientoFilters { filtro_documento:string; filtro_remitente:string; tipo_documento_id:number; page:number }
export function buscarSeguimiento(filters:SeguimientoFilters){
  const query=new URLSearchParams({page:String(filters.page)})
  Object.entries(filters).forEach(([key,value])=>{if(key!=='page'&&value!==''&&value!==0)query.set(key,String(value))})
  return apiRequest<SeguimientoResponse>(`/lecturita/etrami/v2/flujo/seguimiento?${query}`)
}
export function detallarSeguimiento(documentoId:number){return apiRequest<SeguimientoDetalle>(`/lecturita/etrami/v2/flujo/documentos/${documentoId}`)}
export function obtenerOpcionesFlujo(){return apiRequest<{contexto:SeguimientoResponse['contexto'];tipos_documento:CatalogOption[]}>('/lecturita/etrami/v2/flujo/opciones')}
