import { apiRequest } from '@/services/auth'
export interface LecturaProduccion { id:number; componente_id:number; macromedidor:string; tipo:'fisico'|'virtual'; sistema:string; distrito:string; lectura:number; unidad:string; fecha:string; hora:string; fecha_hora:string; usuario:string; imagen_url:string|null; valor_ingresado:number|null }
export interface LecturasProduccionResponse { data:LecturaProduccion[]; current_page:number;last_page:number;total:number;resumen:{registros:number;fisicas:number;virtuales:number;volumen_total:number};macromedidores:{id:number;nombre:string}[] }
const base='/lecturita/dana/produccion/lecturas'
export function listarLecturasProduccion(filters:{criterio:string;desde:string;hasta:string;tipo:string;componente_id:string},page=1){const q=new URLSearchParams({...filters,page:String(page)});return apiRequest<LecturasProduccionResponse>(`${base}?${q}`)}
export function eliminarLecturaProduccion(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
