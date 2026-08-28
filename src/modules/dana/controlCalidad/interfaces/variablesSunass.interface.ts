export interface VariableSunass { id:number; nombre:string; descripcion:string; periodicidad:string; periodicidad_nombre:string; grupo_informacion:number; created_at:string; componentes_count:number }
export interface VariableSunassPayload { nombre:string; descripcion:string; periodicidad:string; grupo_informacion:number|null }
export interface VariablesSunassResponse { data:VariableSunass[]; periodicidades:Record<string,string>; current_page:number; last_page:number; total:number }
