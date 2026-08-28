export interface PersonaGradoPersona { id:number; nombre_completo:string; dni:string|null }
export interface PersonaGradoCatalogo { id:number; codigo:string; descripcion:string }
export interface PersonaGrado { id:number; persona_id:number; gradoinstruccion_id:number; estado:boolean; persona?:PersonaGradoPersona|null; grado_instruccion?:PersonaGradoCatalogo|null; gradoInstruccion?:PersonaGradoCatalogo|null }
export interface PersonaGradosResponse { data:PersonaGrado[]; total:number; current_page:number; last_page:number }
export interface PersonaGradosOptions { personas:PersonaGradoPersona[]; grados_instruccion:PersonaGradoCatalogo[] }
export interface PersonaGradoPayload { persona_id:number; gradoinstruccion_id:number }

