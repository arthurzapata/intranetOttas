import type { ErrorPage, ErrorFilters } from '../interfaces/erroresSistema.interface'
import{apiRequest}from'@/services/auth'







const base='/lecturita/sistema/administrador/errores'
export function listarErrores(filters:ErrorFilters){const params=new URLSearchParams();Object.entries(filters).forEach(([key,value])=>{if(value!==''&&value!==0)params.set(key,String(value))});return apiRequest<ErrorPage>(`${base}?${params}`)}
