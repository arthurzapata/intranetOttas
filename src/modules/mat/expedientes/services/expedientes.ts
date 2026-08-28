import { apiRequest } from '@/services/auth'
import type { Expediente, RespuestaExpedientes } from '../interfaces/expedientes.interface'








export function listarExpedientes(filters:Record<string,string|number>){const query=new URLSearchParams();Object.entries(filters).forEach(([key,value])=>{if(value!==''&&value!==undefined)query.set(key,String(value))});return apiRequest<RespuestaExpedientes>(`/lecturita/mat/expedientes?${query}`)}
export function detalleExpediente(id:number){return apiRequest<Expediente>(`/lecturita/mat/expedientes/${id}`)}
export function registrarExpediente(data:FormData){return apiRequest<{id:number}>(`/lecturita/mat/expedientes`,{method:'POST',body:data})}
