import { apiRequest } from '@/services/auth'
export interface Option{id:string|number;nombre:string}
export interface Fase{id:number;secuencia:number;accion:string;descripcion?:string;seccion?:string;tarea_id?:number;estado?:string;responsable?:string;fecha_atencion?:string}
export interface Tramite{id:number;numero?:string;tipo:string;categoria:string;concepto:string;cliente_id:number;cliente:string;documento?:string;distrito?:string;direccion?:string;fecha_registro:string;inicio:boolean;finalizado:boolean;estado:string;fase_actual?:string;avance?:number;fases?:Fase[];puede_anular?:boolean}
export interface Options{tipos:Option[];categorias:Option[];estados:Option[];distritos:Option[]}
export interface Page{data:Tramite[];total:number;page:number;last_page:number;options:Options;summary?:{en_espera:number;en_proceso:number;finalizados:number}}
const qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarTramites=(f:Record<string,string|number>)=>apiRequest<Page>(`/lecturita/evan/comercializacion/tramites?${qs(f)}`)
export const detalleTramite=(id:number)=>apiRequest<Tramite>(`/lecturita/evan/comercializacion/tramites/${id}`)
export const anularTramite=(id:number)=>apiRequest<void>(`/lecturita/evan/comercializacion/tramites/${id}`,{method:'DELETE'})
