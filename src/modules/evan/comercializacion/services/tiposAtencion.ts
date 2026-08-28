import { apiRequest } from '@/services/auth'
import type { TipoAtencion, Page } from '../interfaces/tiposAtencion.interface'




const base='/lecturita/evan/comercializacion/tipos-atencion'
export const listarTipos=(criterio:string,page:number)=>apiRequest<Page>(`${base}?criterio=${encodeURIComponent(criterio)}&page=${page}`)
export const detalleTipo=(id:number)=>apiRequest<TipoAtencion>(`${base}/${id}`)
export const crearTipo=(data:{tipo:string;nombre:string})=>apiRequest<TipoAtencion>(base,{method:'POST',body:JSON.stringify(data)})
export const agregarPaso=(id:number,data:Record<string,unknown>)=>apiRequest<void>(`${base}/${id}/pasos`,{method:'POST',body:JSON.stringify(data)})
export const eliminarPaso=(id:number,paso:number)=>apiRequest<void>(`${base}/${id}/pasos/${paso}`,{method:'DELETE'})
