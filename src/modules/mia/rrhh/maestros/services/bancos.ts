import { apiRequest } from '@/services/auth'
import type { TipoEntidad, Banco, BancoPayload } from '../interfaces/bancos.interface'
const base = '/lecturita/mia/rrhh/maestros/bancos'

export const tiposEntidad: TipoEntidad[] = ['BANCO', 'CAJA', 'FINANCIERA', 'OTRO']

export function listarBancos(criterio: string) {
  const query = new URLSearchParams({ criterio })
  return apiRequest<Banco[]>(`${base}?${query}`)
}

export function guardarBanco(id: number | null, payload: BancoPayload) {
  return apiRequest<Banco>(`${base}${id ? `/${id}` : ''}`, {
    method: id ? 'PUT' : 'POST',
    body: JSON.stringify(payload),
  })
}

export function cambiarEstadoBanco(id: number) {
  return apiRequest<{ estado: boolean; message?: string }>(`${base}/${id}/estado`, { method: 'PATCH' })
}
