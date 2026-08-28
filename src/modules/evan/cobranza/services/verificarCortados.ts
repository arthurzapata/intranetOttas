import { apiRequest } from '@/services/auth'
import type { Suministro, Page } from '../interfaces/verificarCortados.interface'



const base='/lecturita/evan/cobranza/verificar-cortados',qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarPadron=(f:Record<string,string|number>)=>apiRequest<Page>(`${base}?${qs(f)}`)
export const generarPadron=(sector:number)=>apiRequest<void>(`${base}/sectores/${sector}/generar`,{method:'POST'})
export const registrarVerificacion=(id:number,data:FormData)=>apiRequest<Suministro>(`${base}/${id}/verificacion`,{method:'POST',body:data})
