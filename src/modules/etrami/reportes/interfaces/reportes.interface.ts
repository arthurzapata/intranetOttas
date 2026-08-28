export interface ReportFilters{criterio:string;tipo_documento_id:number;remitente_id:number;fecha_inicio:string;fecha_fin:string;page:number}
export interface ReportDoc extends DocumentoSeguimiento{remitente?:string|null;instancia_emisora?:string|null}
export interface ReportResponse{data:ReportDoc[];current_page:number;last_page:number;total:number;tipos_documento:CatalogOption[]}
import type { CatalogOption, DocumentoSeguimiento } from '../../interfaces/documento'
