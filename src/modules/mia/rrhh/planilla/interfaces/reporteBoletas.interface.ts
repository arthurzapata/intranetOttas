import type { RegimenPlanillaOption } from './procesoPlanilla.interface'

export interface FiltrosReporteBoletas { periodo:string; regimen_id:number|null }
export interface BoletaReporteItem { planilla_trabajador_id:number; planilla_proceso_id:number; codigo_trabajador:string|null; persona_nombre:string|null; persona_dni:string|null; neto_pagar:number; preview_url?:string|null }
export interface ReporteBoletasResponse { data:BoletaReporteItem[]; current_page:number; last_page:number; per_page:number; total:number; from:number|null; to:number|null; regimenes:RegimenPlanillaOption[]; pdf_url?:string|null }
