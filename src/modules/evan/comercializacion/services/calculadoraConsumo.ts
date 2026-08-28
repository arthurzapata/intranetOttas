import { apiRequest } from '@/services/auth'
import type { ConfiguracionCalculadora } from '../interfaces/calculadoraConsumo.interface'




export const obtenerConfiguracion=()=>apiRequest<ConfiguracionCalculadora>('/lecturita/evan/comercializacion/calculadora-consumo/configuracion')
