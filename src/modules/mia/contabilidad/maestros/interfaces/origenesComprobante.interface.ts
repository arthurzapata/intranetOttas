export interface OrigenComprobante {
  id: number
  nombre: string
  descripcion: string
  estado: boolean
}

export interface OrigenesComprobanteResponse { data: OrigenComprobante[]; total: number; current_page: number; last_page: number }
export interface OrigenComprobantePayload { nombre: string; descripcion: string }
