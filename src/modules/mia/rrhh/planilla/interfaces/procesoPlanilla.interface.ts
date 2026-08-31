export interface RegimenPlanillaOption { id:number; codigo?:string; descripcion:string }
export interface TipoPlanillaOption { id:number; codigo?:string; descripcion:string; regimen_id:number }
export interface EstadoPlanillaOption { codigo:string; nombre:string }
export interface ProcesoPlanilla { id:number; codigo_proceso:string; anio:number; mes:number; regimen:RegimenPlanillaOption|null; tipo_planilla:TipoPlanillaOption|null; fecha_calculo_inicio:string|null; fecha_calculo_fin:string|null; numdias:number; numdomingos:number; diasefectivos:number; estado:string; total_trabajadores:number; total_ingresos?:number; total_descuentos?:number; total_neto?:number; comentarios?:string|null }
export interface FiltrosProcesosPlanilla { q:string; anio:number|null; mes:number|null; estado:string; regimen_id:number|null; tipo_planilla_id:number|null }
export interface ProcesoPlanillaPayload { anio:number; mes:number; regimen_id:number; tipo_planilla_id:number; fecha_calculo_inicio:string; fecha_calculo_fin:string; numdias:number; numdomingos:number; diasefectivos:number; comentarios:string }
export interface ProcesosPlanillaResponse { data:ProcesoPlanilla[]; current_page:number; last_page:number; total:number; regimenes:RegimenPlanillaOption[]; tipos_planilla:TipoPlanillaOption[]; estados:EstadoPlanillaOption[] }
export interface TrabajadorCalculoPlanilla { id:number; codigo_trabajador:string; nombre_completo:string; dni:string|null; regimen:string|null; sueldo_base:number }
export interface SeleccionTrabajadoresResponse { proceso:ProcesoPlanilla; modo:'calcular'|'recalcular'; data:TrabajadorCalculoPlanilla[]; current_page:number; last_page:number; total:number }
export interface CalcularPlanillaPayload { modo:'TODO'|'SELECCION'; trabajador_ids:number[] }
export interface TrabajadorProcesoPlanilla { id:number; apellido_paterno?:string|null; apellido_materno?:string|null; nombres?:string|null; nombre_completo?:string|null; dni?:string|null; estado_calculo:string; total_ingresos:number; total_descuentos:number; neto_pagar:number; boleta_preview_url?:string|null; boleta_pdf_url?:string|null }
export interface TrabajadoresProcesoResponse { proceso:ProcesoPlanilla; data:TrabajadorProcesoPlanilla[]; current_page:number; last_page:number; total:number }
export interface ConceptoTrabajadorPlanilla { id:number; codigo_concepto_snapshot:string; descripcion_concepto_snapshot:string; monto_calculado:number; origen:string; orden_calculo_snapshot?:number }
export interface DetalleTrabajadorProcesoResponse { proceso:ProcesoPlanilla; trabajador:TrabajadorProcesoPlanilla; conceptos:ConceptoTrabajadorPlanilla[]; boleta_preview_url?:string|null; boleta_pdf_url?:string|null }
