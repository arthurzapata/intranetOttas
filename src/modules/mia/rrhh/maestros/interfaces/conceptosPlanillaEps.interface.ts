import type { NaturalezaConcepto } from './conceptosPlanilla.interface'

export interface EpsOption { id:number; codigo:string; descripcion:string }
export interface ConceptoEpsOption extends EpsOption { tipo_concepto?:EpsOption|null; naturaleza:NaturalezaConcepto; regimen_id:number|null; regimen?:EpsOption|null }
export interface ConceptoPlanillaEps { id:number; concepto_id:number; concepto:ConceptoEpsOption|null; estado:boolean }
export interface ConceptosEpsOptions { conceptos:ConceptoEpsOption[]; regimenes:EpsOption[] }
