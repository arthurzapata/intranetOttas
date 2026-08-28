export interface Option{id:number;nombre:string;requiere_conexion?:boolean}
export interface Fase{id:number;nombre:string;secuencia:number;estado:string;responsable?:string;fecha_inicio?:string;fecha_fin?:string}
export interface Solicitud{id:number;numero?:string;cliente_id:number;cliente:string;documento?:string;concepto_id:number;concepto:string;distrito?:string;direccion:string;referencia:string;observacion?:string;estado:string;inicio:boolean;fecha_registro:string;fase_actual?:string;responsable?:string;conexion_codigo?:string;fases?:Fase[];puede_anular?:boolean}
export interface Options{conceptos:Option[];distritos:Option[];clientes:Option[];conexiones:Option[];estados:Option[]}
export interface Page{data:Solicitud[];total:number;page:number;last_page:number;options:Options}
