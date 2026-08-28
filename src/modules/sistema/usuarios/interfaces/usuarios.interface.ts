export interface Option{id:number;nombre:string}
export interface ModuloAsignado extends Option{tipo:string}
export interface Usuario{id:number;username:string;nombre_completo:string;dni:string;correo?:string;empresa:string;empresa_id:number;oficina?:string;oficina_id?:number;tipo_rol:'administrativo'|'operativo';activo:boolean;administrador:boolean;super_administrador:boolean;multi_empresa:boolean;sexo?:string;fecha_nacimiento?:string;modulos_count:number;empresas_count:number}
export interface Options{empresas:Option[];oficinas:Option[];modulos:Option[];roles:Option[];tipos_modulo:Option[]}
export interface Page{data:Usuario[];total:number;page:number;last_page:number;options:Options;es_super_administrador:boolean}
export interface Payload{username:string;password?:string;dni:string;nombre:string;apellido_paterno:string;apellido_materno:string;correo:string;fecha_nacimiento:string;sexo:string;tipo_rol:string;oficina_id:number;activo:boolean;administrador:boolean;super_administrador:boolean;multi_empresa:boolean}
export interface Accesos{modulos:ModuloAsignado[];empresas:Option[];disponibles:{modulos:Option[];empresas:Option[];tipos_modulo:Option[]}}
