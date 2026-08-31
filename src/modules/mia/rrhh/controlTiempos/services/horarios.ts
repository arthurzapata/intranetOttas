import { apiRequest } from '@/services/auth'
import type { HorarioPayload, HorariosResponse, HorarioTrabajo } from '../interfaces/horario.interface'

const base='/mia/rrhh/controltiempos/horarios'
export function listarHorarios(criterio:string,regimenId:number|null,page:number){const q=new URLSearchParams({page:String(page)});if(criterio)q.set('criterio',criterio);if(regimenId)q.set('regimen_id',String(regimenId));return apiRequest<HorariosResponse>(`${base}?${q}`)}
export const crearHorario=(payload:HorarioPayload)=>apiRequest<HorarioTrabajo>(base,{method:'POST',body:JSON.stringify(payload)})
export const actualizarHorario=(id:number,payload:HorarioPayload)=>apiRequest<HorarioTrabajo>(`${base}/${id}`,{method:'PUT',body:JSON.stringify(payload)})
export const cambiarEstadoHorario=(id:number)=>apiRequest<HorarioTrabajo>(`${base}/${id}/desactivar`,{method:'PATCH'})
