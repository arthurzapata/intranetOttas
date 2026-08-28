import type { Configuracion, ConfiguracionPayload, ConfiguracionPage, ConfiguracionFilters } from '../interfaces/configuracionSistema.interface'
import{apiRequest}from'@/services/auth'







const base='/sistema/configuraciones'
export function listarConfiguraciones(filters:ConfiguracionFilters){const params=new URLSearchParams({page:String(filters.page)});if(filters.criterio)params.set('criterio',filters.criterio);if(filters.categoria)params.set('categoria',filters.categoria);return apiRequest<ConfiguracionPage>(`${base}?${params}`)}
export const crearConfiguracion=(data:ConfiguracionPayload)=>apiRequest<Configuracion>(base,{method:'POST',body:JSON.stringify(data)})
export const actualizarConfiguracion=(id:number,data:ConfiguracionPayload)=>apiRequest<Configuracion>(`${base}/${id}`,{method:'PUT',body:JSON.stringify(data)})
export const eliminarConfiguracion=(id:number)=>apiRequest<void>(`${base}/${id}`,{method:'DELETE'})
