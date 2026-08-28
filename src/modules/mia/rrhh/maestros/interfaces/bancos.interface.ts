export type TipoEntidad = 'BANCO' | 'CAJA' | 'FINANCIERA' | 'OTRO'

export interface Banco {
  id: number
  codigo: string
  descripcion: string
  abreviatura: string | null
  codigo_sbs: string | null
  tipo_entidad: TipoEntidad
  estado: boolean
}

export type BancoPayload = Omit<Banco, 'id'>

