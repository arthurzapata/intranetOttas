export interface Option { id: number; nombre: string }
export interface Medidor {
  id: number
  numero: string
  procedencia: Option
  diametro: Option
  marca: Option
  tipo: string
  fecha_fabricacion?: string | null
  fecha_instalacion?: string | null
  modelo?: string | null
  certificado_verificacion: string
  observacion?: string | null
  lectura_inicial?: number | null
  conexion_id: number
  conexion?: { id: number; codigo: string } | null
  reservado: boolean
  situacion: string
}
export interface MedidorPayload {
  procedencia_id: number
  numero: string
  diametro_id: number
  marca_medidor_id: number
  tipo: 'u' | 'm' | ''
  fecha_fabricacion: string
  fecha_instalacion: string
  modelo: string
  certificado_verificacion: string
  observacion: string
}
export interface MedidoresResponse {
  data: Medidor[]
  current_page: number
  last_page: number
  total: number
  catalogs: { procedencias: Option[]; diametros: Option[]; marcas: Option[]; tipos: Option[] }
}
