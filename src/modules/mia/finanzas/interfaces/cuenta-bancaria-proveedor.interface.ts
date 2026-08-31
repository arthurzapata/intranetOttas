export interface ProveedorFinanzas{id:number;ruc:string;razon_social:string;direccion?:string;email?:string;telefono?:string;text?:string;texto?:string}
export interface BancoProveedor{id:number;codigo:string;descripcion:string}
export interface MonedaProveedor{id:number;nombre:string}
export interface CuentaBancariaProveedor{id:number;proveedor_id:number;banco_id:number;banco:string;banco_codigo?:string;moneda_id:number;moneda:string;tipo_cuenta:'AHORROS'|'CORRIENTE'|'DETRACCIONES'|'OTRA';tipo_cuenta_texto?:string;numero_cuenta:string;cci?:string|null;principal:boolean;es_cuenta_detracciones:boolean;activo:boolean}
export interface CuentaBancariaPayload{proveedor_id:number;banco_id:number;moneda_id:number;tipo_cuenta:'AHORROS'|'CORRIENTE'|'DETRACCIONES'|'OTRA';numero_cuenta:string;cci:string;principal:boolean;es_cuenta_detracciones:boolean}
export interface CuentaBancariaOpciones{bancos:BancoProveedor[];monedas:MonedaProveedor[]}
export interface CuentasProveedorResponse{proveedor:ProveedorFinanzas;data:CuentaBancariaProveedor[]}
