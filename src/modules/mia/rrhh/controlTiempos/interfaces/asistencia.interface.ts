import type { HorarioTrabajo, RegimenHorario } from './horario.interface'

export type TipoAsistencia = 'TR' | 'FA' | 'FJ'

export interface AsistenciaDiaria {
  id?: number
  horario_id: number | null
  fecha: string
  tipo: TipoAsistencia
  entrada_1: string | null
  salida_1: string | null
  entrada_2: string | null
  salida_2: string | null
  origen?: string | null
  observacion?: string | null
}

export interface TrabajadorAsistencia {
  id: number
  codigo_trabajador: string
  nombre_completo: string
  asistencia: AsistenciaDiaria
}

export interface AsistenciasResponse {
  data: TrabajadorAsistencia[]
  current_page: number
  last_page: number
  total: number
  from: number | null
  to: number | null
  regimenes: RegimenHorario[]
  horarios: HorarioTrabajo[]
}

export interface GuardarAsistenciaPayload extends AsistenciaDiaria {
  datos_persona_id: number
  regimen_id: number
}

