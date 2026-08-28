import { apiRequest } from '@/services/auth'
import type { AnalisisCuentasFiltros, AnalisisCuentasResponse, MesAnalisis } from '../interfaces/analisisCuentas.interface'
const base='/mia/contabilidad/proceso/analisis-cuentas'
export const obtenerOpcionesAnalisis=()=>apiRequest<AnalisisCuentasResponse>(base)
export function obtenerMesesAnalisis(anio:number){return apiRequest<MesAnalisis[]>(`${base}/meses?anio=${anio}`)}
export function consultarAnalisisCuentas(filtros:AnalisisCuentasFiltros){return apiRequest<AnalisisCuentasResponse>(base,{method:'POST',body:JSON.stringify(filtros)})}
