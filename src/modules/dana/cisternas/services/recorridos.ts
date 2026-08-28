import { apiRequest } from '@/services/auth'
import type { RecorridoResponse, RecorridosInicialResponse } from '../interfaces/recorridos.interface'




const base='/dana/gestion-cisternas/recorridos'
export function listarUnidadesGps(){return apiRequest<RecorridosInicialResponse>(`${base}/unidades`)}
export function consultarRecorrido(filters:{cisterna_id:number;fecha:string;desde:string;hasta:string;modoVisualizacion:'puntos'|'ruta'}){const q=new URLSearchParams({cisterna_id:String(filters.cisterna_id),fecha:filters.fecha,desde:filters.desde,hasta:filters.hasta,modoVisualizacion:filters.modoVisualizacion});return apiRequest<RecorridoResponse>(`${base}?${q}`)}
