import { apiRequest } from '@/services/auth'
export type TipoEntidad='pedido'|'proceso'|'evaluacion'|'orden'|'tabla_maestra'
export interface EstadoLogistico { uid:string;tipo:TipoEntidad|string;id:number;referencia:string;estado:string|number;codigo?:string;tipo_orden?:number;tabla_id?:number;serie?:string;cta_33_34?:number;cta_39?:number;cta_68?:number;cta_39_rev?:number;cta_68_rev?:number;activo?:boolean }
export interface EstadosResponse { data:EstadoLogistico[];total:number;page:number;last_page:number;catalogos:Record<string,Record<string,string>>;conceptos:Record<string,string>;resumen:Record<string,number> }
export interface MaestroPayload { concepto:number;codigo:string;descripcion:string;serie:string;cta_33_34?:number;cta_39?:number;cta_68?:number;cta_39_rev?:number;cta_68_rev?:number;activo:boolean }
const base='/lecturita/mia/logistica/estados'
export function listarEstados(concepto:string,valor:string,page:number){const q=new URLSearchParams({concepto,valor,page:String(page)});return apiRequest<EstadosResponse>(`${base}?${q}`)}
export function actualizarEstado(tipo:string,id:number,estado:string|number){return apiRequest<void>(`${base}/operativo`,{method:'PUT',body:JSON.stringify({tipo,id,estado})})}
export function guardarMaestro(id:number|null,data:MaestroPayload){return apiRequest<void>(`${base}/tabla-maestra${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
