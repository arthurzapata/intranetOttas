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
