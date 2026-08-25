import { apiRequest } from '@/services/auth'
export interface VariableSunass { id:number; nombre:string; descripcion:string; periodicidad:string; periodicidad_nombre:string; grupo_informacion:number; created_at:string; componentes_count:number }
export interface VariableSunassPayload { nombre:string; descripcion:string; periodicidad:string; grupo_informacion:number|null }
export interface VariablesSunassResponse { data:VariableSunass[]; periodicidades:Record<string,string>; current_page:number; last_page:number; total:number }
const base='/lecturita/dana/control-calidad/variables-sunass'
export function listarVariablesSunass(criterio:string,page=1){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<VariablesSunassResponse>(`${base}?${q}`)}
export function guardarVariableSunass(data:VariableSunassPayload,id?:number){return apiRequest<VariableSunass>(id?`${base}/${id}`:base,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarVariableSunass(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
