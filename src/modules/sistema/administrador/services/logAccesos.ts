import type { AccesosPage, AccesosFilters } from '../interfaces/logAccesos.interface'
import{apiRequest}from'@/services/auth'





const base='/sistema/administrador/log-accesos'

export function listarAccesos(filters:AccesosFilters){
  const params=new URLSearchParams()
  if(filters.criterio)params.set('criterio',filters.criterio)
  if(filters.ip)params.set('ip',filters.ip)
  if(filters.desde)params.set('desde',filters.desde)
  if(filters.hasta)params.set('hasta',filters.hasta)
  params.set('page',String(filters.page))
  return apiRequest<AccesosPage>(`${base}?${params}`)
}
