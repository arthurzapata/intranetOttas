export interface Option{id:string|number;nombre:string}
export interface Investigado{id:number;persona_id:number;nombre:string;dni?:string;cargo?:string;estado?:string;es_principal?:boolean}
export interface Denuncia{id:number;tipo_denuncia:string;tipo_denuncia_label?:string;estado:string;estado_label?:string;fecha_hecho?:string;fecha_toma_conocimiento:string;descripcion_hechos:string;investigados:Investigado[];tiene_precalificacion?:boolean;recomendacion?:string;created_at?:string}
export interface ExpedientePad{id:number;numero_expediente:string;res_inicio_numero:string;res_inicio_fecha:string;estado_pad:string;estado_label?:string;fecha_vencimiento_descargos?:string;investigados:Investigado[];etapa?:string;denuncia_id:number;puede_descargos?:boolean;puede_instruccion?:boolean;puede_sancion?:boolean;puede_cerrar?:boolean}
export interface PadOptions{tipos_denuncia:Option[];estados_denuncia:Option[];estados_pad:Option[]}
export interface Page<T>{data:T[];total:number;page:number;last_page:number;options:PadOptions}
