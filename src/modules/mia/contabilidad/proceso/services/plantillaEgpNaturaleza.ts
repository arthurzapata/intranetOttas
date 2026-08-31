import { apiRequest } from '@/services/auth'
import type { CuentaEgpNaturalezaOption, PlantillaEgpNaturaleza, PlantillaEgpNaturalezaPayload, PlantillaEgpNaturalezaResponse } from '../interfaces/plantillaEgpNaturaleza.interface'
const base='/mia/contabilidad/proceso/plantilla-egp-naturaleza'
export function listarPlantillaEgpNaturaleza(criterio:string,codigogrupo:string,page:number){const q=new URLSearchParams({criterio,codigogrupo,page:String(page)});return apiRequest<PlantillaEgpNaturalezaResponse>(`${base}?${q}`)}
export const buscarCuentasEgpNaturaleza=(q:string)=>apiRequest<CuentaEgpNaturalezaOption[]>(`${base}/cuentas?q=${encodeURIComponent(q)}`)
export function guardarPlantillaEgpNaturaleza(id:number|null,payload:PlantillaEgpNaturalezaPayload){return apiRequest<PlantillaEgpNaturaleza>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoEgpNaturaleza=(id:number)=>apiRequest<PlantillaEgpNaturaleza>(`${base}/${id}/estado`,{method:'PATCH'})
