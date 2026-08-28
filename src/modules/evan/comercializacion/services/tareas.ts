import { apiRequest } from '@/services/auth'
import type { Tarea, Page } from '../interfaces/tareas.interface'






const qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarTareas=(f:Record<string,string|number>)=>apiRequest<Page>(`/lecturita/evan/comercializacion/tareas?${qs(f)}`)
export const detalleTarea=(id:number)=>apiRequest<Tarea>(`/lecturita/evan/comercializacion/tareas/${id}`)
export const recibirTarea=(id:number)=>apiRequest<void>(`/lecturita/evan/comercializacion/tareas/${id}/recibir`,{method:'POST'})
export const liberarTarea=(id:number)=>apiRequest<void>(`/lecturita/evan/comercializacion/tareas/${id}/liberar`,{method:'POST'})
export const derivarTarea=(id:number,data:Record<string,string|number>)=>apiRequest<void>(`/lecturita/evan/comercializacion/tareas/${id}/derivar`,{method:'POST',body:JSON.stringify(data)})
export const finalizarTarea=(id:number,data:FormData)=>apiRequest<void>(`/lecturita/evan/comercializacion/tareas/${id}/finalizar`,{method:'POST',body:data})
