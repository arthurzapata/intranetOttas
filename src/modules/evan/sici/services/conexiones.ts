import { apiRequest } from '@/services/auth'
import type { Titular, ConexionSici, ConexionPage, ConexionPayload } from '../interfaces/conexiones.interface'







const base = '/lecturita/evan/sici/conexiones'
const query = (values: Record<string, string | number>) => {
  const params = new URLSearchParams()
  Object.entries(values).forEach(([key, value]) => value !== '' && params.set(key, String(value)))
  return params
}

export const listarConexiones = (filters: Record<string, string | number>) =>
  apiRequest<ConexionPage>(`${base}?${query(filters)}`)
export const buscarTitular = (dni: string) =>
  apiRequest<Titular | null>(`${base}/titulares/${encodeURIComponent(dni)}`)
export const registrarConexion = (payload: ConexionPayload) =>
  apiRequest<ConexionSici>(base, { method: 'POST', body: JSON.stringify(payload) })
