import { apiRequest } from '@/services/auth'
export interface ProcesoOption { id:number;nombre:string;proveedores_count:number }
export interface ProveedorEvaluacion { id:number;razon_social:string;ruc:string;condiciones_guardadas:boolean;fecha_oferta?:string;moneda_id?:number;validez_oferta?:string;forma_pago?:string;forma_entrega?:string;garantia_calidad?:string;plazo_entrega?:string;detalle_servicio?:string;total_ofertado?:number }
export interface ItemEvaluacion { detalle_id:number;item_id:number;nombre:string;unidad:string;pedido_id:number;cantidad:number;precios:Record<number,number|null> }
export interface EvaluacionEconomica { id:number;nombre:string;proceso_id:number;proceso:string;observacion?:string;estado:number;estado_nombre:string;usuario_evalua:string;proveedores_count:number;propuestas_count:number;fecha:string;proveedores?:ProveedorEvaluacion[];items?:ItemEvaluacion[];ganador_id?:number }
export interface EvaluacionesResponse { data:EvaluacionEconomica[];total:number;page:number;last_page:number;estados:Record<string,string>;procesos:ProcesoOption[] }
export interface CondicionesPayload { fecha_oferta:string;moneda_id:number;validez_oferta:string;forma_pago:string;forma_entrega:string;garantia_calidad:string;plazo_entrega:string;detalle_servicio:string }
const base='/lecturita/mia/logistica/evaluaciones-economicas'
export function listarEvaluaciones(criterio:string,estado:string,page:number){const q=new URLSearchParams({criterio,estado,page:String(page)});return apiRequest<EvaluacionesResponse>(`${base}?${q}`)}
export function crearEvaluacion(data:{nombre:string;proceso_id:number;observacion:string}){return apiRequest<void>(base,{method:'POST',body:JSON.stringify(data)})}
export function obtenerEvaluacion(id:number){return apiRequest<EvaluacionEconomica>(`${base}/${id}`)}
export function guardarCondiciones(id:number,proveedorId:number,data:CondicionesPayload){return apiRequest<void>(`${base}/${id}/proveedores/${proveedorId}/condiciones`,{method:'PUT',body:JSON.stringify(data)})}
export function guardarPrecios(id:number,proveedorId:number,items:Array<{detalle_id:number;item_id:number;pedido_id:number;cantidad:number;precio:number|null}>){return apiRequest<void>(`${base}/${id}/proveedores/${proveedorId}/precios`,{method:'PUT',body:JSON.stringify({items})})}
export function cambiarEvaluacion(id:number,action:'finalizar'|'anular'){return apiRequest<void>(`${base}/${id}/${action}`,{method:'POST'})}
export function definirGanador(id:number,proveedorId:number){return apiRequest<void>(`${base}/${id}/ganador`,{method:'POST',body:JSON.stringify({proveedor_id:proveedorId})})}
export function urlCuadroComparativo(id:number){return `${base}/${id}/cuadro-comparativo`}
