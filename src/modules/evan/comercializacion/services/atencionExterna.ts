import { apiRequest } from '@/services/auth'
import type { PreTicket, Page } from '../interfaces/atencionExterna.interface'




const qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarPreTickets=(f:Record<string,string|number>)=>apiRequest<Page>(`/evan/comercializacion/atencion-externa?${qs(f)}`)
export const detallePreTicket=(id:number)=>apiRequest<PreTicket>(`/evan/comercializacion/atencion-externa/${id}`)
export const validarPreTicket=(id:number,data:Record<string,string|number>)=>apiRequest<{ticket_id:number}>(`/evan/comercializacion/atencion-externa/${id}/validar`,{method:'POST',body:JSON.stringify(data)})
export const eliminarPreTicket=(id:number)=>apiRequest<void>(`/evan/comercializacion/atencion-externa/${id}`,{method:'DELETE'})
