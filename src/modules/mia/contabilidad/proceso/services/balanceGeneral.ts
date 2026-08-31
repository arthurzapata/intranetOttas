import { apiRequest } from '@/services/auth'
import type { BalanceGeneralResponse, FiltrosBalanceGeneral } from '../interfaces/balanceGeneral.interface'
const base='/mia/contabilidad/proceso/balance-general'
export const obtenerOpcionesBalanceGeneral=()=>apiRequest<BalanceGeneralResponse>(base)
export const consultarBalanceGeneral=(filtros:FiltrosBalanceGeneral)=>apiRequest<BalanceGeneralResponse>(base,{method:'POST',body:JSON.stringify(filtros)})
