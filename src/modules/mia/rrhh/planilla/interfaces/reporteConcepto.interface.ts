import type { RegimenPlanillaOption } from './procesoPlanilla.interface'

export interface TrabajadorReporteOption { id:number; codigo_trabajador:string; nombre_completo:string }
export interface FiltrosReporteConcepto { periodo:string; regimen_ids:number[]; datos_persona_ids:number[] }
export interface ReporteConceptoItem { id:number|string; codigo_trabajador:string|null; persona_nombre:string|null; persona_dni:string|null; regimen_descripcion:string|null; codigo_concepto_snapshot:string; descripcion_concepto_snapshot:string; rubro:string|null; periodo_texto:string|null; monto_calculado:number }
export interface ReporteConceptoResponse { data:ReporteConceptoItem[]; current_page:number; last_page:number; total:number; total_monto:number; regimenes:RegimenPlanillaOption[]; trabajadores_filtro:TrabajadorReporteOption[]; pdf_url?:string|null; excel_url?:string|null }
