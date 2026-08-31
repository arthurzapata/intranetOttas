import { apiRequest } from '@/services/auth'
import type { ConsistenciaProveedorFiltros, ProveedorConsistencia, ResultadoConsistenciaProveedor } from '../interfaces/consistencia-proveedor.interface'

const base = '/mia/finanzas/consistencias-proveedores'

export function buscarProveedoresConsistencia(q: string) {
  return apiRequest<ProveedorConsistencia[]>(`${base}/proveedores?q=${encodeURIComponent(q)}`)
}

export function evaluarConsistenciasProveedor(filtros: ConsistenciaProveedorFiltros) {
  const query = new URLSearchParams()
  Object.entries(filtros).forEach(([key, value]) => { if (value) query.set(key, value) })
  return apiRequest<ResultadoConsistenciaProveedor>(`${base}/evaluar?${query}`)
}
