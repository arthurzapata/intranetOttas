import { apiRequest } from '@/services/auth'
import type { TipoComponente, TipoComponentePayload } from '../interfaces/tiposComponente.interface'


const base='/lecturita/dana/catastro-tecnico/tipos-componentes'
export function listarTiposComponente(criterio:string){return apiRequest<TipoComponente[]>(`${base}?criterio=${encodeURIComponent(criterio)}`)}
export function guardarTipoComponente(data:TipoComponentePayload,id?:number){const body=new FormData();body.append('nombre',data.nombre);body.append('categoria',data.categoria);body.append('puntos',String(data.puntos));body.append('color',data.color);body.append('grosor',String(data.grosor));body.append('descripcion',data.descripcion);if(data.icono)body.append('icono',data.icono);if(id)body.append('_method','PUT');return apiRequest<TipoComponente>(id?`${base}/${id}`:base,{method:'POST',body})}
export function eliminarTipoComponente(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
