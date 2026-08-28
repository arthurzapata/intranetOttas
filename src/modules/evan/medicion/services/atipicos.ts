import { apiRequest } from '@/services/auth'
import type { CasoAtipico, AtipicoPage } from '../interfaces/atipicos.interface'




const base='/lecturita/evan/medicion/atipicos',qs=(v:Record<string,string|number>)=>{const p=new URLSearchParams();Object.entries(v).forEach(([k,x])=>x!==''&&p.set(k,String(x)));return p}
export const listarAtipicos=(f:Record<string,string|number>)=>apiRequest<AtipicoPage>(`${base}?${qs(f)}`)
export const obtenerAtipico=(id:number)=>apiRequest<CasoAtipico>(`${base}/${id}`)
export const notificarAtipico=(id:number,data:FormData)=>apiRequest<CasoAtipico>(`${base}/${id}/notificar`,{method:'POST',body:data})
export const urlReporteAtipicos=(distritoId:string|number)=>`${base}/distritos/${distritoId}/reporte`
