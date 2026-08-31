export interface MesLibroInventarios { id:number; mes:number; mes_label:string }
export interface FilaLibroInventarios { cta_contable:string; descripcion:string; debe:number; haber:number }
export interface SeccionLibroInventarios { rows:FilaLibroInventarios[]; total_debe:number; total_haber:number; neto:number }
export type DatosLibroInventarios = Record<string,SeccionLibroInventarios>
export interface FiltrosLibroInventarios { mes:number|null; digitos:number|null }
export interface LibroInventariosResponse { anio_vigente:number; mes_vigente:number; meses:MesLibroInventarios[]; digitos_disponibles:number[]; digitos_plan:number; data:DatosLibroInventarios|null }
