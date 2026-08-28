export interface Option{id:number|string;nombre:string}
export interface Movimiento{id:number;estado:string;usuario?:string;fecha:string}
export interface Participante{id:number;nombre:string;rol:'atendido'|'colaborador';oficina?:string}
export interface Requerimiento{id:number;observacion:string;estado:'sin recibir'|'liberado'|'recibido'|'finalizado';fecha_iniciado:string;fecha_finalizado?:string;origen?:string;solicitante?:string;oficina?:string;empresa?:string;responsable?:string;categoria?:string;solucion?:string;archivo?:string;archivo_finalizado?:string;movimientos?:Movimiento[];participantes?:Participante[];puede_recibir?:boolean;puede_liberar?:boolean;puede_finalizar?:boolean}
export interface Options{estados:Option[];origenes:Option[];categorias:Option[];usuarios:Option[]}
export interface Page{data:Requerimiento[];total:number;page:number;last_page:number;options:Options;summary?:{sin_recibir:number;recibidos:number;finalizados:number}}
