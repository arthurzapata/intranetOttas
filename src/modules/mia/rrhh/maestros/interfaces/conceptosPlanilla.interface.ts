export type NaturalezaConcepto = 'REMUNERATIVO' | 'NO_REMUNERATIVO' | 'INFORMATIVO'
export type TipoCalculoConcepto = 'MANUAL' | 'FIJO' | 'PORCENTAJE' | 'FORMULA' | 'DINAMICO'

export interface ConceptoOption { id:number; codigo:string; descripcion:string }
export interface ConceptoPlanilla {
  id:number; codigo:string; descripcion:string; tipo_concepto_id:number; regimen_id:number|null; agrupadora_concepto_id:number|null
  naturaleza:NaturalezaConcepto; tipo_calculo:TipoCalculoConcepto; valor_base:number|null; formula:string|null; orden_calculo:number; estado:boolean
  tipo_concepto?:ConceptoOption|null; regimen?:ConceptoOption|null; agrupadora_concepto?:ConceptoOption|null
}
export type ConceptoPlanillaPayload=Omit<ConceptoPlanilla,'id'|'estado'|'tipo_concepto'|'regimen'|'agrupadora_concepto'>
export interface ConceptosPlanillaOpciones { tipos_concepto:ConceptoOption[]; regimenes:ConceptoOption[]; agrupadoras:ConceptoOption[] }

