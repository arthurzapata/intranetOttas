export type ValorAuditoria = string|number|boolean|null|ValorAuditoria[]|{[key:string]:ValorAuditoria}
export interface BitacoraFinanzas { id:number; fecha:string; accion:string; accion_formateada:string; entidad:string; modelo_nombre:string; tabla:string; registro_id:string|number|null; descripcion:string|null; usuario_nombre:string|null; usuario_email:string|null; user_id:number|null; ip_origen:string|null; cambios:Record<string,ValorAuditoria>; valor_anterior?:Record<string,ValorAuditoria>; valor_nuevo?:Record<string,ValorAuditoria> }
export interface BitacoraFiltros { entidad:string; accion_id:string; tabla:string; user_id:string; fecha_desde:string; fecha_hasta:string; buscar:string }
export interface BitacoraResponse { data:BitacoraFinanzas[]; current_page:number; last_page:number; total:number; entidades:Record<string,string>; acciones:Record<string,string>; tablas:string[] }

