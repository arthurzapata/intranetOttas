import { apiRequest } from '@/services/auth'
import type { CuentaEgpFuncionOption, PlantillaEgpFuncion, PlantillaEgpFuncionPayload, PlantillaEgpFuncionResponse } from '../interfaces/plantillaEgpFuncion.interface'
const base='/mia/contabilidad/proceso/plantilla-egp-funcion'
export function listarPlantillaEgpFuncion(criterio:string,codigogrupo:string,page:number){const q=new URLSearchParams({criterio,codigogrupo,page:String(page)});return apiRequest<PlantillaEgpFuncionResponse>(`${base}?${q}`)}
export const buscarCuentasEgpFuncion=(q:string)=>apiRequest<CuentaEgpFuncionOption[]>(`${base}/cuentas?q=${encodeURIComponent(q)}`)
export function guardarPlantillaEgpFuncion(id:number|null,payload:PlantillaEgpFuncionPayload){return apiRequest<PlantillaEgpFuncion>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoEgpFuncion=(id:number)=>apiRequest<PlantillaEgpFuncion>(`${base}/${id}/estado`,{method:'PATCH'})
