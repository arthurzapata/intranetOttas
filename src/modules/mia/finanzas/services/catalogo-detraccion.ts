import { apiRequest } from '@/services/auth'
import type { CatalogoDetraccion,CatalogoDetraccionPayload,CatalogoDetraccionResponse } from '../interfaces/catalogo-detraccion.interface'
const base='/mia/finanzas/catalogo-detracciones'
export function listarCatalogoDetracciones(buscar='',estado='',page=1){const q=new URLSearchParams({buscar,estado,page:String(page)});return apiRequest<CatalogoDetraccionResponse>(`${base}?${q}`)}
export const obtenerCatalogoDetraccion=(id:number)=>apiRequest<CatalogoDetraccion>(`${base}/${id}`)
export const guardarCatalogoDetraccion=(id:number|null,data:CatalogoDetraccionPayload)=>apiRequest<CatalogoDetraccion>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})
export const cambiarEstadoCatalogoDetraccion=(id:number)=>apiRequest<void>(`${base}/${id}/estado`,{method:'PATCH',body:JSON.stringify({})})
