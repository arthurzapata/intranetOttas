export type BandejaTipo = 'por-recepcionar' | 'en-bandeja' | 'pendientes' | 'propios' | 'archivados'
export interface CatalogOption { id: number; nombre: string }
export interface DocumentoResumen {
  id: number
  numero?: string | null
  numero_completo?: string | null
  asunto: string
  referencia?: string | null
  archivo?: string | null
  estado?: string | null
  es_externo?: boolean
  tipo_documento?: CatalogOption | null
}
export interface HistorialDocumento {
  id: number
  documento_id: number
  codigounico?: string | null
  estado: string
  tipo_tramite?: string | null
  proveido?: string | null
  observacion?: string | null
  indicacion?: string | null
  created_at: string
  updated_at?: string | null
  fecha_recepcion?: string | null
  documento: DocumentoResumen
  instancia_origen?: CatalogOption | null
  instancia_destino?: CatalogOption | null
  cargo_origen?: CatalogOption | null
  cargo_destino?: CatalogOption | null
  usuario_origen?: { id: number; nombre: string } | null
  usuario_destino?: { id: number; nombre: string } | null
}
export interface BandejaResponse {
  data: HistorialDocumento[]
  current_page: number
  last_page: number
  total: number
  per_page: number
  contexto: { instancia_activa?: CatalogOption | null; cargo_activo?: CatalogOption | null }
  filtros: { tipos_documento: CatalogOption[]; instancias: CatalogOption[] }
}
export interface CargoOption extends CatalogOption { instancia_id?: number }
export interface DocumentoFormOptions {
  contexto: { instancia_activa?: CatalogOption | null; cargo_activo?: CatalogOption | null }
  tipos_documento: CatalogOption[]
  instancias: CatalogOption[]
}
export interface DocumentoDestino {
  instancia_id: number
  cargo_id: number
  tipo_tramite: 'Original' | 'Con Copia'
  indicacion: string
  tramite: string
  cargos: CargoOption[]
  loading?: boolean
}
export interface AnuladosResponse extends Omit<BandejaResponse, 'contexto'> {
  contexto: BandejaResponse['contexto'] & { usuario_id?: number }
}
export interface DocumentoSeguimiento extends DocumentoResumen {
  created_at?: string | null
  prioridad?: string | null
  codigo_unico?: string | null
  remitente?: string | null
  historial?: HistorialDocumento[]
}
export interface DocumentoAnexo { id:number; nombre_original:string; extension?:string; tamano_formateado?:string; descripcion?:string|null; created_at?:string|null }
export interface DocumentoReferencia { id:number; numero?:string|null; asunto:string; tipo_documento?:CatalogOption|null }
export interface SeguimientoDetalle {
  documento: DocumentoSeguimiento
  historial: HistorialDocumento[]
  anexos: DocumentoAnexo[]
  referencias: DocumentoReferencia[]
}
export interface SeguimientoResponse {
  data: DocumentoSeguimiento[]
  current_page:number
  last_page:number
  total:number
  per_page:number
  contexto:{ instancia_activa?:CatalogOption|null; cargo_activo?:CatalogOption|null }
  tipos_documento:CatalogOption[]
}
