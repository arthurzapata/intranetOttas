export interface Indicador{id:number;nombre:string;total:number;atendidos:number;pendientes:number;porcentaje:number;promedio_minutos?:number}
export interface Resumen{data:Indicador[];totales:{recibidos:number;atendidos:number;pendientes:number};periodo:string}
