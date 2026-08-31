export interface CuentaRubro{id:number;cta_contable:string;descripcion:string;text?:string}
export interface RubroCajaChica{id:number;codigo:string;detalle:string;cuenta_contable_id:number|null;movilidad:boolean;covid:boolean;activo:boolean;cuenta_contable?:CuentaRubro}
export type RubroCajaChicaPayload=Omit<RubroCajaChica,'id'|'cuenta_contable'>
export interface RubrosCajaChicaResponse{data:RubroCajaChica[];current_page:number;last_page:number;total:number}