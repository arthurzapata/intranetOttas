import { apiRequest } from '@/services/auth'
export interface UnidadGps { id:number; placa:string; conductor:string; capacidad:number; celular:string; tipo:string; latitud:number|null; longitud:number|null; fecha:string|null; hora:string|null; velocidad:number|null; bateria:number|null }
export interface PuntoRecorrido { latitud:number; longitud:number; fechahora:string; velocidad:number|null; bateria:number|null; estado:'INICIO'|'INTERMEDIO'|'FIN' }
export interface RecorridoResponse { unidad:UnidadGps; puntos:PuntoRecorrido[]; segmentos:{latitud:number;longitud:number}[][]; total_km:number; count:number }
export interface RecorridosInicialResponse { unidades:UnidadGps[]; actualizadas:number; sin_ubicacion:number }
const base='/lecturita/dana/gestion-cisternas/recorridos'
export function listarUnidadesGps(){return apiRequest<RecorridosInicialResponse>(`${base}/unidades`)}
export function consultarRecorrido(filters:{cisterna_id:number;fecha:string;desde:string;hasta:string;modoVisualizacion:'puntos'|'ruta'}){const q=new URLSearchParams({cisterna_id:String(filters.cisterna_id),fecha:filters.fecha,desde:filters.desde,hasta:filters.hasta,modoVisualizacion:filters.modoVisualizacion});return apiRequest<RecorridoResponse>(`${base}?${q}`)}
