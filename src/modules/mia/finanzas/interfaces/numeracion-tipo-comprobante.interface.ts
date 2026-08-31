export interface CatalogoNumeracion { id: number; nombre?: string; detalle?: string }
export interface NumeracionTipoComprobante { id: number; sucursal_id: number; tipo_comprobante_id: number; anio: number; desde: number; hasta: number; actual: number; activo: boolean; sucursal?: CatalogoNumeracion; tipo_comprobante?: CatalogoNumeracion }
export interface NumeracionTipoComprobantePayload { sucursal_id: number; tipo_comprobante_id: number; anio: number; desde: number; hasta: number; actual: number; activo: boolean }
export interface NumeracionTipoComprobanteResponse { data: NumeracionTipoComprobante[]; current_page: number; last_page: number; total: number; sucursales: CatalogoNumeracion[]; tipos_comprobante: CatalogoNumeracion[] }
