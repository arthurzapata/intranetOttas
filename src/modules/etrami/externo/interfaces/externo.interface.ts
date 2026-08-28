export interface RemitenteExterno{id:number;tipo:1|2;nombre?:string;apellido_paterno?:string;apellido_materno?:string;dni?:string;razon_social?:string;ruc?:string;celular:string;telefono_fijo?:string;email:string;documentos_count?:number}
export interface DocumentoExterno{id:number;remitente_id?:number;tipo_documento_id?:number;numero?:string;asunto:string;archivo?:string;observacion?:string;created_at:string;nombre?:string;apellido_paterno?:string;apellido_materno?:string;dni?:string;ruc?:string;razon_social?:string;celular?:string;email?:string;tipo_documento?:CatalogOption;remitente?:RemitenteExterno}
export interface Page<T>{data:T[];current_page:number;last_page:number;total:number}
import type { CatalogOption } from '../../interfaces/documento'
