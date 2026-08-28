export interface CatalogoItem { id:number;nombre:string }
export interface GrupoOption extends CatalogoItem { familia:string;subgrupos:CatalogoItem[] }
export interface ItemLogistico { id:number;nombre:string;grupo_id:number;grupo:string;subgrupo_id:number;subgrupo:string;familia:string;familia_nombre:string;unidad_id:number;unidad:string;uso_comun:boolean;archivo?:string;imagen_url?:string;saldo?:number;stock_minimo?:number;stock_maximo?:number;lote_economico?:number;punto_reposicion?:number;consumo_promedio?:number }
export interface ItemsResponse { data:ItemLogistico[];total:number;page:number;last_page:number;grupos:GrupoOption[];unidades:CatalogoItem[];resumen:{materiales:number;activos:number;servicios:number;sin_stock:number} }
