import { apiRequest } from '@/services/auth'

export interface AbastecimientoProgramado {
  id_cisterna:number
  id_programacion:number
  id_programacion_cisterna:number
  id_punto_abastecimiento:number
  placa:string
  fecha:string
  conductor:string
  punto_abastecimiento:string
  ultima_operacion:1|2|null
  ultima_accion:string|null
  vueltas:number
  vueltas_programadas?:number
}
export interface AbastecimientosResponse { data:AbastecimientoProgramado[]; total:number; dentro:number; vueltas:number; pendientes:number }
export interface AccionAbastecimiento { id_programacion_cisterna:number; id_programacion:number; id_cisterna:number; id_punto_abastecimiento:number; fecha:string; hora:string; accion:1|2 }
const base='/lecturita/dana/gestion-cisternas/abastecimientos'
export function listarAbastecimientos(criterio=''){const q=new URLSearchParams({criterio});return apiRequest<AbastecimientosResponse>(`${base}?${q}`)}
export function registrarAccion(data:AccionAbastecimiento){return apiRequest<AbastecimientoProgramado>(`${base}/acciones`,{method:'POST',body:JSON.stringify(data)})}
