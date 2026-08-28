import { apiRequest } from '@/services/auth'
import type { TiposTransaccionResponse, TipoTransaccionPayload } from '../interfaces/tiposTransaccion.interface'
const base='/lecturita/mia/logistica/almacen/tipos-transaccion'
export function listarTiposTransaccion(criterio:string,page:number){return apiRequest<TiposTransaccionResponse>(`${base}?criterio=${encodeURIComponent(criterio)}&page=${page}`)}
export function guardarTipoTransaccion(id:number|null,data:TipoTransaccionPayload){return apiRequest<void>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
