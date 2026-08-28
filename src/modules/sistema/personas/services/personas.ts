import type { Persona, PersonasPage, PersonaDetalle, PersonaPayload } from '../interfaces/personas.interface'
import{apiRequest}from'@/services/auth'







const base='/lecturita/sistema/personas'
export const listarPersonas=(criterio:string,page:number)=>apiRequest<PersonasPage>(`${base}?criterio=${encodeURIComponent(criterio)}&page=${page}`)
export const detallePersona=(id:number,logPage=1)=>apiRequest<PersonaDetalle>(`${base}/${id}?log_page=${logPage}`)
export const actualizarPersona=(id:number,data:PersonaPayload)=>apiRequest<Persona>(`${base}/${id}`,{method:'PUT',body:JSON.stringify(data)})
