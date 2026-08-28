import { apiRequest } from '@/services/auth'
import type { Fiscalizacion, ExpedientePas, Page } from '../interfaces/pas.interface'






const qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarFiscalizaciones=(f:Record<string,string|number>)=>apiRequest<Page<Fiscalizacion>>(`/lecturita/mat/pas/fiscalizaciones?${qs(f)}`)
export const listarExpedientesPas=(f:Record<string,string|number>)=>apiRequest<Page<ExpedientePas>>(`/lecturita/mat/pas/expedientes?${qs(f)}`)
export const detalleFiscalizacion=(id:number)=>apiRequest<Fiscalizacion>(`/lecturita/mat/pas/fiscalizaciones/${id}`)
export const detallePas=(id:number)=>apiRequest<ExpedientePas>(`/lecturita/mat/pas/expedientes/${id}`)
export const registrarFiscalizacion=(data:FormData)=>apiRequest<{id:number}>('/lecturita/mat/pas/fiscalizaciones',{method:'POST',body:data})
