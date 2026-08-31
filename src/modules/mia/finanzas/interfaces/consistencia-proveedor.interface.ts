export type NivelConsistenciaProveedor = 'TODOS' | 'CRITICA' | 'ADVERTENCIA'

export interface ProveedorConsistencia {
  id: number
  ruc: string
  razon_social: string
  text: string
}

export interface ConsistenciaProveedorFiltros {
  nivel: NivelConsistenciaProveedor
  tipo: string
  proveedor_id: string
}

export interface IncidenciaProveedor {
  tipo: string
  nivel: Exclude<NivelConsistenciaProveedor, 'TODOS'>
  documento_proveedor_id?: number
  proveedor_id?: number
  movimiento_id?: number | null
  referencia?: string
  proveedor?: string
  mensaje: string
  detalle?: Record<string, string | number | boolean | null>
}

export interface ResultadoConsistenciaProveedor {
  incidencias: IncidenciaProveedor[]
  resumen: { total: number; criticas: number; advertencias: number }
}
