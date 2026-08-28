import { apiRequest } from '@/services/auth'
import type { PersonaAlmacen, AlmacenesResponse, AlmacenPayload } from '../interfaces/almacenes.interface'
const base='/lecturita/mia/logistica/almacenes'
export function listarAlmacenes(criterio:string,page:number){return apiRequest<AlmacenesResponse>(`${base}?criterio=${encodeURIComponent(criterio)}&page=${page}`)}
export function buscarEncargados(search:string){return apiRequest<PersonaAlmacen[]>(`${base}/encargados?search=${encodeURIComponent(search)}`)}
export function guardarAlmacen(id:number|null,data:AlmacenPayload){return apiRequest<void>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarAlmacen(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
