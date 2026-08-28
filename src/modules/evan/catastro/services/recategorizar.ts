import type { Recategorizacion, CambioPayload } from '../interfaces/recategorizar.interface'
import{apiRequest}from'@/services/auth'






const base='/evan/catastro/recategorizaciones'
export const listarRecategorizaciones=()=>apiRequest<Recategorizacion[]>(base)
export const cambiarCategorias=(id:number,data:CambioPayload)=>apiRequest<void>(`${base}/${id}/cambiar`,{method:'POST',body:JSON.stringify(data)})
