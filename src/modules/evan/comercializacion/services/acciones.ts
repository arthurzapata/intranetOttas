import { apiRequest } from '@/services/auth'
import type { Accion, Page } from '../interfaces/acciones.interface'



const base='/lecturita/evan/comercializacion/acciones'
export const listarAcciones=(criterio:string,seccion:string,page:number)=>apiRequest<Page>(`${base}?criterio=${encodeURIComponent(criterio)}&seccion_id=${seccion}&page=${page}`)
export const crearAccion=(data:Record<string,unknown>)=>apiRequest<Accion>(base,{method:'POST',body:JSON.stringify(data)})
