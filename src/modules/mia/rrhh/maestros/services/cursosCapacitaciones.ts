import { apiRequest } from '@/services/auth'
import type { CentroOption, CursoCapacitacion, CursosResponse, CursoPayload } from '../interfaces/cursosCapacitaciones.interface'
const base='/lecturita/mia/rrhh/maestros/cursos-capacitaciones'
export function listarCursos(criterio:string,page:number){const q=new URLSearchParams({criterio,page:String(page)});return apiRequest<CursosResponse>(`${base}?${q}`)}
export function listarCentrosActivos(){return apiRequest<CentroOption[]>('/lecturita/mia/rrhh/maestros/centros-ensenanza/opciones')}
export function guardarCurso(id:number|null,payload:CursoPayload){return apiRequest<CursoCapacitacion>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export function cambiarEstadoCurso(id:number){return apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})}
