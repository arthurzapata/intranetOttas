import { apiRequest } from '@/services/auth'

export interface Option { id:number; nombre:string; requiere_conexion?:boolean }
export interface Interaccion { id:number; tipo:string; descripcion:string; usuario:string; fecha:string; archivo?:string }
export interface TareaTicket { id:number; descripcion:string; seccion?:string; estado:string; responsable?:string; fecha:string }
export interface Ticket { id:number; dni:string; cliente:string; celular?:string; email?:string; tipo_atencion:string; tipo_atencion_id?:number; medio_recepcion?:string; detalle:string; suministro?:string; distrito?:string; referencia?:string; responsable?:string; estado:string; fecha_recepcion:string; fecha_finalizacion?:string; interacciones?:Interaccion[]; tareas?:TareaTicket[]; puede_recibir?:boolean; puede_liberar?:boolean; puede_cerrar?:boolean; puede_eliminar?:boolean }
export interface Options { tipos_atencion:Option[]; medios:Option[]; distritos:Option[]; secciones:Option[]; tipos_interaccion:Option[] }
export interface Page { data:Ticket[]; total:number; page:number; last_page:number; options:Options }
const qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
const base='/lecturita/evan/comercializacion/call-center'
export const listarTickets=(f:Record<string,string|number>)=>apiRequest<Page>(`${base}?${qs(f)}`)
export const detalleTicket=(id:number)=>apiRequest<Ticket>(`${base}/${id}`)
export const crearTicket=(data:Record<string,unknown>)=>apiRequest<Ticket>(base,{method:'POST',body:JSON.stringify(data)})
export const recibirTicket=(id:number)=>apiRequest<void>(`${base}/${id}/recibir`,{method:'POST'})
export const liberarTicket=(id:number)=>apiRequest<void>(`${base}/${id}/liberar`,{method:'POST'})
export const agregarInteraccion=(id:number,data:FormData)=>apiRequest<void>(`${base}/${id}/interacciones`,{method:'POST',body:data})
export const crearTareaTicket=(id:number,data:Record<string,unknown>)=>apiRequest<void>(`${base}/${id}/tareas`,{method:'POST',body:JSON.stringify(data)})
export const cerrarTicket=(id:number,data:Record<string,unknown>)=>apiRequest<void>(`${base}/${id}/cerrar`,{method:'POST',body:JSON.stringify(data)})
export const eliminarTicket=(id:number)=>apiRequest<void>(`${base}/${id}`,{method:'DELETE'})
