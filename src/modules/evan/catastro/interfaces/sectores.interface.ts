export interface DistritoOption {
  id: number
  nombre: string
}
export interface Sector {
  id: number
  nombre: string
  distrito_id: number
  distrito: DistritoOption
  estado: boolean
  conexiones_count?: number
  manzanas_count?: number
}
export interface SectoresResponse {
  data: Sector[]
  current_page: number
  last_page: number
  per_page: number
  total: number
  distritos: DistritoOption[]
}
export interface SectorPayload {
  distrito_id: number
  nombre: string
}
