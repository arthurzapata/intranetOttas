import { apiRequest } from '@/services/auth'
import type { PlanoResponse } from '../interfaces/planos.interface'




const base='/dana/planos'
export function obtenerPlano(sistemaId:string=''){return apiRequest<PlanoResponse>(`${base}${sistemaId?`?sistema_id=${encodeURIComponent(sistemaId)}`:''}`)}
