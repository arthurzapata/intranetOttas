import { apiRequest } from '@/services/auth'
import type { Option, Solicitud, Page } from '../interfaces/solicitudes.interface'





const qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarSolicitudes=(f:Record<string,string|number>)=>apiRequest<Page>(`/lecturita/evan/comercializacion/solicitudes?${qs(f)}`)
export const detalleSolicitud=(id:number)=>apiRequest<Solicitud>(`/lecturita/evan/comercializacion/solicitudes/${id}`)
export const registrarSolicitud=(data:Record<string,string|number>)=>apiRequest<{id:number}>('/lecturita/evan/comercializacion/solicitudes',{method:'POST',body:JSON.stringify(data)})
export const conexionesCliente=(clienteId:number)=>apiRequest<Option[]>(`/lecturita/evan/comercializacion/clientes/${clienteId}/conexiones`)
export const anularSolicitud=(id:number)=>apiRequest<void>(`/lecturita/evan/comercializacion/solicitudes/${id}`,{method:'DELETE'})
