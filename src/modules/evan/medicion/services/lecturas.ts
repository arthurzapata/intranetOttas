import { apiRequest } from '@/services/auth'
import type { Lectura, LecturaPage } from '../interfaces/lecturas.interface'



const base='/evan/medicion/lecturas',qs=(v:Record<string,string|number>)=>{const p=new URLSearchParams();Object.entries(v).forEach(([k,x])=>x!==''&&p.set(k,String(x)));return p}
export const listarLecturas=(f:Record<string,string|number>)=>apiRequest<LecturaPage>(`${base}?${qs(f)}`)
export const obtenerLectura=(id:number)=>apiRequest<Lectura>(`${base}/${id}`)
export const registrarLectura=(id:number,data:FormData)=>apiRequest<{lectura:Lectura;siguiente_id?:number}>(`${base}/${id}`,{method:'POST',body:data})
export const anularLectura=(id:number)=>apiRequest<void>(`${base}/${id}`,{method:'DELETE'})
