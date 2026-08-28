export interface PersonaProfesionPersona { id:number; nombre_completo:string; dni:string|null }
export interface PersonaProfesionCatalogo { id:number; codigo:string; descripcion:string }
export interface PersonaProfesion { id:number; persona_id:number; profesion_id:number; estado:boolean; persona?:PersonaProfesionPersona|null; profesion?:PersonaProfesionCatalogo|null }
export interface PersonaProfesionesResponse { data:PersonaProfesion[]; total:number; current_page:number; last_page:number }
export interface PersonaProfesionesOptions { personas:PersonaProfesionPersona[]; profesiones:PersonaProfesionCatalogo[] }
export interface PersonaProfesionPayload { persona_id:number; profesion_id:number }

