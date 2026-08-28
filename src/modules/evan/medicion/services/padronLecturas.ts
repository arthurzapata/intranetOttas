import { apiRequest } from '@/services/auth'
import type { PadronPage } from '../interfaces/padronLecturas.interface'






const base='/evan/medicion/padron-lecturas'
const qs=(values:Record<string,string|number>)=>{const params=new URLSearchParams();Object.entries(values).forEach(([key,value])=>value!==''&&params.set(key,String(value)));return params}
export const listarPadron=(filters:Record<string,string|number>)=>apiRequest<PadronPage>(`${base}?${qs(filters)}`)
export const generarPadron=(sectorId:number)=>apiRequest<{generados:number}>(`${base}/sectores/${sectorId}/generar`,{method:'POST'})
export const anularLectura=(lecturaId:number)=>apiRequest<void>(`${base}/lecturas/${lecturaId}`,{method:'DELETE'})
export const urlImpresionRuta=(rutaId:number)=>`${base}/rutas/${rutaId}/imprimir`
