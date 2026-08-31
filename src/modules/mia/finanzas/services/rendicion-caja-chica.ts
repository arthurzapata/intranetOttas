import { apiRequest } from '@/services/auth'
import type { FondosRendicionResponse, OpcionesRendicionCajaChica, PersonaRendicionCajaChica, RendicionCajaChica, RendicionCajaChicaFiltros, RendicionCajaChicaPayload, RendicionCajaChicaResponse, SiguienteNumeroRendicionResponse, TipoPersonaRendicion, TipoRendicionCajaChica } from '../interfaces/rendicion-caja-chica.interface'
const base = '/mia/finanzas/rendiciones-caja-chica'
export function listarRendicionesCajaChica(f: RendicionCajaChicaFiltros, page = 1) { const q = new URLSearchParams({ page: String(page) }); Object.entries(f).forEach(([k,v]) => { if (v) q.set(k,v) }); return apiRequest<RendicionCajaChicaResponse>(`${base}?${q}`) }
export const obtenerRendicionCajaChica = (id: number) => apiRequest<RendicionCajaChica>(`${base}/${id}`)
export const cambiarEstadoRendicionCajaChica = (id: number) => apiRequest<void>(`${base}/${id}/estado`, { method: 'PATCH', body: JSON.stringify({}) })
export const obtenerOpcionesRendicionCajaChica = () => apiRequest<OpcionesRendicionCajaChica>(`${base}/opciones`)
export const listarFondosPorRendicion = (tipo: TipoRendicionCajaChica) => apiRequest<FondosRendicionResponse>(`${base}/tipos-fondo?tipo_rendicion=${tipo}`)
export const obtenerSiguienteNumeroRendicion = (tipo: TipoRendicionCajaChica) => apiRequest<SiguienteNumeroRendicionResponse>(`${base}/siguiente-numero?tipo_rendicion=${tipo}`)
export const buscarPersonasRendicion = (tipo: TipoPersonaRendicion, query: string) => apiRequest<PersonaRendicionCajaChica[]>(`${base}/personas?tipo=${tipo}&q=${encodeURIComponent(query)}`)
export const guardarRendicionCajaChica = (data: RendicionCajaChicaPayload, id?: number) => apiRequest<RendicionCajaChica>(id ? `${base}/${id}` : base, { method: id ? 'PUT' : 'POST', body: JSON.stringify(data) })
