export interface DistritoOption { id: number; nombre: string }
export interface Urbanizacion { id: number; nombre: string; distrito_id: number; distrito: DistritoOption; estado: boolean }
export interface UrbanizacionesResponse {
  data: Urbanizacion[]
  current_page: number
  last_page: number
  per_page: number
  total: number
  distritos: DistritoOption[]
}
export interface UrbanizacionPayload { distrito_id: number; nombre: string }
