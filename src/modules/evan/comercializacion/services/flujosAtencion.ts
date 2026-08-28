import { apiRequest } from '@/services/auth'
import type { FlujoAtencion, Page } from '../interfaces/flujosAtencion.interface'


const base='/lecturita/evan/comercializacion/flujos-atencion'
export const listarFlujos=(criterio:string,tipo:string,page:number)=>apiRequest<Page>(`${base}?criterio=${encodeURIComponent(criterio)}&tipo=${tipo}&page=${page}`)
export const crearFlujo=(data:Record<string,unknown>)=>apiRequest<FlujoAtencion>(base,{method:'POST',body:JSON.stringify(data)})
export const actualizarFlujo=(id:number,data:Record<string,unknown>)=>apiRequest<FlujoAtencion>(`${base}/${id}`,{method:'PUT',body:JSON.stringify(data)})
