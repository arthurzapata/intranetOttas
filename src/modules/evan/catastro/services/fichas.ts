import type { Campana, Listado, FichasListado, FichaPayload } from '../interfaces/fichas.interface'
import{apiRequest}from'@/services/auth'







const base='/lecturita/evan/catastro/campanas'
export const listarCampanas=(criterio='',page=1)=>apiRequest<Listado>(`${base}?criterio=${encodeURIComponent(criterio)}&page=${page}`)
export const crearCampana=(data:{nombre:string;sector_id:number})=>apiRequest<Campana>(base,{method:'POST',body:JSON.stringify(data)})
export const eliminarCampana=(id:number)=>apiRequest<void>(`${base}/${id}`,{method:'DELETE'})
export const finalizarCampana=(id:number)=>apiRequest<void>(`${base}/${id}/finalizar`,{method:'POST'})
export const listarFichas=(id:number,page=1)=>apiRequest<FichasListado>(`${base}/${id}/fichas?page=${page}`)
export const guardarFicha=(id:number,data:FichaPayload)=>apiRequest<void>(`${base}/fichas/${id}`,{method:'POST',body:JSON.stringify(data)})
