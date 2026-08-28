import { apiRequest } from '@/services/auth'
import type { CatalogOption, SeguimientoDetalle, SeguimientoResponse } from '../../interfaces/documento'
import type { SeguimientoFilters } from '../interfaces/flujo.interface'


export function buscarSeguimiento(filters:SeguimientoFilters){
  const query=new URLSearchParams({page:String(filters.page)})
  Object.entries(filters).forEach(([key,value])=>{if(key!=='page'&&value!==''&&value!==0)query.set(key,String(value))})
  return apiRequest<SeguimientoResponse>(`/etrami/v2/flujo/seguimiento?${query}`)
}
export function detallarSeguimiento(documentoId:number){return apiRequest<SeguimientoDetalle>(`/etrami/v2/flujo/documentos/${documentoId}`)}
export function obtenerOpcionesFlujo(){return apiRequest<{contexto:SeguimientoResponse['contexto'];tipos_documento:CatalogOption[]}>('/etrami/v2/flujo/opciones')}
