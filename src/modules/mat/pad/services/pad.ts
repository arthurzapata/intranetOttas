import { apiRequest } from '@/services/auth'
import type { Denuncia, ExpedientePad, Page } from '../interfaces/pad.interface'






export const listarDenuncias=(filters:Record<string,string|number>)=>apiRequest<Page<Denuncia>>(`/lecturita/mat/pad/denuncias?${query(filters)}`)
export const listarExpedientesPad=(filters:Record<string,string|number>)=>apiRequest<Page<ExpedientePad>>(`/lecturita/mat/pad/expedientes?${query(filters)}`)
export const detalleDenuncia=(id:number)=>apiRequest<Denuncia>(`/lecturita/mat/pad/denuncias/${id}`)
export const detalleExpedientePad=(id:number)=>apiRequest<ExpedientePad>(`/lecturita/mat/pad/expedientes/${id}`)
export const registrarDenuncia=(data:FormData)=>apiRequest<{id:number}>('/lecturita/mat/pad/denuncias',{method:'POST',body:data})
function query(filters:Record<string,string|number>){const q=new URLSearchParams();Object.entries(filters).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
