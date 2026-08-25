import { apiRequest } from '@/services/auth'
export interface Option{id:number;nombre:string;descripcion?:string}
export interface AccionFlujo{id:number;flujo_id:number;flujo:string;tipo_trabajo_id:number;tipo_trabajo:string;condicion:string;accion_si_id:number;accion_si:string;accion_no_id:number;accion_no:string;secuencia:number;activo:boolean}
export interface Page{data:AccionFlujo[];total:number;page:number;last_page:number;flujos:Option[];tipos_trabajo:Option[];acciones:Option[]}
const base='/lecturita/evan/comercializacion/acciones-flujo'
const qs=(x:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(x).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarAccionesFlujo=(f:Record<string,string|number>)=>apiRequest<Page>(`${base}?${qs(f)}`)
export const crearAccionFlujo=(data:Record<string,unknown>)=>apiRequest<AccionFlujo>(base,{method:'POST',body:JSON.stringify(data)})
export const actualizarAccionFlujo=(id:number,data:Record<string,unknown>)=>apiRequest<AccionFlujo>(`${base}/${id}`,{method:'PUT',body:JSON.stringify(data)})
export const eliminarAccionFlujo=(id:number)=>apiRequest<void>(`${base}/${id}`,{method:'DELETE'})
