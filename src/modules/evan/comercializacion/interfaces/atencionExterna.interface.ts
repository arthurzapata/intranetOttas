export interface Option{id:number;nombre:string;requiere_conexion?:boolean}
export interface PreTicket{id:number;dni:string;nombre:string;apellido_paterno:string;apellido_materno:string;nombre_completo?:string;celular:string;telefono_fijo?:string;email:string;parentesco:string;distrito_id:number;distrito?:string;suministro?:string;descripcion:string;archivo?:string;fecha_registro:string;validado?:boolean;ticket_id?:number}
export interface Options{conceptos:Option[];distritos:Option[];parentescos:Option[]}
export interface Page{data:PreTicket[];total:number;page:number;last_page:number;options:Options}
