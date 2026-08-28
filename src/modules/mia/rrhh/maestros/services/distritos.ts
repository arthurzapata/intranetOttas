import { apiRequest } from '@/services/auth'
import type { DepartamentoDistrito, ProvinciaOption, Distrito, DistritosResponse, DistritoPayload } from '../interfaces/distritos.interface'
const base='/mia/rrhh/maestros/distritos'
export function listarDistritos(criterio:string,page:number){const query=new URLSearchParams({criterio,page:String(page)});return apiRequest<DistritosResponse>(`${base}?${query}`)}
export function listarProvinciasActivas(){return apiRequest<ProvinciaOption[]>('/mia/rrhh/maestros/provincias/opciones')}
export function guardarDistrito(id:number|null,payload:DistritoPayload){return apiRequest<Distrito>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export function cambiarEstadoDistrito(id:number){return apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})}
