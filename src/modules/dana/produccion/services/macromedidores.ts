import { apiRequest } from '@/services/auth'
import type { LecturaMacro, Macromedidor, MacromedidoresResponse, HistorialMacroResponse } from '../interfaces/macromedidores.interface'




const base='/lecturita/dana/produccion/macromedidores'
export function listarMacromedidores(tipo:'fisico'|'virtual',criterio='',page=1){const q=new URLSearchParams({tipo,criterio,page:String(page)});return apiRequest<MacromedidoresResponse>(`${base}?${q}`)}
export function historialMacromedidor(id:number){return apiRequest<HistorialMacroResponse>(`${base}/${id}/lecturas?limit=10`)}
export function guardarLecturaMacro(item:Macromedidor,lectura:number,imagen?:File|null){const data=new FormData();data.append('lectura',String(lectura));if(imagen)data.append('imagen',imagen,imagen.name);return apiRequest<LecturaMacro>(`${base}/${item.id}/lecturas${item.tipo==='virtual'?'/virtual':''}`,{method:'POST',body:data})}
