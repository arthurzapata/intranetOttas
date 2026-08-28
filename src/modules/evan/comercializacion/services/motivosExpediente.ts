import { apiRequest } from '@/services/auth'
import type { Motivo, Page } from '../interfaces/motivosExpediente.interface'



const base='/lecturita/evan/comercializacion/motivos-expediente'
export const listarMotivos=(criterio:string,tipo:string,page:number)=>apiRequest<Page>(`${base}?criterio=${encodeURIComponent(criterio)}&tipo_expediente_id=${tipo}&page=${page}`)
export const crearMotivo=(data:Record<string,unknown>)=>apiRequest<Motivo>(base,{method:'POST',body:JSON.stringify(data)})
export const actualizarMotivo=(id:number,data:Record<string,unknown>)=>apiRequest<Motivo>(`${base}/${id}`,{method:'PUT',body:JSON.stringify(data)})
