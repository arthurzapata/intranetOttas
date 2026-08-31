export interface TipoCartaFianza{id:number;codigo:string;nombre:string;descripcion?:string|null;activo:boolean}
export interface TipoCartaFianzaPayload{codigo:string;nombre:string;descripcion:string}
export interface TipoCartaFianzaResponse{data:TipoCartaFianza[];current_page:number;last_page:number;total:number}
