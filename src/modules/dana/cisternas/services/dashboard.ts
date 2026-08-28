import { apiDownload, apiRequest } from '@/services/auth'
import type { DashboardCisternasResponse } from '../interfaces/dashboard.interface'


const base='/dana/gestion-cisternas/dashboard'
export function obtenerDashboardCisternas(desde:string,hasta:string){const q=new URLSearchParams({desde,hasta});return apiRequest<DashboardCisternasResponse>(`${base}?${q}`)}
export function exportarProgramaciones(desde:string,hasta:string){const q=new URLSearchParams({desde,hasta});return apiDownload(`/dana/gestion-cisternas/programaciones/excel?${q}`,'programacionesPeriodo.xlsx')}
