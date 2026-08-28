export interface Option{id:number;nombre:string}
export interface Tarea{id:number;ticket_id:number;documento_id?:number;tipo_atencion:string;tipo_tarea:string;cliente:string;documento?:string;distrito:string;direccion?:string;descripcion?:string;usuario_envia:string;fecha:string;estado:string}
export interface Page{data:Tarea[];total:number;page:number;last_page:number;distritos:Option[];tipos_atencion:Option[]}
