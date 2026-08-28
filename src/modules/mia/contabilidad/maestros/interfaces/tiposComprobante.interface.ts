export interface TipoComprobante {
  id: number
  nombre: string
  descripcion: string
  estado: boolean
}

export interface TiposComprobanteResponse { data: TipoComprobante[]; total: number; current_page: number; last_page: number }
export interface TipoComprobantePayload { nombre: string; descripcion: string }
