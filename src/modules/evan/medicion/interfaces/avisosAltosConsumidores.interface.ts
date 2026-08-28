export interface Distrito{id:number;nombre:string;entregados:number;total:number}
export interface Aviso{id:number;cliente:string;direccion:string;distrito:string;medidor:string;inscripcion:string;suministro:string;categoria:string;lectura_anterior:number;lectura_actual:number;consumo:number;promedio:number;exceso_porcentaje:number;entregado:boolean;fecha_entrega?:string;entregado_por?:string;fotografia_predio?:string}
export interface Page{data:Aviso[];total:number;page:number;last_page:number;distritos:Distrito[];resumen:{pendientes:number;entregados:number;total:number}}
