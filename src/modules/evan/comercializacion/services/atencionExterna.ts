import { apiRequest } from '@/services/auth'
export interface Option{id:number;nombre:string;requiere_conexion?:boolean}
export interface PreTicket{id:number;dni:string;nombre:string;apellido_paterno:string;apellido_materno:string;nombre_completo?:string;celular:string;telefono_fijo?:string;email:string;parentesco:string;distrito_id:number;distrito?:string;suministro?:string;descripcion:string;archivo?:string;fecha_registro:string;validado?:boolean;ticket_id?:number}
export interface Options{conceptos:Option[];distritos:Option[];parentescos:Option[]}
export interface Page{data:PreTicket[];total:number;page:number;last_page:number;options:Options}
const qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarPreTickets=(f:Record<string,string|number>)=>apiRequest<Page>(`/lecturita/evan/comercializacion/atencion-externa?${qs(f)}`)
export const detallePreTicket=(id:number)=>apiRequest<PreTicket>(`/lecturita/evan/comercializacion/atencion-externa/${id}`)
export const validarPreTicket=(id:number,data:Record<string,string|number>)=>apiRequest<{ticket_id:number}>(`/lecturita/evan/comercializacion/atencion-externa/${id}/validar`,{method:'POST',body:JSON.stringify(data)})
export const eliminarPreTicket=(id:number)=>apiRequest<void>(`/lecturita/evan/comercializacion/atencion-externa/${id}`,{method:'DELETE'})
