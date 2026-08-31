import { apiRequest } from '@/services/auth'
import type { BitacoraFiltros, BitacoraFinanzas, BitacoraResponse } from '../interfaces/bitacora.interface'
const base='/mia/finanzas/bitacora'
export function listarBitacora(f:BitacoraFiltros,page:number){const q=new URLSearchParams({page:String(page)});Object.entries(f).forEach(([k,v])=>{if(v)q.set(k,v)});return apiRequest<BitacoraResponse>(`${base}?${q}`)}
export const obtenerBitacora=(id:number)=>apiRequest<BitacoraFinanzas>(`${base}/${id}`)

