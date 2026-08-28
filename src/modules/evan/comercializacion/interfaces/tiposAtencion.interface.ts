export interface Accion{id:number;nombre:string;descripcion?:string;seccion:string}
export interface Paso extends Accion{pivot_id?:number;condicion?:string;tipo_accion?:number;secuencia:number}
export interface TipoAtencion{id:number;nombre:string;tipo:string;grupo?:string;pasos?:Paso[]}
export interface Page{data:TipoAtencion[];total:number;page:number;last_page:number;acciones:Accion[]}
