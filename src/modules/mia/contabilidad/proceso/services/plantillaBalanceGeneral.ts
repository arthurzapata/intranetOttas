import { apiRequest } from '@/services/auth'
import type { CuentaPlantillaOption, PlantillaBalanceGeneral, PlantillaBalancePayload, PlantillaBalanceResponse } from '../interfaces/plantillaBalanceGeneral.interface'
const base='/mia/contabilidad/proceso/plantilla-balance-general'
export function listarPlantillaBalance(criterio:string,codgrupo:string,page:number){const q=new URLSearchParams({criterio,codgrupo,page:String(page)});return apiRequest<PlantillaBalanceResponse>(`${base}?${q}`)}
export function buscarCuentasPlantilla(q:string){return apiRequest<CuentaPlantillaOption[]>(`${base}/cuentas?q=${encodeURIComponent(q)}`)}
export function guardarPlantillaBalance(id:number|null,payload:PlantillaBalancePayload){return apiRequest<PlantillaBalanceGeneral>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export const cambiarEstadoPlantillaBalance=(id:number)=>apiRequest<PlantillaBalanceGeneral>(`${base}/${id}/estado`,{method:'PATCH'})
