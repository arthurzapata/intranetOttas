import { apiRequest } from '@/services/auth'
import type { ConsistenciasFiltros, ConsistenciasResponse, MesConsistencia } from '../interfaces/consistencias.interface'
const base='/mia/contabilidad/proceso/consistencias'
export const obtenerOpcionesConsistencias=()=>apiRequest<ConsistenciasResponse>(base)
export const obtenerMesesConsistencias=(anio:number)=>apiRequest<MesConsistencia[]>(`${base}/meses?anio=${anio}`)
export const consultarConsistencias=(filtros:ConsistenciasFiltros)=>apiRequest<ConsistenciasResponse>(base,{method:'POST',body:JSON.stringify(filtros)})
