import { apiRequest } from '@/services/auth'
import type { BaseTareaje, ModoDescuento, Regimen, RegimenPayload, RegimenesResponse } from '../interfaces/regimenes.interface'
const base='/lecturita/mia/rrhh/maestros/regimenes'
export const baseTareajeLabels:Record<BaseTareaje,string>={MES_30_DIAS:'Mes de 30 días',MES_REAL:'Mes real',SEMANAL:'Semanal'}
export const descuentoLabels:Record<ModoDescuento,string>={NO_ACUMULABLE:'No acumulable',ACUMULABLE:'Acumulable'}
export function listarRegimenes(criterio:string,page:number){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<RegimenesResponse>(`${base}?${q}`)}
export function guardarRegimen(id:number|null,payload:RegimenPayload){return apiRequest<Regimen>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export function cambiarEstadoRegimen(id:number){return apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})}
