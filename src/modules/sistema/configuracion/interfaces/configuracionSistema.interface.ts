export type TipoDato='string'|'integer'|'boolean'|'decimal'|'json'
export interface Configuracion{id:number;codigo:string;valor:string;descripcion?:string;tipo_dato:TipoDato;categoria?:string;es_editable:boolean;orden:number}
export interface ConfiguracionPayload{codigo:string;valor:string;descripcion:string;tipo_dato:TipoDato;categoria:string;es_editable:boolean;orden:number}
export interface ConfiguracionPage{data:Configuracion[];total:number;current_page:number;last_page:number;categorias:string[]}
export interface ConfiguracionFilters{criterio:string;categoria:string;page:number}
