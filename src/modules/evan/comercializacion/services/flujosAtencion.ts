import { apiRequest } from '@/services/auth'
export interface FlujoAtencion{id:number;codigo:string;tipo:string;descripcion:string;activo:boolean;acciones:number;creado?:string}
export interface Page{data:FlujoAtencion[];total:number;page:number;last_page:number}
const base='/lecturita/evan/comercializacion/flujos-atencion'
export const listarFlujos=(criterio:string,tipo:string,page:number)=>apiRequest<Page>(`${base}?criterio=${encodeURIComponent(criterio)}&tipo=${tipo}&page=${page}`)
export const crearFlujo=(data:Record<string,unknown>)=>apiRequest<FlujoAtencion>(base,{method:'POST',body:JSON.stringify(data)})
export const actualizarFlujo=(id:number,data:Record<string,unknown>)=>apiRequest<FlujoAtencion>(`${base}/${id}`,{method:'PUT',body:JSON.stringify(data)})
