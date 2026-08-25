import { apiRequest } from '@/services/auth'
export interface OpcionMuestra { id:number; nombre:string }
export interface MuestraAgua { id:number; componente_id:number; componente:string; localidad:string; periodicidad:string; fecha:string; hora:string; direccion:string; latitud:number|null; longitud:number|null; observacion:string; responsable_id:number|null; responsable:string; resultados_count:number; anio:number; mes:number }
export interface MuestraPayload { componente_id:number|null; fecha:string; hora:string; direccion:string; latitud:number|null; longitud:number|null; observacion:string; responsable_id:number|null }
export interface MuestrasResponse { data:MuestraAgua[]; componentes:OpcionMuestra[]; responsables:OpcionMuestra[]; current_page:number; last_page:number; total:number; totales:{mes:number;con_resultados:number;pendientes:number} }
const base='/lecturita/dana/control-calidad/muestras'
export function listarMuestras(filters:{criterio:string;fecha_desde:string;fecha_hasta:string;page:number}){const q=new URLSearchParams({...filters,page:String(filters.page)});return apiRequest<MuestrasResponse>(`${base}?${q}`)}
export function guardarMuestra(data:MuestraPayload,id?:number){return apiRequest<MuestraAgua>(id?`${base}/${id}`:base,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarMuestra(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
