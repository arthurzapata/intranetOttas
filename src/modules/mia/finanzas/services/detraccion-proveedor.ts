import { apiRequest } from '@/services/auth'
import type { DepositoDetraccionPayload,DetraccionProveedor,DetraccionProveedorFiltros,DetraccionProveedorResponse,MovimientoDeposito } from '../interfaces/detraccion-proveedor.interface'
const base='/mia/finanzas/proveedores/detracciones'
export function listarDetraccionesProveedor(f:DetraccionProveedorFiltros,page=1){const q=new URLSearchParams({page:String(page)});Object.entries(f).forEach(([k,v])=>{if(v)q.set(k,v)});return apiRequest<DetraccionProveedorResponse>(`${base}?${q}`)}
export const detalleDetraccionProveedor=(id:number)=>apiRequest<DetraccionProveedor>(`${base}/${id}`)
export const buscarMovimientosDetraccion=(q:string)=>apiRequest<MovimientoDeposito[]>(`${base}/movimientos?q=${encodeURIComponent(q)}`)
export const registrarDepositoDetraccion=(id:number,data:DepositoDetraccionPayload)=>apiRequest<void>(`${base}/${id}/depositos`,{method:'POST',body:JSON.stringify(data)})
export const anularDepositoDetraccion=(id:number)=>apiRequest<void>(`${base}/depositos/${id}/anular`,{method:'PATCH',body:JSON.stringify({})})
