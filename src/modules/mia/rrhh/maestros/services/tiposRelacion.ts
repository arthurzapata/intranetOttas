import { apiRequest } from '@/services/auth'
import type { TipoOperacion, TipoRelacion, TipoRelacionPayload } from '../interfaces/tiposRelacion.interface'
const base='/mia/rrhh/maestros/tipos-relacion'
export const operaciones:TipoOperacion[]=['SUMA','RESTA','MULTIPLICA','DIVIDE','LIMITE','CONDICIONAL']
export const operacionLabels:Record<TipoOperacion,string>={SUMA:'Suma',RESTA:'Resta',MULTIPLICA:'Multiplica',DIVIDE:'Divide',LIMITE:'Límite',CONDICIONAL:'Condicional'}
export const listarTiposRelacion=()=>apiRequest<TipoRelacion[]>(base)
export function guardarTipoRelacion(id:number|null,payload:TipoRelacionPayload){return apiRequest<TipoRelacion>(`${base}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(payload)})}
export function cambiarEstadoTipoRelacion(id:number){return apiRequest<{estado:boolean;message?:string}>(`${base}/${id}/estado`,{method:'PATCH'})}
