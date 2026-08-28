import { apiRequest } from '@/services/auth'
import type { Option, Solicitud, Page } from '../interfaces/solicitudes.interface'





const qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarSolicitudes=(f:Record<string,string|number>)=>apiRequest<Page>(`/evan/comercializacion/solicitudes?${qs(f)}`)
export const detalleSolicitud=(id:number)=>apiRequest<Solicitud>(`/evan/comercializacion/solicitudes/${id}`)
export const registrarSolicitud=(data:Record<string,string|number>)=>apiRequest<{id:number}>('/evan/comercializacion/solicitudes',{method:'POST',body:JSON.stringify(data)})
export const conexionesCliente=(clienteId:number)=>apiRequest<Option[]>(`/evan/comercializacion/clientes/${clienteId}/conexiones`)
export const anularSolicitud=(id:number)=>apiRequest<void>(`/evan/comercializacion/solicitudes/${id}`,{method:'DELETE'})
