import { apiRequest } from '@/services/auth'
import type { MuestraAgua, MuestraPayload, MuestrasResponse } from '../interfaces/muestras.interface'




const base='/dana/control-calidad/muestras'
export function listarMuestras(filters:{criterio:string;fecha_desde:string;fecha_hasta:string;page:number}){const q=new URLSearchParams({...filters,page:String(filters.page)});return apiRequest<MuestrasResponse>(`${base}?${q}`)}
export function guardarMuestra(data:MuestraPayload,id?:number){return apiRequest<MuestraAgua>(id?`${base}/${id}`:base,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarMuestra(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
