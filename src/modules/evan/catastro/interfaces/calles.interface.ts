export interface DistritoOption { id: number; nombre: string }
export interface Calle { id: number; nombre: string; distrito_id: number; distrito: DistritoOption; estado: boolean }
export interface CallesResponse {
  data: Calle[]
  current_page: number
  last_page: number
  per_page: number
  total: number
  distritos: DistritoOption[]
}
export interface CallePayload { distrito_id: number; nombre: string }
