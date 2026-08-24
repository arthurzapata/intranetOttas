import { apiRequest } from '@/services/auth'

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

const basePath = '/lecturita/evan/medicion/medidores'
export function listarMedidores(filters: { criterio: string; procedencia_id: number; diametro_id: number; marca_id: number; tipo: string; page: number }) {
  const query = new URLSearchParams({ page: String(filters.page) })
  Object.entries(filters).forEach(([key, value]) => { if (key !== 'page' && value) query.set(key, String(value)) })
  return apiRequest<MedidoresResponse>(`${basePath}?${query}`)
}
export function crearMedidor(payload: MedidorPayload) {
  return apiRequest<Medidor>(basePath, { method: 'POST', body: JSON.stringify(payload) })
}
export function obtenerMedidor(id: number) { return apiRequest<Medidor>(`${basePath}/${id}`) }
