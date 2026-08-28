import { apiRequest } from '@/services/auth'
import type { DepartamentoOption, Provincia, ProvinciasResponse, ProvinciaPayload } from '../interfaces/provincias.interface'
const base='/lecturita/mia/rrhh/maestros/provincias'

export function listarProvincias(criterio:string,page:number){const query=new URLSearchParams({criterio,page:String(page)});return apiRequest<ProvinciasResponse>(`${base}?${query}`)}
export function listarDepartamentosActivos(){return apiRequest<DepartamentoOption[]>('/lecturita/mia/rrhh/maestros/departamentos/opciones')}
export function guardarProvincia(id:number|null,payload:ProvinciaPayload){return apiRequest<Provincia>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export function cambiarEstadoProvincia(id:number){return apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})}
