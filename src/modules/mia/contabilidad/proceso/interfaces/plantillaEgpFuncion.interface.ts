export interface OpcionEgp { codigo:string; nombre:string }
export interface CuentaEgpFuncionOption { id:number; cta_contable:string; descripcion:string; naturaleza?:string }
export interface PlantillaEgpFuncion { id:number; codigogrupo:string; codigogrupo_label:string; cuenta_contable_id:number; cuenta_contable:CuentaEgpFuncionOption|null; detalle:string; codigocriterio:string; codigocriterio_label:string; estado:boolean }
export interface PlantillaEgpFuncionPayload { codigogrupo:string; cuenta_contable_id:number; detalle:string; codigocriterio:string; estado:boolean }
export interface PlantillaEgpFuncionResponse { data:PlantillaEgpFuncion[]; current_page:number; last_page:number; total:number; grupos:OpcionEgp[]; criterios:OpcionEgp[] }
