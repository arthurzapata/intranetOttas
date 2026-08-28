export interface LecturaMacro { id:number; fecha_hora:string; lectura:number; valor_ingresado?:number; usuario:string; imagen_url?:string }
export interface Macromedidor { id:number; nombre:string; tipo:'fisico'|'virtual'; sistema:string; distrito:string; condicion:string; unidad:string; ultima_lectura:number|null; ultima_fecha:string|null; lecturas_count:number }
export interface MacromedidoresResponse { data:Macromedidor[]; current_page:number;last_page:number;total:number;resumen:{fisicos:number;virtuales:number;con_lectura_hoy:number} }
export interface HistorialMacroResponse { data:LecturaMacro[]; macromedidor:Macromedidor }
