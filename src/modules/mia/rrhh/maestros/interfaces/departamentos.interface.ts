export interface PaisOption {
  id: number
  codigo: string
  nombre: string
}

export interface Departamento {
  id: number
  pais_id: number | null
  pais?: PaisOption | null
  ubigeo: string
  nombre: string
  estado: boolean
}

export interface DepartamentosResponse {
  data: Departamento[]
  total: number
  current_page: number
  last_page: number
}

export interface DepartamentoPayload {
  pais_id: number | null
  ubigeo: string
  nombre: string
}

