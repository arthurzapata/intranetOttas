import { apiRequest } from '@/services/auth'
export interface Option{id:number;nombre:string}
export interface DistritoAvance{id:number;nombre:string;validados:number;total:number}
export interface CasoAtipico{id:number;cliente:string;direccion:string;distrito:string;ruta:string;medidor:string;suministro:string;inscripcion:string;categoria:string;lectura_anterior:number;lectura_actual:number;consumo:number;promedio:number;tipo_error:string;desviacion:number;fecha_lectura:string;estado:'pendiente'|'notificado'|'validado';ticket_id?:number;notificacion_id?:number;fotografias?:string[];detalle_notificacion?:string}
export interface AtipicoPage{data:CasoAtipico[];total:number;page:number;last_page:number;distritos:DistritoAvance[];resumen:{pendientes:number;notificados:number;validados:number}}
const base='/lecturita/evan/medicion/atipicos',qs=(v:Record<string,string|number>)=>{const p=new URLSearchParams();Object.entries(v).forEach(([k,x])=>x!==''&&p.set(k,String(x)));return p}
export const listarAtipicos=(f:Record<string,string|number>)=>apiRequest<AtipicoPage>(`${base}?${qs(f)}`)
export const obtenerAtipico=(id:number)=>apiRequest<CasoAtipico>(`${base}/${id}`)
export const notificarAtipico=(id:number,data:FormData)=>apiRequest<CasoAtipico>(`${base}/${id}/notificar`,{method:'POST',body:data})
export const urlReporteAtipicos=(distritoId:string|number)=>`${base}/distritos/${distritoId}/reporte`
