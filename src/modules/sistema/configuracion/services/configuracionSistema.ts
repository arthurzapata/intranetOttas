import{apiRequest}from'@/services/auth'

export type TipoDato='string'|'integer'|'boolean'|'decimal'|'json'
export interface Configuracion{id:number;codigo:string;valor:string;descripcion?:string;tipo_dato:TipoDato;categoria?:string;es_editable:boolean;orden:number}
export interface ConfiguracionPayload{codigo:string;valor:string;descripcion:string;tipo_dato:TipoDato;categoria:string;es_editable:boolean;orden:number}
export interface ConfiguracionPage{data:Configuracion[];total:number;current_page:number;last_page:number;categorias:string[]}
export interface ConfiguracionFilters{criterio:string;categoria:string;page:number}

const base='/lecturita/sistema/configuraciones'
export function listarConfiguraciones(filters:ConfiguracionFilters){const params=new URLSearchParams({page:String(filters.page)});if(filters.criterio)params.set('criterio',filters.criterio);if(filters.categoria)params.set('categoria',filters.categoria);return apiRequest<ConfiguracionPage>(`${base}?${params}`)}
export const crearConfiguracion=(data:ConfiguracionPayload)=>apiRequest<Configuracion>(base,{method:'POST',body:JSON.stringify(data)})
export const actualizarConfiguracion=(id:number,data:ConfiguracionPayload)=>apiRequest<Configuracion>(`${base}/${id}`,{method:'PUT',body:JSON.stringify(data)})
export const eliminarConfiguracion=(id:number)=>apiRequest<void>(`${base}/${id}`,{method:'DELETE'})
