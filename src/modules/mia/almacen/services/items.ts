import { apiRequest } from '@/services/auth'
import type { ItemsResponse } from '../interfaces/items.interface'
const base='/mia/logistica/items'
export function listarItems(criterio:string,page:number){return apiRequest<ItemsResponse>(`${base}?criterio=${encodeURIComponent(criterio)}&page=${page}`)}
export function guardarItem(id:number|null,data:FormData){return apiRequest<void>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:data})}
