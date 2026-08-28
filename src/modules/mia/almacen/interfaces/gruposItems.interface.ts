export interface Subgrupo { id:number;grupo_id:number;nombre:string;items_count:number }
export interface Caracteristica { id:number;grupo_id:number;nombre:string }
export interface GrupoItem { id:number;nombre:string;familia:'m'|'a'|'s';familia_nombre:string;vida_util?:number;deprec?:number;etiqueta:boolean;debe_deprec?:number;haber_deprec?:number;debe_revaluac?:number;haber_revaluac?:number;subgrupos_count:number;items_count:number;subgrupos?:Subgrupo[];caracteristicas?:Caracteristica[] }
export interface GruposResponse { data:GrupoItem[];total:number;page:number;last_page:number }
export type GrupoPayload=Pick<GrupoItem,'nombre'|'familia'|'vida_util'|'etiqueta'|'debe_deprec'|'haber_deprec'|'debe_revaluac'|'haber_revaluac'>
