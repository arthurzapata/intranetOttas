import { apiRequest } from '@/services/auth'
import type { BalanceComprobacionResponse, FiltrosBalanceComprobacion } from '../interfaces/balanceComprobacion.interface'
const base='/mia/contabilidad/proceso/balance-comprobacion'
export const obtenerOpcionesBalanceComprobacion=()=>apiRequest<BalanceComprobacionResponse>(base)
export const consultarBalanceComprobacion=(filtros:FiltrosBalanceComprobacion)=>apiRequest<BalanceComprobacionResponse>(base,{method:'POST',body:JSON.stringify(filtros)})
