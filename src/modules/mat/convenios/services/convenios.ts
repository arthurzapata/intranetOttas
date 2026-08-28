import { apiRequest } from '@/services/auth'
import type { Convenio, Page } from '../interfaces/convenios.interface'







const qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarConvenios=(f:Record<string,string|number>)=>apiRequest<Page>(`/lecturita/mat/convenios?${qs(f)}`)
export const detalleConvenio=(id:number)=>apiRequest<Convenio>(`/lecturita/mat/convenios/${id}`)
export const registrarConvenio=(data:FormData)=>apiRequest<{id:number}>('/lecturita/mat/convenios',{method:'POST',body:data})
