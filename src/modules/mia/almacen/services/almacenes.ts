import { apiRequest } from '@/services/auth'
export interface PersonaAlmacen { id:number; nombre:string; identificador:string }
export interface Almacen { id:number; nombre:string; codigo_avalon:string; encargado_id:number; encargado:string; telefono:string; direccion:string; por_defecto:boolean; documentos_count:number; estado?:boolean }
export interface AlmacenesResponse { data:Almacen[];total:number;page:number;last_page:number }
export type AlmacenPayload=Omit<Almacen,'id'|'encargado'|'documentos_count'>
const base='/lecturita/mia/logistica/almacenes'
export function listarAlmacenes(criterio:string,page:number){return apiRequest<AlmacenesResponse>(`${base}?criterio=${encodeURIComponent(criterio)}&page=${page}`)}
export function buscarEncargados(search:string){return apiRequest<PersonaAlmacen[]>(`${base}/encargados?search=${encodeURIComponent(search)}`)}
export function guardarAlmacen(id:number|null,data:AlmacenPayload){return apiRequest<void>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarAlmacen(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
