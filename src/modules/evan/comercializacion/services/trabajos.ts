import { apiRequest } from '@/services/auth'
import type { Trabajo, Page } from '../interfaces/trabajos.interface'





const qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarTrabajos=(f:Record<string,string|number>)=>apiRequest<Page>(`/evan/comercializacion/trabajos?${qs(f)}`)
export const detalleTrabajo=(id:number)=>apiRequest<Trabajo>(`/evan/comercializacion/trabajos/${id}`)
export const guardarTrabajo=(id:number|null,data:Record<string,string|number>)=>apiRequest<{id:number}>(`/evan/comercializacion/trabajos${id?'/'+id:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})
export const eliminarTrabajo=(id:number)=>apiRequest<void>(`/evan/comercializacion/trabajos/${id}`,{method:'DELETE'})
