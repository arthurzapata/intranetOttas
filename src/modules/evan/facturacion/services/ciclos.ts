import { apiRequest } from '@/services/auth'
import type { Ciclo, Distrito } from '../interfaces/ciclos.interface'




const base='/lecturita/evan/facturacion/ciclos'
export const listarCiclos=()=>apiRequest<{distritos:Distrito[]}>(base)
export const detalleCiclo=(id:number)=>apiRequest<Ciclo>(`${base}/${id}`)
export const abrirCiclo=(sector:number,data:Record<string,string>)=>apiRequest<Ciclo>(`${base}/sectores/${sector}/aperturar`,{method:'POST',body:JSON.stringify(data)})
export const avanzarFase=(id:number)=>apiRequest<Ciclo>(`${base}/${id}/avanzar`,{method:'POST'})
export const finalizarCiclo=(id:number)=>apiRequest<void>(`${base}/${id}/finalizar`,{method:'POST'})
