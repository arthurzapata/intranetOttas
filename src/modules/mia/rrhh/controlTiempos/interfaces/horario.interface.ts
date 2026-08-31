export interface RegimenHorario { id:number; codigo:string; descripcion:string; horas_ordinarias_mes?:number; horas_dia?:number }
export interface HorarioTrabajo { id:number; regimen_id:number; codigo:string; descripcion:string; entrada_1:string; salida_1:string; entrada_2:string|null; salida_2:string|null; estado:boolean; regimen:RegimenHorario|null }
export interface HorarioPayload { regimen_id:number; codigo:string; descripcion:string; entrada_1:string; salida_1:string; entrada_2:string|null; salida_2:string|null }
export interface HorariosResponse { data:HorarioTrabajo[]; current_page:number; last_page:number; total:number; regimenes:RegimenHorario[] }
