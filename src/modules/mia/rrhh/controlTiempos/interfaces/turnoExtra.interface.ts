import type { HorarioTrabajo, RegimenHorario } from './horario.interface'
export interface ConceptoTurnoOption { id:number; codigo:string; descripcion:string }
export interface TurnoExtra { id:number; horario_id:number; concepto_id:number|null; hora_inicio:string; hora_fin:string; cruza_dia:boolean; minutos_turno:number; estado:boolean; horario:HorarioTrabajo|null; concepto?:ConceptoTurnoOption|null }
export interface TurnoExtraPayload { horario_id:number; concepto_id:number|null; hora_inicio:string; hora_fin:string }
export interface TurnosExtraResponse { data:TurnoExtra[]; current_page:number; last_page:number; total:number; horarios:HorarioTrabajo[]; regimenes:RegimenHorario[]; conceptos:ConceptoTurnoOption[] }
