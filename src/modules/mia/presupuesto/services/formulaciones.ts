import { apiRequest } from '@/services/auth'
import type { FaseFormulacion, UnidadPresupuestal, FormulacionPresupuestal, FormulacionesResponse } from '../interfaces/formulaciones.interface'
const base='/mia/presupuesto/formulaciones'
export function listarFormulaciones(page=1){return apiRequest<FormulacionesResponse>(`${base}?page=${page}`)}
export function obtenerFormulacion(id:number){return apiRequest<FormulacionPresupuestal>(`${base}/${id}`)}
export function crearFormulacion(anio:number){return apiRequest<FormulacionPresupuestal>(base,{method:'POST',body:JSON.stringify({anio})})}
export function avanzarFase(id:number){return apiRequest<FormulacionPresupuestal>(`${base}/${id}/avanzar-fase`,{method:'POST'})}
