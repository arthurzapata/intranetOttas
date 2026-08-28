import { apiRequest } from '@/services/auth'
import type { AbastecimientoProgramado, AbastecimientosResponse, AccionAbastecimiento } from '../interfaces/abastecimientos.interface'




const base='/lecturita/dana/gestion-cisternas/abastecimientos'
export function listarAbastecimientos(criterio=''){const q=new URLSearchParams({criterio});return apiRequest<AbastecimientosResponse>(`${base}?${q}`)}
export function registrarAccion(data:AccionAbastecimiento){return apiRequest<AbastecimientoProgramado>(`${base}/acciones`,{method:'POST',body:JSON.stringify(data)})}
