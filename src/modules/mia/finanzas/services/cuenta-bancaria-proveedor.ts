import { apiRequest } from '@/services/auth'
import type { CuentaBancariaOpciones,CuentaBancariaPayload,CuentaBancariaProveedor,CuentasProveedorResponse,ProveedorFinanzas } from '../interfaces/cuenta-bancaria-proveedor.interface'
const base='/mia/finanzas/proveedores/cuentas-bancarias'
export const obtenerOpcionesCuentasProveedor=()=>apiRequest<CuentaBancariaOpciones>(`${base}/opciones`)
export const buscarProveedoresFinanzas=(q:string)=>apiRequest<ProveedorFinanzas[]>(`${base}/proveedores?q=${encodeURIComponent(q)}`)
export const listarCuentasProveedor=(id:number)=>apiRequest<CuentasProveedorResponse>(`${base}/proveedores/${id}`)
export const obtenerCuentaProveedor=(id:number)=>apiRequest<CuentaBancariaProveedor>(`${base}/${id}`)
export const guardarCuentaProveedor=(id:number|null,data:CuentaBancariaPayload)=>apiRequest<CuentaBancariaProveedor>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})
export const cambiarEstadoCuentaProveedor=(id:number)=>apiRequest<void>(`${base}/${id}/estado`,{method:'PATCH',body:JSON.stringify({})})
export const establecerCuentaPrincipal=(id:number)=>apiRequest<void>(`${base}/${id}/principal`,{method:'PATCH',body:JSON.stringify({})})
export const establecerCuentaDetracciones=(id:number)=>apiRequest<void>(`${base}/${id}/detracciones`,{method:'PATCH',body:JSON.stringify({})})
