import { apiRequest } from '@/services/auth'
import type { NaturalezaConcepto, TipoCalculoConcepto, ConceptoOption, ConceptoPlanilla, ConceptoPlanillaPayload, ConceptosPlanillaOpciones } from '../interfaces/conceptosPlanilla.interface'
const base='/mia/rrhh/maestros/conceptos-planilla'
export const naturalezas:NaturalezaConcepto[]=['REMUNERATIVO','NO_REMUNERATIVO','INFORMATIVO']
export const tiposCalculo:TipoCalculoConcepto[]=['MANUAL','FIJO','PORCENTAJE','FORMULA','DINAMICO']
export const naturalezaLabels:Record<NaturalezaConcepto,string>={REMUNERATIVO:'Remunerativo',NO_REMUNERATIVO:'No remunerativo',INFORMATIVO:'Informativo'}
export const calculoLabels:Record<TipoCalculoConcepto,string>={MANUAL:'Manual',FIJO:'Fijo',PORCENTAJE:'Porcentaje',FORMULA:'Fórmula',DINAMICO:'Dinámico'}
export const listarConceptosPlanilla=()=>apiRequest<ConceptoPlanilla[]>(base)
export const listarOpcionesConceptosPlanilla=()=>apiRequest<ConceptosPlanillaOpciones>(`${base}/opciones`)
export function guardarConceptoPlanilla(id:number|null,payload:ConceptoPlanillaPayload){return apiRequest<ConceptoPlanilla>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export function cambiarEstadoConceptoPlanilla(id:number){return apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})}
