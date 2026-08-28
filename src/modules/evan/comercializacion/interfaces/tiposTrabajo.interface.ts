export interface TipoTrabajo{id:number;tipo:string;descripcion:string;duracion:string;proceso:string;se_informa:string;movimiento_genera:string;activo:boolean;usos?:number}
export interface Page{data:TipoTrabajo[];total:number;page:number;last_page:number}
