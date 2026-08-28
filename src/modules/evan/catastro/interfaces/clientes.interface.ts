export interface Option{id:number;nombre:string;longitud?:number}
export interface Cliente{id:number;tipo_documento_id:number;tipo_documento:string;documento:string;nombres:string;apellido_paterno?:string;apellido_materno?:string;nombre_completo:string;celular?:string;correo?:string;fecha_nacimiento:string;sexo:'m'|'f';predios_count:number}
export interface Page{data:Cliente[];total:number;page:number;last_page:number;tipos_documento:Option[]}
export interface Payload{tipo_documento_id:number;documento:string;nombres:string;apellido_paterno:string;apellido_materno:string;celular:string;correo:string;fecha_nacimiento:string;sexo:'m'|'f'}
