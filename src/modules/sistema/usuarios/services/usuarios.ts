import type { Usuario, Page, Payload, Accesos } from '../interfaces/usuarios.interface'
import{apiRequest}from'@/services/auth'







const base='/sistema/usuarios';export const listarUsuarios=(criterio='',empresaId=0,page=1)=>apiRequest<Page>(`${base}?criterio=${encodeURIComponent(criterio)}&empresa_id=${empresaId||''}&page=${page}`);export const crearUsuario=(data:Payload)=>apiRequest<Usuario>(base,{method:'POST',body:JSON.stringify(data)});export const actualizarUsuario=(id:number,data:Payload)=>apiRequest<Usuario>(`${base}/${id}`,{method:'PUT',body:JSON.stringify(data)});export const verAccesos=(id:number)=>apiRequest<Accesos>(`${base}/${id}/accesos`);export const asignarModulo=(id:number,modulo_id:number,tipo:string)=>apiRequest<void>(`${base}/${id}/modulos`,{method:'POST',body:JSON.stringify({modulo_id,tipo})});export const quitarModulo=(id:number,moduloId:number)=>apiRequest<void>(`${base}/${id}/modulos/${moduloId}`,{method:'DELETE'});export const asignarEmpresa=(id:number,empresa_id:number)=>apiRequest<void>(`${base}/${id}/empresas`,{method:'POST',body:JSON.stringify({empresa_id})});export const quitarEmpresa=(id:number,empresaId:number)=>apiRequest<void>(`${base}/${id}/empresas/${empresaId}`,{method:'DELETE'})
