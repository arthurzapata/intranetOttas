import {apiRequest} from '@/services/auth'
import type {TipoFondoCajaChica,TipoFondoPayload,TiposFondoResponse} from '../interfaces/tipo-fondo-caja-chica.interface'
const base='/mia/finanzas/tipos-fondo-caja-chica'
export const listarTiposFondo=(buscar='',page=1)=>apiRequest<TiposFondoResponse>(`${base}?buscar=${encodeURIComponent(buscar)}&page=${page}`)
export const obtenerTipoFondo=(id:number)=>apiRequest<TipoFondoCajaChica>(`${base}/${id}`)
export const guardarTipoFondo=(id:number|null,data:TipoFondoPayload)=>apiRequest<TipoFondoCajaChica>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})
export const cambiarEstadoTipoFondo=(id:number)=>apiRequest<void>(`${base}/${id}/estado`,{method:'POST'})