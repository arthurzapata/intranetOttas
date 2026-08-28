export interface Fase{id:number;nombre:string;inicio?:string;fin?:string;completada:boolean;actual:boolean}
export interface Ciclo{id:number;nombre:string;fase_id:number;fase:string;fases:Fase[]}
export interface Sector{id:number;nombre:string;ciclo?:Ciclo}
export interface Distrito{id:number;nombre:string;sectores:Sector[]}
