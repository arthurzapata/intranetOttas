import { apiRequest } from '@/services/auth'
import type { AnuladosResponse, CargoOption, DocumentoFormOptions } from '../../interfaces/documento'

export function obtenerOpcionesRegistro() {
  return apiRequest<DocumentoFormOptions>('/lecturita/etrami/v2/documentos/opciones')
}
export function obtenerCargos(instanciaId: number) {
  return apiRequest<CargoOption[]>(`/lecturita/etrami/v2/documentos/instancias/${instanciaId}/cargos`)
}
export function registrarDocumento(data: FormData) {
  return apiRequest<{ id: number; message?: string }>('/lecturita/etrami/v2/documentos', { method:'POST', body:data })
}
export function buscarReferencias(criterio: string) {
  return apiRequest<Array<{ id:number; text:string }>>(`/lecturita/etrami/v2/documentos/referencias?criterio=${encodeURIComponent(criterio)}`)
}
export function listarAnulados(filters: { criterio:string; tipo_documento_id:number; estado:string; page:number }) {
  const query = new URLSearchParams({ page:String(filters.page) })
  Object.entries(filters).forEach(([key,value]) => { if(key !== 'page' && value !== '' && value !== 0) query.set(key,String(value)) })
  return apiRequest<AnuladosResponse>(`/lecturita/etrami/v2/documentos/anulados-rechazados?${query}`)
}
export function restaurarDocumento(tipo:'anulado'|'rechazado', id:number) {
  return apiRequest<void>(`/lecturita/etrami/v2/documentos/${tipo}/${id}/restaurar`, { method:'POST', body:JSON.stringify({}) })
}
