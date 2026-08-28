import type { Manzana, Response, Payload } from '../interfaces/manzanas.interface'
import{apiRequest}from'@/services/auth'




const base='/lecturita/evan/catastro/sectores'
export function listarManzanas(sectorId:number,criterio='',page=1){const q=new URLSearchParams({page:String(page)});if(criterio)q.set('criterio',criterio);return apiRequest<Response>(`${base}/${sectorId}/manzanas?${q}`)}
export const crearManzana=(sectorId:number,data:Payload)=>apiRequest<Manzana>(`${base}/${sectorId}/manzanas`,{method:'POST',body:JSON.stringify(data)})
export const actualizarManzana=(sectorId:number,id:number,data:Payload)=>apiRequest<Manzana>(`${base}/${sectorId}/manzanas/${id}`,{method:'PUT',body:JSON.stringify(data)})
export const eliminarManzana=(sectorId:number,id:number)=>apiRequest<void>(`${base}/${sectorId}/manzanas/${id}`,{method:'DELETE'})
