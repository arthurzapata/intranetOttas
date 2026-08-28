import { apiRequest } from '@/services/auth'
import type { UnidadEvidencia, EvidenciasResponse, GaleriaResponse } from '../interfaces/evidencias.interface'




const base='/dana/gestion-cisternas/evidencias'
export function listarUnidadesEvidencia(criterio=''){const q=new URLSearchParams({criterio});return apiRequest<EvidenciasResponse>(`${base}?${q}`)}
export function registrarEvidencia(unit:UnidadEvidencia,file:File,comentario:string,latitud:number|null,longitud:number|null){const data=new FormData();data.append('programacion_cisterna_id',String(unit.id_programacion_cisterna));data.append('programacion_id',String(unit.id_programacion));data.append('transporte_id',String(unit.id_cisterna));data.append('vuelta',String(unit.numero_vueltas_confirmadas));data.append('imagen',file,file.name);data.append('comentario',comentario);if(latitud!==null)data.append('latitud',String(latitud));if(longitud!==null)data.append('longitud',String(longitud));return apiRequest<{success:boolean;message:string}>(`${base}`,{method:'POST',body:data})}
export function listarGaleria(programacionId:number,cisternaId:number,page=1){return apiRequest<GaleriaResponse>(`${base}/programaciones/${programacionId}/cisternas/${cisternaId}?page=${page}`)}
