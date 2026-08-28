export interface Option{id:number;nombre:string}
export interface Adjunto{id:number;nombre:string;archivo:string;tipo?:string;url?:string}
export interface Log{id:number;accion:string;usuario:string;fecha:string}
export interface Tarea{id:number;documento_id?:number;ticket_id?:number;origen?:string;accion?:string;seccion?:string;descripcion?:string;tipo_tarea?:string;cliente?:string;direccion?:string;distrito?:string;responsable?:string;usuario_envia?:string;estado:string;fecha_programacion?:string;fecha_atencion?:string;respuesta?:string;latitud?:number;longitud?:number;sin_solucion?:boolean;adjuntos?:Adjunto[];personal?:Option[];logs?:Log[];puede_recibir?:boolean;puede_liberar?:boolean;puede_finalizar?:boolean;puede_derivar?:boolean}
export interface Options{secciones:Option[];tipos_tarea:Option[];personal:Option[];estados:Option[]}
export interface Page{data:Tarea[];total:number;page:number;last_page:number;options:Options}
