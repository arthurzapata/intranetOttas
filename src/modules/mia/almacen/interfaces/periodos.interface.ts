export interface DiaOperativo { id:number;fecha:string;cerrado:boolean;fecha_cierre?:string;usuario_cierre?:string;observacion?:string;movimientos_count:number }
export interface Periodo { id:number;anio:number;mes:number;nombre:string;fecha_inicio:string;fecha_fin:string;cerrado:boolean;fecha_cierre?:string;usuario_cierre?:string;observacion?:string;dias_count:number;movimientos_count:number;dia_abierto?:DiaOperativo;dias?:DiaOperativo[] }
export interface PeriodosResponse { data:Periodo[];total:number;page:number;last_page:number;inicializado:boolean }
