import { apiRequest } from '@/services/auth'
import type { SimpleCatalogItem, SimpleCatalogResponse } from '@/interfaces/simpleCatalog'
const base='/dana/control-calidad/unidades'
export function listarUnidades(params:{criterio:string;page:number}){const q=new URLSearchParams({criterio:params.criterio,page:String(params.page)});return apiRequest<SimpleCatalogResponse>(`${base}?${q}`)}
export function crearUnidad(payload:{nombre:string;descripcion:string}){return apiRequest<SimpleCatalogItem>(base,{method:'POST',body:JSON.stringify(payload)})}
export function actualizarUnidad(id:number,payload:{nombre:string;descripcion:string}){return apiRequest<SimpleCatalogItem>(`${base}/${id}`,{method:'PUT',body:JSON.stringify(payload)})}
export function eliminarUnidad(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
