export interface Pais {
  id: number
  codigo: string
  nombre: string
  es_peru: boolean
  estado: boolean
}

export interface PaisesResponse {
  data: Pais[]
  total: number
  current_page: number
  last_page: number
}

export interface PaisPayload {
  codigo: string
  nombre: string
  es_peru: boolean
}

