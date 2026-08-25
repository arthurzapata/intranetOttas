import { apiRequest } from '@/services/auth'
export interface IncidenciaImagen{id:number;url:string;nombre?:string}
export interface Incidencia{ id:number;programacion_id?:number;transporte_id?:number;placa:string;latitud?:number;longitud?:number;comentario:string;anonima:boolean|string;nombre_apellido?:string;dni?:string;created_at:string;imagenes:IncidenciaImagen[];programacion?:{id:number;fecha?:string;sector?:string};transporte?:{id:number;placa?:string;descripcion?:string} }
export interface IncidenciasResponse{data:Incidencia[];total:number;page:number;last_page:number}
export function listarIncidencias(params:{criterio:string;anonima:string;desde:string;hasta:string;page:number}){const q=new URLSearchParams({criterio:params.criterio,anonima:params.anonima,desde:params.desde,hasta:params.hasta,page:String(params.page)});return apiRequest<IncidenciasResponse>(`/lecturita/aura/integridad/incidencias?${q}`)}
