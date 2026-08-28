export interface Option { id: number; nombre: string }
export interface Expediente {
  id: number
  numero_expediente: string
  fecha: string
  estado: number
  tipoexpediente_id: number
  flujoatencion_id: number
  motivoexpediente_id: number
  tipo_expediente?: Option | null
  flujo?: Option | null
  motivo?: Option | null
  trabajos_count?: number
}
export interface ExpedientePayload {
  numero_expediente: string
  fecha: string
  estado: number
  tipoexpediente_id: number
  flujoatencion_id: number
  motivoexpediente_id: number
}
export interface ExpedientesResponse {
  data: Expediente[]
  current_page: number
  last_page: number
  total: number
  catalogs: { tipos: Option[]; flujos: Option[]; motivos: Option[] }
}
