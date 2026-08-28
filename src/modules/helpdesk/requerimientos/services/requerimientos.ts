import { apiRequest } from '@/services/auth'
import type { Page, Requerimiento } from '../interfaces/requerimientos.interface'
const qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarRequerimientos=(f:Record<string,string|number>)=>apiRequest<Page>(`/helpdesk/requerimientos?${qs(f)}`)
export const detalleRequerimiento=(id:number)=>apiRequest<Requerimiento>(`/helpdesk/requerimientos/${id}`)
export const registrarRequerimiento=(data:FormData)=>apiRequest<{id:number}>('/helpdesk/requerimientos',{method:'POST',body:data})
export const recibirRequerimiento=(id:number)=>apiRequest<void>(`/helpdesk/requerimientos/${id}/recibir`,{method:'POST'})
export const liberarRequerimiento=(id:number)=>apiRequest<void>(`/helpdesk/requerimientos/${id}/liberar`,{method:'POST'})
export const finalizarRequerimiento=(id:number,data:FormData)=>apiRequest<void>(`/helpdesk/requerimientos/${id}/finalizar`,{method:'POST',body:data})
