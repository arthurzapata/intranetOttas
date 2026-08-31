import { apiRequest } from '@/services/auth'
import type { ConceptoCuentaFlujo, CuentaContableFlujo, CuentaFlujoCaja, CuentaFlujoCajaPayload } from '../interfaces/cuenta-flujo-caja.interface'

const base = '/mia/finanzas/cuentas-flujo-caja'
export const listarConceptosCuentaFlujo = () => apiRequest<ConceptoCuentaFlujo[]>(`${base}/conceptos`)
export const listarCuentasFlujoCaja = (conceptoId: number) => apiRequest<CuentaFlujoCaja[]>(`${base}/conceptos/${conceptoId}/cuentas`)
export const buscarCuentasContablesFlujo = (q: string) => apiRequest<CuentaContableFlujo[]>(`${base}/cuentas-contables?q=${encodeURIComponent(q)}`)
export const asociarCuentaFlujoCaja = (data: CuentaFlujoCajaPayload) => apiRequest<CuentaFlujoCaja>(base, { method: 'POST', body: JSON.stringify(data) })
export const cambiarEstadoCuentaFlujoCaja = (id: number) => apiRequest<CuentaFlujoCaja>(`${base}/${id}/estado`, { method: 'PATCH', body: JSON.stringify({}) })
export const eliminarCuentaFlujoCaja = (id: number) => apiRequest<void>(`${base}/${id}`, { method: 'DELETE' })
