import { apiRequest } from '@/services/auth'
export interface Proveedor{id:number;ruc:string;razon_social:string;celular:string;telefono_fijo?:string;email:string;direccion?:string;estado?:boolean;procesos_count?:number;ordenes_count?:number}
export interface ProveedorResponse{data:Proveedor[];total:number;page:number;last_page:number}
export function listarProveedores(criterio:string,page:number){return apiRequest<ProveedorResponse>(`/lecturita/mia/logistica/proveedores?criterio=${encodeURIComponent(criterio)}&page=${page}`)}
export function guardarProveedor(id:number|null,data:Omit<Proveedor,'id'>){return apiRequest<void>(`/lecturita/mia/logistica/proveedores${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarProveedor(id:number){return apiRequest<void>(`/lecturita/mia/logistica/proveedores/${id}`,{method:'DELETE'})}
