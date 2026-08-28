export interface Option { id:number; nombre:string; requiere_conexion?:boolean }
export interface Interaccion { id:number; tipo:string; descripcion:string; usuario:string; fecha:string; archivo?:string }
export interface TareaTicket { id:number; descripcion:string; seccion?:string; estado:string; responsable?:string; fecha:string }
export interface Ticket { id:number; dni:string; cliente:string; celular?:string; email?:string; tipo_atencion:string; tipo_atencion_id?:number; medio_recepcion?:string; detalle:string; suministro?:string; distrito?:string; referencia?:string; responsable?:string; estado:string; fecha_recepcion:string; fecha_finalizacion?:string; interacciones?:Interaccion[]; tareas?:TareaTicket[]; puede_recibir?:boolean; puede_liberar?:boolean; puede_cerrar?:boolean; puede_eliminar?:boolean }
export interface Options { tipos_atencion:Option[]; medios:Option[]; distritos:Option[]; secciones:Option[]; tipos_interaccion:Option[] }
export interface Page { data:Ticket[]; total:number; page:number; last_page:number; options:Options }
