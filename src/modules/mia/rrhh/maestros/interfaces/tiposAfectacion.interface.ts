export interface TipoAfectacion {
  id: number
  codigo: string
  descripcion: string
  estado: boolean
}

export type TipoAfectacionPayload = Pick<TipoAfectacion, 'codigo' | 'descripcion'>

