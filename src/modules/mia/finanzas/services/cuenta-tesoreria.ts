import { apiRequest } from '@/services/auth'
import type { CatalogosCuentaTesoreria, ClasificacionCuentaFlujo, CuentaTesoreria, CuentaTesoreriaPayload, TipoFlujoCuenta } from '../interfaces/cuenta-tesoreria.interface'
const base = '/mia/finanzas/cuentas-tesoreria'
export const listarCuentasTesoreria = (buscar = '') => apiRequest<CuentaTesoreria[]>(`${base}?buscar=${encodeURIComponent(buscar)}`)
export const obtenerCatalogosCuentaTesoreria = () => apiRequest<CatalogosCuentaTesoreria>(`${base}/catalogos`)
export const obtenerCuentaTesoreria = (id: number) => apiRequest<CuentaTesoreria>(`${base}/${id}`)
export const guardarCuentaTesoreria = (id: number | null, data: CuentaTesoreriaPayload) => apiRequest<CuentaTesoreria>(`${base}${id ? `/${id}` : ''}`, { method: id ? 'PUT' : 'POST', body: JSON.stringify(data) })
export const cambiarEstadoCuentaTesoreria = (id: number) => apiRequest<void>(`${base}/${id}/estado`, { method: 'PATCH', body: JSON.stringify({}) })
export const eliminarCuentaTesoreria = (id: number) => apiRequest<void>(`${base}/${id}`, { method: 'DELETE' })
export const listarClasificacionFlujoCaja = () => apiRequest<ClasificacionCuentaFlujo[]>(`${base}/clasificacion-flujo`)
export const asignarTipoFlujoCaja = (cuenta_id: number, tipo_flujo_caja: TipoFlujoCuenta) => apiRequest<{ tipo_flujo_caja: 'I' | 'E' | null }>(`${base}/${cuenta_id}/tipo-flujo`, { method: 'PATCH', body: JSON.stringify({ tipo_flujo_caja: tipo_flujo_caja || null }) })
