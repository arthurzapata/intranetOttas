import { apiRequest } from '@/services/auth'
import type { Proveedor, ProveedorResponse } from '../interfaces/proveedores.interface'
export function listarProveedores(criterio:string,page:number){return apiRequest<ProveedorResponse>(`/mia/logistica/proveedores?criterio=${encodeURIComponent(criterio)}&page=${page}`)}
export function guardarProveedor(id:number|null,data:Omit<Proveedor,'id'>){return apiRequest<void>(`/mia/logistica/proveedores${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarProveedor(id:number){return apiRequest<void>(`/mia/logistica/proveedores/${id}`,{method:'DELETE'})}
