export interface Option{id:number;nombre:string}
export interface Adjunto{id:number;tipo?:string;nombre_original:string;tamano_bytes?:number}
export interface Relacion{id:number;tipo:string;contenido?:string;documento:{id:number;numero_documento:string;tipo?:string;titulo:string;estado?:string}}
export interface DocumentoNormativo{id:number;tipo_documento_id:number;tipo?:string;oficina_id:number;oficina?:string;estado_id:number;estado?:string;estado_color?:string;numero_documento:string;titulo:string;fecha_aprobacion:string;fecha_vigencia?:string;contenido?:string;adjuntos?:Adjunto[];relaciones_origen?:Relacion[];relaciones_destino?:Relacion[]}
export interface Options{tipos:Option[];estados:Option[];oficinas:Option[];tipos_relacion:Option[]}
export interface Page{data:DocumentoNormativo[];total:number;page:number;last_page:number;options:Options}
