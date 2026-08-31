import type { HorarioTrabajo, RegimenHorario } from './horario.interface'
export interface ProgramacionHorario { id:number; regimen_id:number; fecha_inicio:string; fecha_fin:string; total_trabajadores:number; total_registros:number; observacion?:string|null; estado:boolean; regimen:RegimenHorario|null }
export interface TrabajadorProgramacion { id:number; codigo_trabajador:string; nombre_completo:string }
export interface PrepararProgramacionResponse { regimenes:RegimenHorario[]; regimen:RegimenHorario|null; horarios:HorarioTrabajo[]; trabajadores:TrabajadorProgramacion[] }
export interface ProgramacionesResponse { data:ProgramacionHorario[]; current_page:number; last_page:number; total:number; regimenes:RegimenHorario[] }
export interface ProgramacionHorarioPayload { regimen_id:number; fecha_inicio:string; fecha_fin:string; horario_default_id:number|null; horarios_asignados:Record<number,number>; observacion:string }
export interface ProgramacionHorarioDetalle { id:number; datos_persona_id:number; horario_id:number; fecha:string; entrada_1:string; salida_1:string; entrada_2:string|null; salida_2:string|null; horas_programadas:number; estado:boolean; horario:HorarioTrabajo|null }
export interface TrabajadorDetalleProgramacion extends TrabajadorProgramacion { detalles:ProgramacionHorarioDetalle[] }
export interface DetalleProgramacionResponse { programacion:ProgramacionHorario; data:TrabajadorDetalleProgramacion[]; current_page:number; last_page:number; total:number; from:number|null; to:number|null; horarios:HorarioTrabajo[] }
