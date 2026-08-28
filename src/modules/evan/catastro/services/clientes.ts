import type { Cliente, Page, Payload } from '../interfaces/clientes.interface'
import{apiRequest}from'@/services/auth'

const base='/evan/catastro/clientes';export const listarClientes=(criterio:string,page=1)=>apiRequest<Page>(`${base}?criterio=${encodeURIComponent(criterio)}&page=${page}`);export const registrarCliente=(data:Payload)=>apiRequest<Cliente>(base,{method:'POST',body:JSON.stringify(data)});export const actualizarCliente=(id:number,data:Payload)=>apiRequest<Cliente>(`${base}/${id}`,{method:'PUT',body:JSON.stringify(data)});export const eliminarCliente=(id:number)=>apiRequest<void>(`${base}/${id}`,{method:'DELETE'})
