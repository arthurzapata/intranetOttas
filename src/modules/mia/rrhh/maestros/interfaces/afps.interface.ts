export interface Afp {
  id: number
  codigo: string
  nombre: string
  comision_porcentaje: number
  prima_seguro: number
  estado: boolean
}

export type AfpPayload = Omit<Afp, 'id' | 'estado'>

export interface AfpsResponse {
  data: Afp[]
  total: number
  current_page: number
  last_page: number
}

