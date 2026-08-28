export interface Option { id: number; nombre: string }
export interface NodoAvance { id: number; nombre: string; leidos: number; total: number; generado?: boolean }
export interface LecturaPadron {
  id: number
  cliente: string
  direccion: string
  codigo_catastral: string
  suministro: string
  medidor: string
  secuencia: number
  categoria: string
  registrado: boolean
  lectura_anterior?: number
  lectura_actual?: number
  fecha_lectura?: string
  fotografia?: string
}
export interface PadronPage {
  distritos: NodoAvance[]
  sectores: NodoAvance[]
  rutas: NodoAvance[]
  lecturas: LecturaPadron[]
  calles: Option[]
  total: number
  page: number
  last_page: number
}
