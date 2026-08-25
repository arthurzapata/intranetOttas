import{apiRequest}from'@/services/auth'

export interface Persona{id:number;apellido_paterno:string;apellido_materno:string;nombre:string;dni:string;telefono_fijo?:string;celular?:string;email?:string;nombre_completo?:string}
export interface CambioPersona{id:number;created_at:string;apellido_paterno:string;apellido_materno:string;nombre:string;dni:string;telefono_fijo?:string;celular?:string;email?:string;usuario?:string;empresa?:string}
export interface PersonasPage{data:Persona[];total:number;current_page:number;last_page:number}
export interface PersonaDetalle{persona:Persona;logs:{data:CambioPersona[];current_page:number;last_page:number;total:number}}
export type PersonaPayload=Omit<Persona,'id'|'nombre_completo'>

const base='/lecturita/sistema/personas'
export const listarPersonas=(criterio:string,page:number)=>apiRequest<PersonasPage>(`${base}?criterio=${encodeURIComponent(criterio)}&page=${page}`)
export const detallePersona=(id:number,logPage=1)=>apiRequest<PersonaDetalle>(`${base}/${id}?log_page=${logPage}`)
export const actualizarPersona=(id:number,data:PersonaPayload)=>apiRequest<Persona>(`${base}/${id}`,{method:'PUT',body:JSON.stringify(data)})
