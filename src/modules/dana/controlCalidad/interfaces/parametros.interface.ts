export interface UnidadParametro { id:number; nombre:string; descripcion?:string }
export interface ParametroCalidad { id:number; nombre:string; codigo:string; unidad_id:number; unidad:string; created_at:string; resultados_count:number }
export interface ParametroPayload { nombre:string; codigo:string; unidad_id:number|null }
export interface ParametrosResponse { data:ParametroCalidad[]; unidades:UnidadParametro[]; current_page:number; last_page:number; total:number }
