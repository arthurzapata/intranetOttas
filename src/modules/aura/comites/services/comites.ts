import { apiDownload, apiRequest } from '@/services/auth'
export type ComiteMode='comites'|'reuniones'|'acuerdos'|'tipos'
export interface ComiteItem{id:number;codigo?:string;nombre?:string;descripcion:string;fecha?:string;estado?:string;finalizado?:boolean;comite?:string;tipo?:string;miembros?:Array<{id:number;nombre:string}>;documento?:string;archivos?:number;acuerdos?:number}
export interface ComiteOptions{tipos:Array<{id:number;nombre:string}>;personas:Array<{id:number;nombre:string}>;comites:Array<{id:number;nombre:string}>}
export function listar(mode:ComiteMode,search=''){const q=new URLSearchParams({criterio:search});return apiRequest<ComiteItem[]>(`/lecturita/aura/gestion-comite/${mode}?${q}`)}
export function opciones(){return apiRequest<ComiteOptions>('/lecturita/aura/gestion-comite/opciones')}
export function guardar(mode:ComiteMode,id:number|null,data:FormData|Record<string,unknown>){return apiRequest<void>(`/lecturita/aura/gestion-comite/${mode}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:data instanceof FormData?data:JSON.stringify(data)})}
export function eliminar(mode:ComiteMode,id:number){return apiRequest<void>(`/lecturita/aura/gestion-comite/${mode}/${id}`,{method:'DELETE'})}
export function cambiarEstado(mode:ComiteMode,id:number,estado:string,observacion=''){return apiRequest<void>(`/lecturita/aura/gestion-comite/${mode}/${id}/estado`,{method:'POST',body:JSON.stringify({estado,observacion})})}
export function descargar(mode:ComiteMode,id:number){return apiDownload(`/lecturita/aura/gestion-comite/${mode}/${id}/archivo`,`aura_${mode}_${id}.pdf`)}
