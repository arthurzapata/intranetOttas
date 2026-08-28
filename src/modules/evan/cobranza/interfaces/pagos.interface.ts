export interface Comprobante{id:number;tipo:string;numero:string;periodo?:string;emision?:string;vencimiento?:string;total:number}
export interface Conexion{id:number;suministro:string;cliente:string;documento:string;direccion:string;distrito:string;estado:string;deuda:number;comprobantes:Comprobante[]}
