export interface Acceso{id:number;usuario_id:number;username:string;nombre_completo?:string;fecha:string;ip:string;imagen?:string}
export interface AccesosPage{data:Acceso[];total:number;current_page:number;last_page:number;per_page:number}
export interface AccesosFilters{criterio:string;ip:string;desde:string;hasta:string;page:number}
