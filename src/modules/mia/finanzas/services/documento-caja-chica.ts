import { apiRequest } from '@/services/auth'
import type { DocumentoCajaChica, DocumentoCajaChicaPayload } from '../interfaces/documento-caja-chica.interface'
const base = '/mia/finanzas/documentos-caja-chica'
export const listarDocumentosCajaChica = () => apiRequest<DocumentoCajaChica[]>(base)
export const obtenerDocumentoCajaChica = (id: number) => apiRequest<DocumentoCajaChica>(`${base}/${id}`)
export const guardarDocumentoCajaChica = (id: number | null, data: DocumentoCajaChicaPayload) => apiRequest<void>(`${base}${id ? `/${id}` : ''}`, { method: id ? 'PUT' : 'POST', body: JSON.stringify(data) })
export const cambiarEstadoDocumentoCajaChica = (id: number) => apiRequest<void>(`${base}/${id}/estado`, { method: 'PATCH', body: JSON.stringify({}) })
