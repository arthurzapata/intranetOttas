import { apiRequest } from '@/services/auth'
import type { InterrupcionOperacional, InterrupcionesResponse, FiltrosInterrupcion } from '../interfaces/interrupciones.interface'




const base='/dana/interrupciones'
export function listarInterrupciones(filters:FiltrosInterrupcion){const q=new URLSearchParams({...filters,page:String(filters.page)});return apiRequest<InterrupcionesResponse>(`${base}?${q}`)}
export function obtenerInterrupcion(id:number){return apiRequest<InterrupcionOperacional>(`${base}/${id}`)}
export function restablecerInterrupcion(id:number,data:{fecha_restablecimiento:string;observacion:string}){return apiRequest<InterrupcionOperacional>(`${base}/${id}/restablecer`,{method:'POST',body:JSON.stringify(data)})}
