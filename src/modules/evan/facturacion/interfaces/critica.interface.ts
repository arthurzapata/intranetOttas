export interface Concepto{nombre:string;importe:number}
export interface Grupo{nombre:string;cantidad:number}
export interface Ciclo{id:number;nombre:string;sector:string;procesado:boolean;afectos:number;igv:number;inafectos:number;total:number;volumen:number;conexiones:number;unidades:number;conceptos_afectos:Concepto[];conceptos_inafectos:Concepto[];categorias:Grupo[];tipos_facturacion:Grupo[]}
export interface Distrito{id:number;nombre:string;ciclos:Ciclo[];resumen?:Ciclo}
