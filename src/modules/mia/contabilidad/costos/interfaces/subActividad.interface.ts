export interface CostoOption { id:number; nombre:string }
export interface SubActividad { id:number; nombre:string; descripcion:string|null; actividad_id:number; inductor_id:number; actividad?:CostoOption|null; inductor?:CostoOption|null; activo:boolean }
export interface SubActividadPayload { nombre:string; descripcion:string; actividad_id:number; inductor_id:number }
export interface SubActividadesResponse { data:SubActividad[]; current_page:number; last_page:number; per_page:number; total:number; actividades:CostoOption[]; inductores:CostoOption[] }
