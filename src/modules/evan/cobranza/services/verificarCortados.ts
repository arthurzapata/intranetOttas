import { apiRequest } from '@/services/auth'
export interface Option{id:number;nombre:string}
export interface Suministro{id:number;codigo:string;sici:string;cliente:string;direccion:string;medidor?:string;categoria:string;servicios:string[];situacion:string;registrado:boolean;fecha_revision?:string;fotografias?:string[]}
export interface Page{data:Suministro[];total:number;page:number;last_page:number;distritos:Option[];sectores:Option[];calles:Option[];observaciones:Option[];dinamicas:Option[];avance:{revisados:number;total:number}}
const base='/lecturita/evan/cobranza/verificar-cortados',qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarPadron=(f:Record<string,string|number>)=>apiRequest<Page>(`${base}?${qs(f)}`)
export const generarPadron=(sector:number)=>apiRequest<void>(`${base}/sectores/${sector}/generar`,{method:'POST'})
export const registrarVerificacion=(id:number,data:FormData)=>apiRequest<Suministro>(`${base}/${id}/verificacion`,{method:'POST',body:data})
