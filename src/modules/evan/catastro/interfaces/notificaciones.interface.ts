export interface Fotografia{id:number;url:string;created_at:string}
export interface Notificacion{id:number;cliente:string;distrito:string;direccion:string;codigo:string;codigo_sici?:string;tipo:string;fecha_inicio:string;iniciado_por:string;fecha_impreso?:string;tipo_entrega?:string;observacion?:string;fotografias:Fotografia[]}
export interface CierrePayload{tipo_entrega:'bajo puerta'|'directamente'|'entregado otro';observacion:string}
