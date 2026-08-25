import { apiRequest } from '@/services/auth'
export interface Option{id:number|string;nombre:string}
export interface Movimiento{id:number;estado:string;usuario?:string;fecha:string}
export interface Participante{id:number;nombre:string;rol:'atendido'|'colaborador';oficina?:string}
export interface Requerimiento{id:number;observacion:string;estado:'sin recibir'|'liberado'|'recibido'|'finalizado';fecha_iniciado:string;fecha_finalizado?:string;origen?:string;solicitante?:string;oficina?:string;empresa?:string;responsable?:string;categoria?:string;solucion?:string;archivo?:string;archivo_finalizado?:string;movimientos?:Movimiento[];participantes?:Participante[];puede_recibir?:boolean;puede_liberar?:boolean;puede_finalizar?:boolean}
export interface Options{estados:Option[];origenes:Option[];categorias:Option[];usuarios:Option[]}
export interface Page{data:Requerimiento[];total:number;page:number;last_page:number;options:Options;summary?:{sin_recibir:number;recibidos:number;finalizados:number}}
const qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarRequerimientos=(f:Record<string,string|number>)=>apiRequest<Page>(`/lecturita/helpdesk/requerimientos?${qs(f)}`)
export const detalleRequerimiento=(id:number)=>apiRequest<Requerimiento>(`/lecturita/helpdesk/requerimientos/${id}`)
export const registrarRequerimiento=(data:FormData)=>apiRequest<{id:number}>('/lecturita/helpdesk/requerimientos',{method:'POST',body:data})
export const recibirRequerimiento=(id:number)=>apiRequest<void>(`/lecturita/helpdesk/requerimientos/${id}/recibir`,{method:'POST'})
export const liberarRequerimiento=(id:number)=>apiRequest<void>(`/lecturita/helpdesk/requerimientos/${id}/liberar`,{method:'POST'})
export const finalizarRequerimiento=(id:number,data:FormData)=>apiRequest<void>(`/lecturita/helpdesk/requerimientos/${id}/finalizar`,{method:'POST',body:data})
