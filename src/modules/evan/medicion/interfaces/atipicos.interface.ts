export interface Option{id:number;nombre:string}
export interface DistritoAvance{id:number;nombre:string;validados:number;total:number}
export interface CasoAtipico{id:number;cliente:string;direccion:string;distrito:string;ruta:string;medidor:string;suministro:string;inscripcion:string;categoria:string;lectura_anterior:number;lectura_actual:number;consumo:number;promedio:number;tipo_error:string;desviacion:number;fecha_lectura:string;estado:'pendiente'|'notificado'|'validado';ticket_id?:number;notificacion_id?:number;fotografias?:string[];detalle_notificacion?:string}
export interface AtipicoPage{data:CasoAtipico[];total:number;page:number;last_page:number;distritos:DistritoAvance[];resumen:{pendientes:number;notificados:number;validados:number}}
