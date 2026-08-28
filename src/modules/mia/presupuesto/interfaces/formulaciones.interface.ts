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
