export interface Option{id:number;nombre:string;documento?:string}
export interface Adjunto{id:number;tipo?:string;nombre_original:string;tamanio?:number}
export interface Movimiento{id:number;tipo?:string;descripcion?:string;fecha?:string;fecha_fin_nueva?:string;monto_adicional?:number}
export interface Compromiso{id:number;descripcion:string;responsable?:string;fecha_programada:string;estado:string}
export interface Convenio{id:number;codigo_convenio:string;tipo_convenio_id:number;tipo?:string;estado_id:number;estado?:string;estado_color?:string;objeto:string;fecha_suscripcion:string;fecha_inicio:string;fecha_fin:string;fecha_fin_vigente?:string;monto?:number;monto_vigente?:number;dias_alerta:number;observaciones?:string;personas:Option[];adjuntos?:Adjunto[];prorrogas?:Movimiento[];modificaciones?:Movimiento[];compromisos?:Compromiso[];esta_vigente?:boolean;esta_vencido?:boolean;esta_por_vencer?:boolean}
export interface Options{tipos:Option[];estados:Option[];personas:Option[];codigo_sugerido?:string}
export interface Page{data:Convenio[];total:number;page:number;last_page:number;options:Options;summary?:{vigentes:number;por_vencer:number;vencidos:number}}
