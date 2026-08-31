import { apiRequest } from '@/services/auth'
import type { FiltrosLibroInventarios, LibroInventariosResponse } from '../interfaces/libroInventarios.interface'
const base='/mia/contabilidad/proceso/libro-inventarios'
export const obtenerOpcionesLibroInventarios=()=>apiRequest<LibroInventariosResponse>(base)
export const consultarLibroInventarios=(filtros:FiltrosLibroInventarios)=>apiRequest<LibroInventariosResponse>(base,{method:'POST',body:JSON.stringify(filtros)})
