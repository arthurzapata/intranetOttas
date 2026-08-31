export interface CatalogoDetraccion{id:number;codigo:string;descripcion:string;porcentaje:number;monto_minimo?:number|null;codigo_operacion?:string|null;observacion?:string|null;vigente_desde?:string|null;vigente_hasta?:string|null;activo:boolean}
export interface CatalogoDetraccionPayload{codigo:string;descripcion:string;porcentaje:number;monto_minimo:number|null;codigo_operacion:string;observacion:string;vigente_desde:string;vigente_hasta:string}
export interface CatalogoDetraccionResponse{data:CatalogoDetraccion[];current_page:number;last_page:number;total:number}
