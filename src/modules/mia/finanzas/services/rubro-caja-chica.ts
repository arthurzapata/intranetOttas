import {apiRequest} from '@/services/auth'
import type {CuentaRubro,RubroCajaChica,RubroCajaChicaPayload,RubrosCajaChicaResponse} from '../interfaces/rubro-caja-chica.interface'
const base='/mia/finanzas/rubros-caja-chica'
export const listarRubrosCajaChica=(buscar='',page=1)=>apiRequest<RubrosCajaChicaResponse>(`${base}?buscar=${encodeURIComponent(buscar)}&page=${page}`)
export const obtenerRubroCajaChica=(id:number)=>apiRequest<RubroCajaChica>(`${base}/${id}`)
export const guardarRubroCajaChica=(id:number|null,data:RubroCajaChicaPayload)=>apiRequest<RubroCajaChica>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})
export const cambiarEstadoRubroCajaChica=(id:number)=>apiRequest<void>(`${base}/${id}/estado`,{method:'POST'})
export const buscarCuentasRubroCajaChica=(term:string)=>apiRequest<{results:CuentaRubro[]}>(`${base}/cuentas?term=${encodeURIComponent(term)}`)