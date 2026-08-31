import { apiRequest } from '@/services/auth'
import type { DetalleProgramacionResponse, PrepararProgramacionResponse, ProgramacionHorario, ProgramacionHorarioDetalle, ProgramacionHorarioPayload, ProgramacionesResponse } from '../interfaces/programacionHorario.interface'
const base='/mia/rrhh/controltiempos/programacion-horarios'
export function listarProgramaciones(regimenId:number|null,page:number){const q=new URLSearchParams({page:String(page)});if(regimenId)q.set('regimen_id',String(regimenId));return apiRequest<ProgramacionesResponse>(`${base}?${q}`)}
export function prepararProgramacion(regimenId:number,fechaInicio:string,fechaFin:string){const q=new URLSearchParams({regimen_id:String(regimenId),fecha_inicio:fechaInicio,fecha_fin:fechaFin});return apiRequest<PrepararProgramacionResponse>(`${base}/preparar?${q}`)}
export const crearProgramacion=(payload:ProgramacionHorarioPayload)=>apiRequest<ProgramacionHorario>(base,{method:'POST',body:JSON.stringify(payload)})
export function obtenerDetalleProgramacion(id:number,busqueda:string,fecha:string,page:number){const q=new URLSearchParams({page:String(page)});if(busqueda)q.set('busqueda',busqueda);if(fecha)q.set('filtro_fecha',fecha);return apiRequest<DetalleProgramacionResponse>(`${base}/${id}?${q}`)}
export const cambiarHorarioDetalle=(detalleId:number,horarioId:number)=>apiRequest<ProgramacionHorarioDetalle>(`${base}/detalle/${detalleId}`,{method:'PUT',body:JSON.stringify({horario_id:horarioId})})
