export interface Configuracion{id:number;objeto:string;atributo:string;valor:string;descripcion:string;estado:boolean}
export interface Pair{objeto:string;atributo:string}
export interface Page{data:Configuracion[];current_page:number;last_page:number;total:number;objetos:string[];atributos:string[];pares:Pair[]}
export interface Payload{objeto:string;atributo:string;valor:string;descripcion:string}
