import { apiRequest } from '@/services/auth'
import type { FiltrosLibroMayor, LibroMayorResponse } from '../interfaces/libroMayor.interface'
const base='/mia/contabilidad/proceso/libro-mayor'
export const obtenerOpcionesLibroMayor=()=>apiRequest<LibroMayorResponse>(base)
export const consultarLibroMayor=(filtros:FiltrosLibroMayor)=>apiRequest<LibroMayorResponse>(base,{method:'POST',body:JSON.stringify(filtros)})
