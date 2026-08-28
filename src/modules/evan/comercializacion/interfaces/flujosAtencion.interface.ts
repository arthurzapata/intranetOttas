export interface FlujoAtencion{id:number;codigo:string;tipo:string;descripcion:string;activo:boolean;acciones:number;creado?:string}
export interface Page{data:FlujoAtencion[];total:number;page:number;last_page:number}
