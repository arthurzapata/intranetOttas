export interface OpcionEgpNaturaleza { codigo:string; nombre:string }
export interface CuentaEgpNaturalezaOption { id:number; cta_contable:string; descripcion:string; naturaleza?:string }
export interface PlantillaEgpNaturaleza { id:number; codigogrupo:string; codigogrupo_label:string; cuenta_contable_id:number; cuenta_contable:CuentaEgpNaturalezaOption|null; detalle:string; codigocriterio:string; codigocriterio_label:string; estado:boolean }
export interface PlantillaEgpNaturalezaPayload { codigogrupo:string; cuenta_contable_id:number; detalle:string; codigocriterio:string; estado:boolean }
export interface PlantillaEgpNaturalezaResponse { data:PlantillaEgpNaturaleza[]; current_page:number; last_page:number; total:number; grupos:OpcionEgpNaturaleza[]; criterios:OpcionEgpNaturaleza[] }
