import { apiRequest } from '@/services/auth'
import type { EstadoGananciasPerdidasResponse, FiltrosEgp } from '../interfaces/estadoGananciasPerdidas.interface'
const base='/mia/contabilidad/proceso/estado-ganancias-perdidas'
export const obtenerOpcionesEgp=()=>apiRequest<EstadoGananciasPerdidasResponse>(base)
export const consultarEgp=(filtros:FiltrosEgp)=>apiRequest<EstadoGananciasPerdidasResponse>(base,{method:'POST',body:JSON.stringify(filtros)})
