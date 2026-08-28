import { apiRequest } from '@/services/auth'
import type { EvaluacionEconomica, EvaluacionesResponse, CondicionesPayload } from '../interfaces/evaluacionesEconomicas.interface'
const base='/mia/logistica/evaluaciones-economicas'
export function listarEvaluaciones(criterio:string,estado:string,page:number){const q=new URLSearchParams({criterio,estado,page:String(page)});return apiRequest<EvaluacionesResponse>(`${base}?${q}`)}
export function crearEvaluacion(data:{nombre:string;proceso_id:number;observacion:string}){return apiRequest<void>(base,{method:'POST',body:JSON.stringify(data)})}
export function obtenerEvaluacion(id:number){return apiRequest<EvaluacionEconomica>(`${base}/${id}`)}
export function guardarCondiciones(id:number,proveedorId:number,data:CondicionesPayload){return apiRequest<void>(`${base}/${id}/proveedores/${proveedorId}/condiciones`,{method:'PUT',body:JSON.stringify(data)})}
export function guardarPrecios(id:number,proveedorId:number,items:Array<{detalle_id:number;item_id:number;pedido_id:number;cantidad:number;precio:number|null}>){return apiRequest<void>(`${base}/${id}/proveedores/${proveedorId}/precios`,{method:'PUT',body:JSON.stringify({items})})}
export function cambiarEvaluacion(id:number,action:'finalizar'|'anular'){return apiRequest<void>(`${base}/${id}/${action}`,{method:'POST'})}
export function definirGanador(id:number,proveedorId:number){return apiRequest<void>(`${base}/${id}/ganador`,{method:'POST',body:JSON.stringify({proveedor_id:proveedorId})})}
export function urlCuadroComparativo(id:number){return `${base}/${id}/cuadro-comparativo`}
