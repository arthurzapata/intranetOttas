export interface MonedaTipoCambio{id:number;nombre:string;codigo?:string;estado:boolean}
export interface TipoCambio{id:number;moneda_id:number;moneda?:MonedaTipoCambio;fecha:string;compra:number;venta:number;activo:boolean}
export interface TipoCambioPayload{moneda_id:number;fecha:string;compra:number;venta:number}
export interface TipoCambioFiltros{moneda_id:string;fecha_desde:string;fecha_hasta:string;estado:string}
export interface TipoCambioResponse{data:TipoCambio[];current_page:number;last_page:number;total:number;monedas:MonedaTipoCambio[];monedas_activas:MonedaTipoCambio[]}
