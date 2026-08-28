import { apiRequest } from '@/services/auth'
import type { AsientoTipo, AsientoTipoDetalle, AsientoTipoDetallePayload, AsientoTipoOptions, AsientoTipoPayload, CuentaAsientoOption } from '../interfaces/asientosTipo.interface'
const base='/mia/contabilidad/maestros/asientos-tipo'
export const obtenerOpcionesAsientosTipo=()=>apiRequest<AsientoTipoOptions>(`${base}/opciones`)
export const listarAsientosTipo=(tipoDocumentoId:number)=>apiRequest<AsientoTipo[]>(`${base}/asientos?tipo_documento_id=${tipoDocumentoId}`)
export const listarDetallesAsiento=(asientoId:number)=>apiRequest<AsientoTipoDetalle[]>(`${base}/detalles?asiento_id=${asientoId}`)
export const guardarAsientoTipo=(id:number|null,payload:AsientoTipoPayload)=>apiRequest<AsientoTipo>(`${base}/asientos${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})
export const cambiarEstadoAsientoTipo=(id:number)=>apiRequest(`${base}/asientos/${id}/estado`,{method:'PATCH'})
export const guardarDetalleAsiento=(id:number|null,payload:AsientoTipoDetallePayload)=>apiRequest<AsientoTipoDetalle>(`${base}/detalles${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})
export const cambiarEstadoDetalleAsiento=(id:number)=>apiRequest(`${base}/detalles/${id}/estado`,{method:'PATCH'})
export function buscarCuentasAsiento(criterio:string){const query=new URLSearchParams({q:criterio});return apiRequest<CuentaAsientoOption[]>(`${base}/cuentas?${query}`)}
