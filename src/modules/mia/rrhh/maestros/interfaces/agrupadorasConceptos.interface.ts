export interface AgrupadoraConcepto { id:number; codigo:string; descripcion:string; estado:boolean }
export type AgrupadoraConceptoPayload=Pick<AgrupadoraConcepto,'codigo'|'descripcion'>
export interface AgrupadorasResponse { data:AgrupadoraConcepto[]; total:number; current_page:number; last_page:number }

