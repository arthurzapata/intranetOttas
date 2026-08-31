import { apiRequest } from '@/services/auth'
import type { ConsultaSaldosResponse, FiltrosConsultaSaldos, MesConsultaSaldo } from '../interfaces/consultaSaldos.interface'
const base='/mia/contabilidad/proceso/consulta-saldos'
export const obtenerOpcionesConsultaSaldos=()=>apiRequest<ConsultaSaldosResponse>(base)
export const obtenerMesesConsultaSaldos=(anio:number)=>apiRequest<MesConsultaSaldo[]>(`${base}/meses?anio=${anio}`)
export const consultarSaldos=(filtros:FiltrosConsultaSaldos)=>apiRequest<ConsultaSaldosResponse>(base,{method:'POST',body:JSON.stringify(filtros)})
