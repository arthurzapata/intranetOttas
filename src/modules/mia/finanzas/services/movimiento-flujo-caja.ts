import { apiRequest } from '@/services/auth'
import type { FlujoCajaFiltros,FlujoCajaResponse,FlujoCatalogo,MovimientoFlujoCaja } from '../interfaces/movimiento-flujo-caja.interface'
const base='/mia/finanzas/movimientos-flujo-caja'
export function listarMovimientosFlujoCaja(f:FlujoCajaFiltros,page=1){const q=new URLSearchParams({page:String(page)});Object.entries(f).forEach(([k,v])=>{if(v)q.set(k,v)});return apiRequest<FlujoCajaResponse>(`${base}?${q}`)}
export const obtenerMovimientoFlujoCaja=(id:number)=>apiRequest<MovimientoFlujoCaja>(`${base}/${id}`)
export const buscarCuentasFlujoCaja=(q:string)=>apiRequest<FlujoCatalogo[]>(`${base}/cuentas-tesoreria?q=${encodeURIComponent(q)}`)
export const anularMovimientoFlujoCaja=(id:number,observacion_anulacion:string)=>apiRequest<void>(`${base}/${id}/anular`,{method:'POST',body:JSON.stringify({observacion_anulacion})})
