export interface DocumentoFirma{id:number;numero?:string|null;asunto:string;tipo_documento?:CatalogOption|null;archivo?:string|null;archivo_firmado?:string|null;firmado_digitalmente:boolean;estado_firma?:'listo'|'pendiente'|'firmado'|'error'|null;fecha_firma?:string|null;certificado_firmante?:string|null;created_at:string}
export interface FirmaResponse{data:DocumentoFirma[];current_page:number;last_page:number;total:number;firma_habilitada:boolean;instancia?:CatalogOption|null}
import type { CatalogOption } from '../../interfaces/documento'
