export interface TipoComprobanteOption { id: number; nombre: string }
export interface TipoDocumentoContable {
  id: number
  nombre: string
  tipo_comprobante_id: number
  tipo_comprobante?: TipoComprobanteOption | null
  diminutivo: string
  estado: boolean
}
export interface TiposDocumentoContableResponse { data: TipoDocumentoContable[]; total: number; current_page: number; last_page: number }
export interface TipoDocumentoContablePayload { nombre: string; tipo_comprobante_id: number; diminutivo: string }
