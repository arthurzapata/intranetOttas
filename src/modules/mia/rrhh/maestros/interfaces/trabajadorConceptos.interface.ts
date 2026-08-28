export interface TrabajadorOption { id:number; codigo_trabajador:string; nombre_completo:string; regimen_id:number; regimen?:{id:number;codigo:string;descripcion:string}|null }
export interface TrabajadorConceptoOption { id:number; codigo:string; descripcion:string; regimen_id:number|null; regimen?:{id:number;codigo:string;descripcion:string}|null }
export interface TrabajadorConceptoConfig { id:number; datos_persona_id:number; concepto_id:number; aplica:boolean; monto_manual:number|null; fecha_inicio:string|null; fecha_fin:string|null; observacion:string|null; estado:boolean; concepto?:TrabajadorConceptoOption|null }
export interface TrabajadorConceptosOptions { trabajadores:TrabajadorOption[] }
export interface TrabajadorConceptosResponse { trabajador:TrabajadorOption; conceptos:TrabajadorConceptoOption[]; configuraciones:TrabajadorConceptoConfig[] }
export type TrabajadorConceptoPayload=Omit<TrabajadorConceptoConfig,'id'|'concepto'>

