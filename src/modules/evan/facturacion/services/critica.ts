import { apiRequest } from '@/services/auth'
import type { Ciclo, Distrito } from '../interfaces/critica.interface'




const base='/lecturita/evan/facturacion/critica'
export const listarCritica=()=>apiRequest<{distritos:Distrito[]}>(base)
export const detalleDistrito=(id:number)=>apiRequest<Distrito>(`${base}/distritos/${id}`)
export const preFacturarCiclo=(id:number)=>apiRequest<Ciclo>(`${base}/ciclos/${id}/pre-facturar`,{method:'POST'})
export const preFacturarDistrito=(id:number)=>apiRequest<Distrito>(`${base}/distritos/${id}/pre-facturar`,{method:'POST'})
export const urlExportar=(id:number)=>`${base}/distritos/${id}/exportar`
