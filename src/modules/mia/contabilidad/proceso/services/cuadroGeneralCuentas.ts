import { apiRequest } from '@/services/auth'
import type { CuadroGeneralResponse, FiltrosCuadroGeneral, PeriodoCuadro } from '../interfaces/cuadroGeneralCuentas.interface'
const base='/mia/contabilidad/proceso/cuadro-general-cuentas'
export const obtenerOpcionesCuadroGeneral=()=>apiRequest<CuadroGeneralResponse>(base)
export const obtenerMesesCuadroGeneral=(anio:number)=>apiRequest<PeriodoCuadro[]>(`${base}/meses?anio=${anio}`)
export const consultarCuadroGeneral=(filtros:FiltrosCuadroGeneral)=>apiRequest<CuadroGeneralResponse>(base,{method:'POST',body:JSON.stringify(filtros)})
