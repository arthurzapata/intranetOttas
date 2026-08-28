export interface Option{id:number;nombre:string}
export interface Accion{id:number;seccion_id:number;seccion:string;nombre:string;descripcion:string;duracion:string;proceso:string;se_informa:string;movimiento_genera:string;flujos?:number}
export interface Page{data:Accion[];total:number;page:number;last_page:number;secciones:Option[]}
