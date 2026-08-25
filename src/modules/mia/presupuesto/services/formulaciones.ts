import { apiRequest } from '@/services/auth'

export type FaseFormulacion = 'proyeccion' | 'distribucion' | 'plan' | 'consolidacion'
export interface UnidadPresupuestal { id:number; nombre:string; porcentaje:number; importe:number }
export interface FormulacionPresupuestal {
  id:number
  anio:number
  fase:FaseFormulacion
  cerrado:boolean
  total_ingresos:number
  total_restricciones:number
  total_saldo:number
  unidades_principales?:UnidadPresupuestal[]
}
export interface FormulacionesResponse { data:FormulacionPresupuestal[]; current_page:number; last_page:number; total:number }
const base='/lecturita/mia/presupuesto/formulaciones'
export function listarFormulaciones(page=1){return apiRequest<FormulacionesResponse>(`${base}?page=${page}`)}
export function obtenerFormulacion(id:number){return apiRequest<FormulacionPresupuestal>(`${base}/${id}`)}
export function crearFormulacion(anio:number){return apiRequest<FormulacionPresupuestal>(base,{method:'POST',body:JSON.stringify({anio})})}
export function avanzarFase(id:number){return apiRequest<FormulacionPresupuestal>(`${base}/${id}/avanzar-fase`,{method:'POST'})}
