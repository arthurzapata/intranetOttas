export interface AsientoTipoOption { id:number; nombre:string; diminutivo?:string }
export interface OrigenAsientoOption { id:number; nombre:string }
export interface CuentaAsientoOption { id:number; cta_contable:string; descripcion:string; naturaleza:'D'|'H' }
export interface AsientoTipo { id:number; tipo_documento:number; nroitem:number; descripcion:string; origen_comprobante_id:number; origen_comprobante?:OrigenAsientoOption|null; estado:boolean }
export interface AsientoTipoDetalle { id:number; asiento_id:number; nroitem:number; cuenta_contable_id:number; cta_contable:string|null; cta_descripcion:string|null; naturaleza:'D'|'H'; factor:number|string; estado:boolean }
export interface AsientoTipoOptions { tipos_documento:AsientoTipoOption[]; origenes:OrigenAsientoOption[] }
export interface AsientoTipoPayload { tipo_documento:number; descripcion:string; origen_comprobante_id:number }
export interface AsientoTipoDetallePayload { asiento_id:number; cuenta_contable_id:number; naturaleza:'D'|'H'; factor:number }
