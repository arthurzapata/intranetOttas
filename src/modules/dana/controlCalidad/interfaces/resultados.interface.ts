export interface MuestraResultado { id:number; etiqueta:string; componente:string; fecha:string }
export interface ParametroResultado { id:number; nombre:string; codigo:string; unidad:string }
export interface ResultadoCalidad { id:number; muestra_id:number; muestra:string; componente:string; parametro_id:number; parametro:string; codigo:string; unidad:string; valor:number; created_at:string }
export interface ResultadoPayload { muestra_id:number|null; parametro_id:number|null; valor:number|null }
export interface ResultadosResponse { data:ResultadoCalidad[]; muestras:MuestraResultado[]; parametros:ParametroResultado[]; current_page:number; last_page:number; total:number }
