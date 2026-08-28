export interface TipoDocumentoConfig {id:number;nombre:string;descripcion?:string|null;tamanio_maximo_mb:number;activo:boolean;es_convenio:boolean;es_documento_normativo:boolean;es_proveido:boolean}
export interface Correlativo {id:number;tipo_documento_id:number;instancia_id:number;cargo_id:number;numero:number;tipo_documento?:CatalogOption;instancia?:CatalogOption;cargo?:CatalogOption;updated_at?:string|null}
export interface Page<T>{data:T[];current_page:number;last_page:number;total:number}
import type { CatalogOption } from '../../interfaces/documento'
