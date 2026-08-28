import { apiRequest } from '@/services/auth'
import type { AccionFlujo, Page } from '../interfaces/accionesFlujo.interface'



const base='/lecturita/evan/comercializacion/acciones-flujo'
const qs=(x:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(x).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarAccionesFlujo=(f:Record<string,string|number>)=>apiRequest<Page>(`${base}?${qs(f)}`)
export const crearAccionFlujo=(data:Record<string,unknown>)=>apiRequest<AccionFlujo>(base,{method:'POST',body:JSON.stringify(data)})
export const actualizarAccionFlujo=(id:number,data:Record<string,unknown>)=>apiRequest<AccionFlujo>(`${base}/${id}`,{method:'PUT',body:JSON.stringify(data)})
export const eliminarAccionFlujo=(id:number)=>apiRequest<void>(`${base}/${id}`,{method:'DELETE'})
