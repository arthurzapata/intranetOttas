export interface PersonaOption { id:number; nombre_completo:string; dni:string|null; email?:string|null; celular?:string|null }
export interface CatalogoOption { id:number; codigo:string; nombre?:string; descripcion?:string }
export interface DatosLaborales {
  id:number; persona_id:number; codigo_trabajador:string; regimen_id:number; afp_id:number|null; banco_id:number|null
  nro_cuenta_ahorros:string|null; nro_contrato:string|null; fecha_contrato:string|null; nro_cuspp:string|null; sustento_contrato:string|null
  fecha_ingreso:string; fecha_cese:string|null; sueldo_base:number|string; estado:boolean; persona?:PersonaOption|null
  regimen?:CatalogoOption|null; afp?:CatalogoOption|null; banco?:CatalogoOption|null
}
export interface DatosLaboralesResponse { data:DatosLaborales[]; total:number; current_page:number; last_page:number }
export interface DatosLaboralesOptions { personas:PersonaOption[]; regimenes:CatalogoOption[]; afps:CatalogoOption[]; bancos:CatalogoOption[] }
export interface DatosLaboralesPayload { persona_id:number; codigo_trabajador:string; regimen_id:number; afp_id:number|null; banco_id:number|null; nro_cuenta_ahorros:string|null; nro_contrato:string|null; fecha_contrato:string|null; nro_cuspp:string|null; fecha_ingreso:string; fecha_cese:string|null; sueldo_base:number; sustento_contrato:File|null }

