import { apiRequest } from '@/services/auth'
import type { UbigeoOption, CentroEnsenanza, CentrosResponse, CentroPayload } from '../interfaces/centrosEnsenanza.interface'
const base='/lecturita/mia/rrhh/maestros/centros-ensenanza'
export function listarCentros(criterio:string,page:number){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<CentrosResponse>(`${base}?${q}`)}
export function listarPaisesCentro(){return apiRequest<UbigeoOption[]>('/lecturita/mia/rrhh/maestros/paises/opciones')}
export function departamentosPorPais(id:number){return apiRequest<UbigeoOption[]>(`/lecturita/mia/rrhh/maestros/paises/${id}/departamentos`)}
export function provinciasPorDepartamento(id:number){return apiRequest<UbigeoOption[]>(`/lecturita/mia/rrhh/maestros/departamentos/${id}/provincias`)}
export function distritosPorProvincia(id:number){return apiRequest<UbigeoOption[]>(`/lecturita/mia/rrhh/maestros/provincias/${id}/distritos`)}
export function guardarCentro(id:number|null,payload:CentroPayload){return apiRequest<CentroEnsenanza>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export function cambiarEstadoCentro(id:number){return apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})}
