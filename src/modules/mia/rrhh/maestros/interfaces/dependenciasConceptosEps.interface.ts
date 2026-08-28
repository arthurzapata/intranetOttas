export interface DependenciaOption { id:number; codigo:string; descripcion:string; regimen_id?:number|null; regimen?:DependenciaOption|null }
export interface DependenciaConceptoEps { id:number; concepto_padre_id:number; concepto_base_id:number; tipo_relacion_id:number; factor:number|null; concepto_padre:DependenciaOption|null; concepto_base:DependenciaOption|null; tipo_relacion:DependenciaOption|null; estado:boolean }
export interface DependenciaPayload { concepto_padre_id:number|null; concepto_base_id:number|null; tipo_relacion_id:number|null; factor:number|null }
export interface DependenciaOpciones { conceptos:DependenciaOption[]; tipos_relacion:DependenciaOption[]; regimenes:DependenciaOption[] }

