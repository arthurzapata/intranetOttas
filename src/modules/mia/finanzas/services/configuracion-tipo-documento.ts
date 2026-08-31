import {apiRequest} from '@/services/auth'
import type {ConfiguracionTipoDocumento,ConfiguracionTipoDocumentoPayload,ConfiguracionesTipoDocumentoResponse} from '../interfaces/configuracion-tipo-documento.interface'
const base='/mia/finanzas/configuracion-tipos-documento'
export const listarConfiguracionesTipoDocumento=(buscar='',page=1)=>apiRequest<ConfiguracionesTipoDocumentoResponse>(`${base}?buscar=${encodeURIComponent(buscar)}&page=${page}`)
export const obtenerConfiguracionTipoDocumento=(id:number)=>apiRequest<ConfiguracionTipoDocumento>(`${base}/${id}`)
export const actualizarConfiguracionTipoDocumento=(id:number,data:ConfiguracionTipoDocumentoPayload)=>apiRequest<void>(`${base}/${id}`,{method:'PUT',body:JSON.stringify(data)})