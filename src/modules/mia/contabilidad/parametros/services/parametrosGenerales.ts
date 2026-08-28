import { apiRequest } from '@/services/auth'
import type { CuentaParametro, ParametrosGenerales, ParametrosGeneralesResponse } from '../interfaces/parametrosGenerales.interface'
const base='/mia/contabilidad/parametros-generales'
export const obtenerParametrosGenerales=()=>apiRequest<ParametrosGeneralesResponse>(base)
export const guardarParametrosGenerales=(data:ParametrosGenerales)=>apiRequest<ParametrosGenerales>(base,{method:'PUT',body:JSON.stringify(data)})
export const buscarCuentasParametros=(q:string)=>apiRequest<CuentaParametro[]>(`${base}/cuentas?q=${encodeURIComponent(q)}`)
