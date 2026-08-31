export interface CuentaPlantillaOption { id:number; cta_contable:string; descripcion:string; naturaleza?:string }
export interface GrupoBalanceOption { codigo:string; nombre:string }
export interface PlantillaBalanceGeneral { id:number; codgrupo:string; codgrupo_label:string; detalle:string; cuenta_contable_id:number; cuenta_contable:CuentaPlantillaOption|null; estado:boolean }
export interface PlantillaBalancePayload { codgrupo:string; detalle:string; cuenta_contable_id:number; estado:boolean }
export interface PlantillaBalanceResponse { data:PlantillaBalanceGeneral[]; current_page:number; last_page:number; total:number; grupos:GrupoBalanceOption[] }
