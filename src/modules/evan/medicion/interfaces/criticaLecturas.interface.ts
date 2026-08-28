export interface Option{id:number;nombre:string}
export interface Distrito{id:number;nombre:string;validados:number;total:number}
export interface Critica{id:number;cliente:string;direccion:string;distrito:string;medidor:string;inscripcion:string;suministro:string;categoria:string;situacion:string;tipo_facturacion:string;tipo_error:string;lectura_atipica:string;consumo_anterior:number;promedio:number;lectura_anterior:number;lectura_actual:number;consumo:number;fecha_lectura:string;lecturista:string;validado:boolean;fotografias?:string[]}
export interface Page{data:Critica[];total:number;page:number;last_page:number;distritos:Distrito[];observaciones:Option[];resumen:{pendientes:number;validados:number;total:number}}
