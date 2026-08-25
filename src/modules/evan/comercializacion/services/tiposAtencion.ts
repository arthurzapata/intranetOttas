import { apiRequest } from '@/services/auth'
export interface Accion{id:number;nombre:string;descripcion?:string;seccion:string}
export interface Paso extends Accion{pivot_id?:number;condicion?:string;tipo_accion?:number;secuencia:number}
export interface TipoAtencion{id:number;nombre:string;tipo:string;grupo?:string;pasos?:Paso[]}
export interface Page{data:TipoAtencion[];total:number;page:number;last_page:number;acciones:Accion[]}
const base='/lecturita/evan/comercializacion/tipos-atencion'
export const listarTipos=(criterio:string,page:number)=>apiRequest<Page>(`${base}?criterio=${encodeURIComponent(criterio)}&page=${page}`)
export const detalleTipo=(id:number)=>apiRequest<TipoAtencion>(`${base}/${id}`)
export const crearTipo=(data:{tipo:string;nombre:string})=>apiRequest<TipoAtencion>(base,{method:'POST',body:JSON.stringify(data)})
export const agregarPaso=(id:number,data:Record<string,unknown>)=>apiRequest<void>(`${base}/${id}/pasos`,{method:'POST',body:JSON.stringify(data)})
export const eliminarPaso=(id:number,paso:number)=>apiRequest<void>(`${base}/${id}/pasos/${paso}`,{method:'DELETE'})
