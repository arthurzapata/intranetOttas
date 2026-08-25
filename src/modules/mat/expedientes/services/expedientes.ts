import { apiRequest } from '@/services/auth'

export interface Opcion { id:number; nombre:string; codigo?:string; tipo_expediente_id?:number }
export interface Parte { id:number; tipo_parte:string; nombre:string; documento?:string }
export interface Adjunto { id:number; descripcion?:string; nombre_original:string; tamano_kb?:number; url?:string }
export interface Historial { id:number; etapa:string; fecha_inicio:string; fecha_fin?:string; estado?:string }
export interface Expediente {
  id:number; numero_expediente:string; numero_expediente_judicial?:string; tipo_expediente_id:number
  subtipo_expediente_id:number; tipo?:string; subtipo?:string; estado?:string; estado_color?:string
  fecha_inicio:string; fecha_cierre?:string; juzgado?:string; oficina?:string; etapa?:string
  observaciones?:string; partes_count?:number; adjuntos_count?:number; alertas_count?:number
  partes?:Parte[]; adjuntos?:Adjunto[]; historial?:Historial[]
}
export interface OpcionesExpediente { tipos:Opcion[]; subtipos:Opcion[]; estados:Opcion[]; juzgados:Opcion[]; oficinas:Opcion[] }
export interface RespuestaExpedientes { data:Expediente[]; total:number; page:number; last_page:number; options:OpcionesExpediente; summary?:{activos:number;alertas:number;cerrados:number} }
export function listarExpedientes(filters:Record<string,string|number>){const query=new URLSearchParams();Object.entries(filters).forEach(([key,value])=>{if(value!==''&&value!==undefined)query.set(key,String(value))});return apiRequest<RespuestaExpedientes>(`/lecturita/mat/expedientes?${query}`)}
export function detalleExpediente(id:number){return apiRequest<Expediente>(`/lecturita/mat/expedientes/${id}`)}
export function registrarExpediente(data:FormData){return apiRequest<{id:number}>(`/lecturita/mat/expedientes`,{method:'POST',body:data})}
