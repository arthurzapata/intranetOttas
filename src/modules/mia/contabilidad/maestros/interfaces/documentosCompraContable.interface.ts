export type TipoOperacionDocumento='0'|'1'|'2'
export type AfectacionDocumento='S'|'N'
export interface CuentaContableOption { id:number; cta_contable:string; descripcion:string }
export interface DocumentoCompraContable { id:number; codigo:string; nombre:string; tipoope:TipoOperacionDocumento; afectacion:AfectacionDocumento; cuenta_contable_prov_mn:number|null; cuenta_contable_prov_me:number|null; cuenta_mn:string|null; cuenta_me:string|null; detraccion:boolean; activo:boolean }
export interface DocumentosCompraContableResponse { data:DocumentoCompraContable[]; total:number; current_page:number; last_page:number }
export interface DocumentoCompraContablePayload { codigo:string; nombre:string; tipoope:TipoOperacionDocumento; afectacion:AfectacionDocumento; cuenta_contable_prov_mn:number|null; cuenta_contable_prov_me:number|null; detraccion:boolean }
