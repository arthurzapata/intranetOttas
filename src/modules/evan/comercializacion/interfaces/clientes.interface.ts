export interface Servicio{id:number;nombre:string}
export interface Conexion{id:number;codigo:string;codigo_sici?:string;situacion?:string;categoria?:string;unidades_uso?:number;servicios?:Servicio[]}
export interface Predio{id:number;direccion_completa:string;distrito?:string;sector?:string;manzana?:string;lote?:string;latitud?:number;longitud?:number;fotografias_count?:number;conexiones?:Conexion[]}
export interface Tramite{id:number;numero?:string;tipo?:string;asunto?:string;estado?:string;fecha?:string}
export interface Cliente{id:number;tipo:1|2;nombre_completo:string;nombre?:string;apellido_paterno?:string;apellido_materno?:string;razon_social?:string;dni?:string;ruc?:string;celular?:string;telefono_fijo?:string;correo?:string;predios?:Predio[];tramites?:Tramite[];predios_count?:number;conexiones_count?:number;tramites_count?:number}
export interface Page{data:Cliente[];total:number;page:number;last_page:number}
