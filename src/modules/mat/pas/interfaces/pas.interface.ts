export interface Option{id:string|number;nombre:string}
export interface Medida{id:number;descripcion:string;fecha_limite:string;estado:string;dias_para_vencimiento?:number}
export interface Fiscalizacion{id:number;numero_fiscalizacion:string;tipo_accion:string;tipo_accion_label?:string;fecha_accion:string;descripcion_hechos:string;resultado:string;resultado_label?:string;estado:string;fecha_limite_subsanacion?:string;medidas_correctivas?:Medida[];pas_id?:number;puede_registrar_resultado?:boolean;puede_crear_pas?:boolean}
export interface ExpedientePas{id:number;numero_expediente:string;res_inicio_numero?:string;res_inicio_fecha?:string;estado_pas:string;estado_label?:string;fiscalizacion?:Fiscalizacion;fecha_tope_caducidad?:string;dias_para_caducidad?:number;multa_soles?:number;tipo_sancion?:string;abogado?:string;puede_cerrar?:boolean}
export interface Options{tipos_accion:Option[];resultados:Option[];estados_pas:Option[];anios:number[]}
export interface Page<T>{data:T[];total:number;page:number;last_page:number;options:Options}
