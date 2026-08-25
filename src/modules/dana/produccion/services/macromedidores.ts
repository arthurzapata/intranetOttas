import { apiRequest } from '@/services/auth'
export interface LecturaMacro { id:number; fecha_hora:string; lectura:number; valor_ingresado?:number; usuario:string; imagen_url?:string }
export interface Macromedidor { id:number; nombre:string; tipo:'fisico'|'virtual'; sistema:string; distrito:string; condicion:string; unidad:string; ultima_lectura:number|null; ultima_fecha:string|null; lecturas_count:number }
export interface MacromedidoresResponse { data:Macromedidor[]; current_page:number;last_page:number;total:number;resumen:{fisicos:number;virtuales:number;con_lectura_hoy:number} }
export interface HistorialMacroResponse { data:LecturaMacro[]; macromedidor:Macromedidor }
const base='/lecturita/dana/produccion/macromedidores'
export function listarMacromedidores(tipo:'fisico'|'virtual',criterio='',page=1){const q=new URLSearchParams({tipo,criterio,page:String(page)});return apiRequest<MacromedidoresResponse>(`${base}?${q}`)}
export function historialMacromedidor(id:number){return apiRequest<HistorialMacroResponse>(`${base}/${id}/lecturas?limit=10`)}
export function guardarLecturaMacro(item:Macromedidor,lectura:number,imagen?:File|null){const data=new FormData();data.append('lectura',String(lectura));if(imagen)data.append('imagen',imagen,imagen.name);return apiRequest<LecturaMacro>(`${base}/${item.id}/lecturas${item.tipo==='virtual'?'/virtual':''}`,{method:'POST',body:data})}
