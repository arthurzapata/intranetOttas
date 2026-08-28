import { apiRequest } from '@/services/auth'
import type { VariableSunass, VariableSunassPayload, VariablesSunassResponse } from '../interfaces/variablesSunass.interface'



const base='/dana/control-calidad/variables-sunass'
export function listarVariablesSunass(criterio:string,page=1){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<VariablesSunassResponse>(`${base}?${q}`)}
export function guardarVariableSunass(data:VariableSunassPayload,id?:number){return apiRequest<VariableSunass>(id?`${base}/${id}`:base,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarVariableSunass(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
