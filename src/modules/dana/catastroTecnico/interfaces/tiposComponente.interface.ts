export interface TipoComponente { id:number; nombre:string; categoria:string; puntos:number; color:string; grosor:number; descripcion:string; icono_url?:string; componentes_count:number }
export interface TipoComponentePayload { nombre:string; categoria:string; puntos:number; color:string; grosor:number; descripcion:string; icono:File|null }
