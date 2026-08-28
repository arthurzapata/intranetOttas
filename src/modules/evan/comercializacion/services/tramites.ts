import { apiRequest } from '@/services/auth'
import type { Tramite, Page } from '../interfaces/tramites.interface'





const qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarTramites=(f:Record<string,string|number>)=>apiRequest<Page>(`/lecturita/evan/comercializacion/tramites?${qs(f)}`)
export const detalleTramite=(id:number)=>apiRequest<Tramite>(`/lecturita/evan/comercializacion/tramites/${id}`)
export const anularTramite=(id:number)=>apiRequest<void>(`/lecturita/evan/comercializacion/tramites/${id}`,{method:'DELETE'})
