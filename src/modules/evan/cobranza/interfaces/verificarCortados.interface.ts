export interface Option{id:number;nombre:string}
export interface Suministro{id:number;codigo:string;sici:string;cliente:string;direccion:string;medidor?:string;categoria:string;servicios:string[];situacion:string;registrado:boolean;fecha_revision?:string;fotografias?:string[]}
export interface Page{data:Suministro[];total:number;page:number;last_page:number;distritos:Option[];sectores:Option[];calles:Option[];observaciones:Option[];dinamicas:Option[];avance:{revisados:number;total:number}}
