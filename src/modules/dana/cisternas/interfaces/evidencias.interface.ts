export interface UnidadEvidencia { id_cisterna:number; id_programacion:number; id_programacion_cisterna:number; placa:string; conductor:string; numero_vueltas_confirmadas:number; evidencias:number; ultima_evidencia:string|null }
export interface EvidenciasResponse { data:UnidadEvidencia[]; total:number; total_evidencias:number; sin_evidencias:number }
export interface Evidencia { id:number; imagen:string; fecha:string; hora:string; hace:string; gps:boolean; latitud:number|null; longitud:number|null; vuelta:number; comentario?:string; archivo_original?:string; descarga?:string }
export interface GaleriaResponse { data:Evidencia[]; pagination:{current_page:number;last_page:number;per_page:number;total:number;has_more_pages:boolean} }
