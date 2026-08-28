export type ResultadoTecnico='aprobado'|'rechazado'|'sin evaluacion'
export interface DocumentoOferta{id:number;nombre:string;tipo?:string;fecha?:string}
export interface ValidacionOferta{id:number;resultado:ResultadoTecnico;comentario?:string;ronda:number;fecha:string;usuario?:string;correo_enviado?:string}
export interface ProveedorOferta{id:number;ruc:string;razon_social:string;email?:string;documentos:DocumentoOferta[];validacion?:ValidacionOferta;historial:ValidacionOferta[]}
export interface ProcesoEvaluacion{id:number;nombre:string;descripcion?:string;inicio?:string;fin?:string;estado:number;estado_nombre:string;etapa_nombre?:string;postores_count:number;created_at:string;proveedores?:ProveedorOferta[];pedidos?:Array<{id:number;informacion?:string}>}
export interface EvaluacionResponse{data:ProcesoEvaluacion[];total:number;page:number;last_page:number;estados:Array<{id:number;nombre:string}>;etapas:Array<{id:number;nombre:string}>}
