import { apiRequest } from '@/services/auth'
import type { TurnoExtra, TurnoExtraPayload, TurnosExtraResponse } from '../interfaces/turnoExtra.interface'
const base='/mia/rrhh/controltiempos/turnos-extra'
export function listarTurnosExtra(regimenId:number|null,page:number){const q=new URLSearchParams({page:String(page)});if(regimenId)q.set('regimen_id',String(regimenId));return apiRequest<TurnosExtraResponse>(`${base}?${q}`)}
export const crearTurnoExtra=(payload:TurnoExtraPayload)=>apiRequest<TurnoExtra>(base,{method:'POST',body:JSON.stringify(payload)})
export const actualizarTurnoExtra=(id:number,payload:TurnoExtraPayload)=>apiRequest<TurnoExtra>(`${base}/${id}`,{method:'PUT',body:JSON.stringify(payload)})
export const cambiarEstadoTurnoExtra=(id:number)=>apiRequest<TurnoExtra>(`${base}/${id}/desactivar`,{method:'PATCH'})
