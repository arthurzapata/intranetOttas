import { apiRequest } from '@/services/auth'
export interface Option{id:number;nombre:string;requiere_conexion?:boolean}
export interface Fase{id:number;nombre:string;secuencia:number;estado:string;responsable?:string;fecha_inicio?:string;fecha_fin?:string}
export interface Solicitud{id:number;numero?:string;cliente_id:number;cliente:string;documento?:string;concepto_id:number;concepto:string;distrito?:string;direccion:string;referencia:string;observacion?:string;estado:string;inicio:boolean;fecha_registro:string;fase_actual?:string;responsable?:string;conexion_codigo?:string;fases?:Fase[];puede_anular?:boolean}
export interface Options{conceptos:Option[];distritos:Option[];clientes:Option[];conexiones:Option[];estados:Option[]}
export interface Page{data:Solicitud[];total:number;page:number;last_page:number;options:Options}
const qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarSolicitudes=(f:Record<string,string|number>)=>apiRequest<Page>(`/lecturita/evan/comercializacion/solicitudes?${qs(f)}`)
export const detalleSolicitud=(id:number)=>apiRequest<Solicitud>(`/lecturita/evan/comercializacion/solicitudes/${id}`)
export const registrarSolicitud=(data:Record<string,string|number>)=>apiRequest<{id:number}>('/lecturita/evan/comercializacion/solicitudes',{method:'POST',body:JSON.stringify(data)})
export const conexionesCliente=(clienteId:number)=>apiRequest<Option[]>(`/lecturita/evan/comercializacion/clientes/${clienteId}/conexiones`)
export const anularSolicitud=(id:number)=>apiRequest<void>(`/lecturita/evan/comercializacion/solicitudes/${id}`,{method:'DELETE'})
