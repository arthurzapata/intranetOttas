import{apiRequest}from'@/services/auth'

export interface Acceso{id:number;usuario_id:number;username:string;nombre_completo?:string;fecha:string;ip:string;imagen?:string}
export interface AccesosPage{data:Acceso[];total:number;current_page:number;last_page:number;per_page:number}
export interface AccesosFilters{criterio:string;ip:string;desde:string;hasta:string;page:number}

const base='/lecturita/sistema/administrador/log-accesos'

export function listarAccesos(filters:AccesosFilters){
  const params=new URLSearchParams()
  if(filters.criterio)params.set('criterio',filters.criterio)
  if(filters.ip)params.set('ip',filters.ip)
  if(filters.desde)params.set('desde',filters.desde)
  if(filters.hasta)params.set('hasta',filters.hasta)
  params.set('page',String(filters.page))
  return apiRequest<AccesosPage>(`${base}?${params}`)
}
