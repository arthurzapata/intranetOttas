export interface Colaborador { id:number; username:string; nombre_completo:string; dni:string; fecha_nacimiento?:string; sexo?:string; imagen_url?:string; total_tareas:number; total_culminadas:number }
export interface Actividad { id:number; descripcion:string; seccion:string; fecha_registro:string; registrado_por:string; atendido:boolean; fecha_atencion?:string }
export interface ColaboradoresResponse { data:Colaborador[]; current_page:number; last_page:number; total:number }
export interface ProductividadResponse { colaborador:Colaborador; actividades:Actividad[] }
