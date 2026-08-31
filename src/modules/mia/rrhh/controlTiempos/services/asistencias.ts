import { apiDownload, apiRequest } from '@/services/auth'
import type { AsistenciasResponse, GuardarAsistenciaPayload } from '../interfaces/asistencia.interface'

const base = '/mia/rrhh/controltiempos/asistencias'

export function listarAsistencias(regimenId:number|null, fecha:string, busqueda:string, page:number) {
  const query = new URLSearchParams({ page:String(page) })
  if (regimenId) query.set('regimen_id', String(regimenId))
  if (fecha) query.set('fecha', fecha)
  if (busqueda) query.set('q', busqueda)
  return apiRequest<AsistenciasResponse>(`${base}?${query}`)
}

export const guardarAsistencia = (payload:GuardarAsistenciaPayload) =>
  apiRequest(`${base}/guardar`, { method:'POST', body:JSON.stringify(payload) })

export function importarAsistencias(archivo:File, regimenId:number|null, fecha:string, busqueda:string) {
  const data = new FormData()
  data.append('archivo_excel', archivo)
  if (regimenId) data.append('regimen_id_filter', String(regimenId))
  data.append('fecha_filter', fecha)
  data.append('q_filter', busqueda)
  return apiRequest<{message?:string}>(`${base}/importar`, { method:'POST', body:data })
}

export const descargarPlantillaAsistencias = () => apiDownload(`${base}/plantilla`, 'plantilla_asistencias.xlsx')

