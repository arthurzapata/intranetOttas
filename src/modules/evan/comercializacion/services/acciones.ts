import { apiRequest } from '@/services/auth'
export interface Option{id:number;nombre:string}
export interface Accion{id:number;seccion_id:number;seccion:string;nombre:string;descripcion:string;duracion:string;proceso:string;se_informa:string;movimiento_genera:string;flujos?:number}
export interface Page{data:Accion[];total:number;page:number;last_page:number;secciones:Option[]}
const base='/lecturita/evan/comercializacion/acciones'
export const listarAcciones=(criterio:string,seccion:string,page:number)=>apiRequest<Page>(`${base}?criterio=${encodeURIComponent(criterio)}&seccion_id=${seccion}&page=${page}`)
export const crearAccion=(data:Record<string,unknown>)=>apiRequest<Accion>(base,{method:'POST',body:JSON.stringify(data)})
