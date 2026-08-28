import { apiRequest } from '@/services/auth'
import type { TipoTrabajo, Page } from '../interfaces/tiposTrabajo.interface'


const base='/evan/comercializacion/tipos-trabajo'
export const listarTiposTrabajo=(criterio:string,estado:string,page:number)=>apiRequest<Page>(`${base}?criterio=${encodeURIComponent(criterio)}&estado=${estado}&page=${page}`)
export const crearTipoTrabajo=(data:Record<string,unknown>)=>apiRequest<TipoTrabajo>(base,{method:'POST',body:JSON.stringify(data)})
export const actualizarTipoTrabajo=(id:number,data:Record<string,unknown>)=>apiRequest<TipoTrabajo>(`${base}/${id}`,{method:'PUT',body:JSON.stringify(data)})
