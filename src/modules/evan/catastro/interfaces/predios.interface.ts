export interface Option{id:number;nombre:string}
export interface Foto{id:number;url:string;principal:boolean;fecha?:string}
export interface Conexion{id:number;codigo:string;sici:string;estado:string;situacion:string;categoria:string;servicios:string[]}
export interface Propietario{id:number;nombre:string;documento_tipo?:string;documento?:string;telefono?:string}
export interface Predio{id:number;distrito:string;sector:string;manzana:string;lote:string;sublote?:string;centro_poblado:string;urbanizacion:string;calle:string;direccion:string;referencia?:string;observacion?:string;propietario?:Propietario;foto_principal?:string;fotografias:Foto[];conexiones:Conexion[]}
export interface Page{data:Predio[];total:number;page:number;last_page:number;distritos:Option[];sectores:Option[];manzanas:Option[];urbanizaciones:Option[];calles:Option[];centros_poblados:Option[]}
export interface Payload{distrito_id:number;sector_id:number;manzana_id:number;lote:string;sublote:string;centro_poblado_id:number;urbanizacion_id:number;calle_id:number;direccion:string;referencia:string;observacion:string}
