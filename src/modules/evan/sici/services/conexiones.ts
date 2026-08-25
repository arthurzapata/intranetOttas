import { apiRequest } from '@/services/auth'

export interface Option { id: number; nombre: string }
export interface Titular { id?: number; dni: string; apellido_paterno: string; apellido_materno: string; nombres: string }
export interface ConexionSici {
  id: number
  inscripcion: string
  titular: string
  dni: string
  distrito: string
  direccion: string
  tipo_servicio: string
  modalidad: string
  fecha_instalacion: string
}
export interface ConexionPage {
  data: ConexionSici[]
  total: number
  page: number
  last_page: number
  distritos: Option[]
  modalidades: Option[]
}
export interface ConexionPayload {
  titular_id?: number
  dni: string
  apellido_paterno: string
  apellido_materno: string
  nombres: string
  distrito_id: number
  procedencia_id: number
  tipo_servicio: string
  inscripcion: string
  direccion: string
  fecha_solicitud: string
  fecha_factibilidad: string
  fecha_pago: string
  fecha_contrato: string
  fecha_instalacion: string
  expediente: string
  contrato: string
  autorizacion_municipal: string
}

const base = '/lecturita/evan/sici/conexiones'
const query = (values: Record<string, string | number>) => {
  const params = new URLSearchParams()
  Object.entries(values).forEach(([key, value]) => value !== '' && params.set(key, String(value)))
  return params
}

export const listarConexiones = (filters: Record<string, string | number>) =>
  apiRequest<ConexionPage>(`${base}?${query(filters)}`)
export const buscarTitular = (dni: string) =>
  apiRequest<Titular | null>(`${base}/titulares/${encodeURIComponent(dni)}`)
export const registrarConexion = (payload: ConexionPayload) =>
  apiRequest<ConexionSici>(base, { method: 'POST', body: JSON.stringify(payload) })
