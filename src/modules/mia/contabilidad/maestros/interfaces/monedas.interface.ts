export interface Moneda {
  id: number
  nombre: string
  abreviatura: string | null
  estado: boolean
}

export interface MonedasResponse {
  data: Moneda[]
  total: number
  current_page: number
  last_page: number
}

export interface MonedaPayload {
  nombre: string
  abreviatura: string | null
}
