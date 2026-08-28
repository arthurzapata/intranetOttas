import { apiRequest } from '@/services/auth'
import type { Cliente, Page } from '../interfaces/clientes.interface'






export const listarClientes=(criterio:string,page=1)=>apiRequest<Page>(`/evan/comercializacion/clientes?criterio=${encodeURIComponent(criterio)}&page=${page}`)
export const detalleCliente=(id:number)=>apiRequest<Cliente>(`/evan/comercializacion/clientes/${id}`)
export const registrarCliente=(data:Record<string,string|number>)=>apiRequest<{id:number}>('/evan/comercializacion/clientes',{method:'POST',body:JSON.stringify(data)})
