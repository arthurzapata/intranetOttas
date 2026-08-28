export interface Option{id:number;nombre:string;tipo_trabajo_id?:number}
export interface Historial{id:number;estado:string;accion?:string;usuario?:string;fecha:string;observacion?:string}
export interface Trabajo{id:number;numero_trabajo:string;expediente_id:number;expediente?:string;cliente?:string;direccion?:string;tipotrabajo_id:number;tipo_trabajo?:string;duracion?:string;proceso?:string;tiporesultado_id?:number;resultado?:string;accionflujo_id?:number;accion_flujo?:string;estado_trabajo:string;responsable?:string;fecha_programada?:string;fecha_atencion?:string;observaciones?:string;historial?:Historial[];puede_editar?:boolean;puede_finalizar?:boolean}
export interface Options{expedientes:Option[];tipos_trabajo:Option[];resultados:Option[];acciones_flujo:Option[];estados:Option[];responsables:Option[]}
export interface Page{data:Trabajo[];total:number;page:number;last_page:number;options:Options}
