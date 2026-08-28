import { apiRequest } from '@/services/auth'
import type { CuentaMovimiento, FiltrosMovimiento, MovimientoContable, MovimientoPayload, MovimientosResponse, OpcionContable } from '../interfaces/movimientosContables.interface'
const base='/mia/contabilidad/movimientos/comprobantes'
export function listarMovimientos(f:FiltrosMovimiento,page:number){const q=new URLSearchParams({page:String(page)});Object.entries(f).forEach(([k,v])=>v!==''&&q.set(k,v));return apiRequest<MovimientosResponse>(`${base}?${q}`)}
export const detalleMovimiento=(id:number)=>apiRequest<MovimientoContable>(`${base}/${id}`)
export const guardarMovimiento=(id:number|null,p:MovimientoPayload)=>apiRequest<MovimientoContable>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(p)})
export const anularMovimiento=(id:number)=>apiRequest<void>(`${base}/${id}/anular`,{method:'POST'})
export const buscarCuentasMovimiento=(q:string)=>apiRequest<CuentaMovimiento[]>(`${base}/cuentas?q=${encodeURIComponent(q)}`)
export const listarTiposDocumentoMovimiento=(tipo:number)=>apiRequest<OpcionContable[]>(`${base}/tipos-documento?tipo_comprobante_id=${tipo}`)
export const listarNumeracionesMovimiento=(tipo:number,periodo:number)=>apiRequest<OpcionContable[]>(`${base}/numeraciones?tipo_documento_id=${tipo}&detalle_periodo_id=${periodo}`)
