import { apiRequest } from '@/services/auth'
export interface TipoTrabajo{id:number;tipo:string;descripcion:string;duracion:string;proceso:string;se_informa:string;movimiento_genera:string;activo:boolean;usos?:number}
export interface Page{data:TipoTrabajo[];total:number;page:number;last_page:number}
const base='/lecturita/evan/comercializacion/tipos-trabajo'
export const listarTiposTrabajo=(criterio:string,estado:string,page:number)=>apiRequest<Page>(`${base}?criterio=${encodeURIComponent(criterio)}&estado=${estado}&page=${page}`)
export const crearTipoTrabajo=(data:Record<string,unknown>)=>apiRequest<TipoTrabajo>(base,{method:'POST',body:JSON.stringify(data)})
export const actualizarTipoTrabajo=(id:number,data:Record<string,unknown>)=>apiRequest<TipoTrabajo>(`${base}/${id}`,{method:'PUT',body:JSON.stringify(data)})
