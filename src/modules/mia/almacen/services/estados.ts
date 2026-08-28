import { apiRequest } from '@/services/auth'
import type { EstadosResponse, MaestroPayload } from '../interfaces/estados.interface'
const base='/mia/logistica/estados'
export function listarEstados(concepto:string,valor:string,page:number){const q=new URLSearchParams({concepto,valor,page:String(page)});return apiRequest<EstadosResponse>(`${base}?${q}`)}
export function actualizarEstado(tipo:string,id:number,estado:string|number){return apiRequest<void>(`${base}/operativo`,{method:'PUT',body:JSON.stringify({tipo,id,estado})})}
export function guardarMaestro(id:number|null,data:MaestroPayload){return apiRequest<void>(`${base}/tabla-maestra${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
