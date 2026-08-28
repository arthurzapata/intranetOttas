export interface Option{id:number;nombre:string;descripcion?:string}
export interface AccionFlujo{id:number;flujo_id:number;flujo:string;tipo_trabajo_id:number;tipo_trabajo:string;condicion:string;accion_si_id:number;accion_si:string;accion_no_id:number;accion_no:string;secuencia:number;activo:boolean}
export interface Page{data:AccionFlujo[];total:number;page:number;last_page:number;flujos:Option[];tipos_trabajo:Option[];acciones:Option[]}
