import { apiRequest } from '@/services/auth'
import type { IncidenciasResponse } from '../interfaces/incidencias.interface'
export function listarIncidencias(params:{criterio:string;anonima:string;desde:string;hasta:string;page:number}){const q=new URLSearchParams({criterio:params.criterio,anonima:params.anonima,desde:params.desde,hasta:params.hasta,page:String(params.page)});return apiRequest<IncidenciasResponse>(`/lecturita/aura/integridad/incidencias?${q}`)}
