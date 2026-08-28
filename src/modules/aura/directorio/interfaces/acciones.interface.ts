export type AccionTipo='acuerdo'|'disposicion'|'pedido'
export interface AccionArchivo{id:number;archivo:string;created_at?:string;usuario?:string}
export interface AccionVoto{id:number;usuario_id:number;usuario:string;aprobado:boolean;comentario?:string|null;created_at:string;vigente:boolean}
export interface AccionDirectorio{id:number;tipo:AccionTipo;descripcion:string;fecha?:string|null;fecha_atencion?:string|null;atencion?:string|null;requiere_archivo?:boolean;sesion:{id:number;numeracion:string;fecha_sesion:string};agenda?:{id:number;punto_agenda:string};responsable?:string|null;director?:string|null;archivos:AccionArchivo[];votos?:AccionVoto[];votos_aprobados?:number;total_directores?:number;puede_votar?:boolean;ya_voto?:boolean;puede_atender?:boolean}
export interface AccionPage{data:AccionDirectorio[];current_page:number;last_page:number;total:number}
