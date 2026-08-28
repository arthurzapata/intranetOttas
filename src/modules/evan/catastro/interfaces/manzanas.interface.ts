export interface SectorOption{id:number;nombre:string;distrito:string;manzanas_count?:number}
export interface Manzana{id:number;nombre:string;sector_id:number;estado:boolean;predios_count?:number;conexiones_count?:number}
export interface Response{data:Manzana[];current_page:number;last_page:number;total:number;sectores:SectorOption[]}
export interface Payload{nombre:string}
