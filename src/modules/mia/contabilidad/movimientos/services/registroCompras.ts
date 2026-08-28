import { apiRequest } from '@/services/auth'
import type { FiltrosCompra, ProveedorCompra, RegistroCompra, RegistroCompraPayload, RegistroComprasResponse } from '../interfaces/registroCompras.interface'
const base='/mia/contabilidad/movimientos/registro-compras'
export function listarRegistroCompras(f:FiltrosCompra,page:number){const q=new URLSearchParams({page:String(page)});Object.entries(f).forEach(([k,v])=>v&&q.set(k,v));return apiRequest<RegistroComprasResponse>(`${base}?${q}`)}
export const buscarProveedoresCompra=(q:string)=>apiRequest<ProveedorCompra[]>(`${base}/proveedores?q=${encodeURIComponent(q)}`)
export const guardarRegistroCompra=(id:number|null,p:RegistroCompraPayload)=>apiRequest<RegistroCompra>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(p)})
export const cambiarEstadoRegistroCompra=(id:number)=>apiRequest<RegistroCompra>(`${base}/${id}/estado`,{method:'PATCH'})
