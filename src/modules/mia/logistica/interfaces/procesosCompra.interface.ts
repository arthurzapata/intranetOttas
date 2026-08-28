export interface EtapaProceso{id:number;nombre:string;fecha_inicio?:string;fecha_fin?:string;orden?:number}
export interface PedidoProceso{id:number;informacion?:string;tipo?:string;fecha?:string}
export interface SeguimientoProceso{id:number;usuario?:string;proveedor?:string;resultado?:string;comentario?:string;comentario_logistica?:string;comentario_proveedor?:string;fecha:string}
export interface ProcesoCompra{id:number;nombre:string;descripcion?:string;tipo:'a'|'m'|'s';inicio?:string;fin?:string;registro?:string;estado:number;estado_nombre:string;estado_etapa:number;etapa_nombre?:string;postores_count:number;created_at:string;puede_editar?:boolean;puede_publicar?:boolean;puede_avanzar?:boolean;puede_enviar_validacion?:boolean;puede_declarar_desierto?:boolean;puede_generar_orden?:boolean;pedidos?:PedidoProceso[];etapas?:EtapaProceso[];seguimiento?:SeguimientoProceso[]}
export interface ProcesoOptions{estados:Array<{id:number;nombre:string}>;etapas:Array<{id:number;nombre:string}>;pedidos:Array<PedidoProceso>}
export interface ProcesoResponse{data:ProcesoCompra[];total:number;page:number;last_page:number;options:ProcesoOptions}
