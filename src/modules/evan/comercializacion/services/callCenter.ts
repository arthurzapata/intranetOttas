import { apiRequest } from '@/services/auth'
import type { Ticket, Page } from '../interfaces/callCenter.interface'







const qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
const base='/lecturita/evan/comercializacion/call-center'
export const listarTickets=(f:Record<string,string|number>)=>apiRequest<Page>(`${base}?${qs(f)}`)
export const detalleTicket=(id:number)=>apiRequest<Ticket>(`${base}/${id}`)
export const crearTicket=(data:Record<string,unknown>)=>apiRequest<Ticket>(base,{method:'POST',body:JSON.stringify(data)})
export const recibirTicket=(id:number)=>apiRequest<void>(`${base}/${id}/recibir`,{method:'POST'})
export const liberarTicket=(id:number)=>apiRequest<void>(`${base}/${id}/liberar`,{method:'POST'})
export const agregarInteraccion=(id:number,data:FormData)=>apiRequest<void>(`${base}/${id}/interacciones`,{method:'POST',body:data})
export const crearTareaTicket=(id:number,data:Record<string,unknown>)=>apiRequest<void>(`${base}/${id}/tareas`,{method:'POST',body:JSON.stringify(data)})
export const cerrarTicket=(id:number,data:Record<string,unknown>)=>apiRequest<void>(`${base}/${id}/cerrar`,{method:'POST',body:JSON.stringify(data)})
export const eliminarTicket=(id:number)=>apiRequest<void>(`${base}/${id}`,{method:'DELETE'})
