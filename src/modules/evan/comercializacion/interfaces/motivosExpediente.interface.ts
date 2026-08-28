export interface Option{id:number;nombre:string}
export interface Motivo{id:number;motivo:string;descripcion:string;tipo_expediente_id:number;tipo_expediente:string;concepto_id:number;concepto:string;referido_a?:string;estado_suministro?:string;requiere_suministro:boolean;crea_contrato:boolean;requiere_contraste:boolean;verifica_deuda:boolean;quiebre_total:boolean;afecta_interes:boolean;crea_suministro:boolean;requiere_monto_reclamo:boolean;activo:boolean}
export interface Page{data:Motivo[];total:number;page:number;last_page:number;tipos_expediente:Option[];conceptos:Option[]}
