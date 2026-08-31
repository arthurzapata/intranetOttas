import { apiRequest } from '@/services/auth'
import type { FiltrosLibroDiario, LibroDiarioResponse } from '../interfaces/libroDiario.interface'
const base='/mia/contabilidad/proceso/libro-diario'
export const obtenerOpcionesLibroDiario=()=>apiRequest<LibroDiarioResponse>(base)
export const consultarLibroDiario=(filtros:FiltrosLibroDiario)=>apiRequest<LibroDiarioResponse>(base,{method:'POST',body:JSON.stringify(filtros)})
