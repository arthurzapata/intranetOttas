import { apiRequest } from '@/services/auth'
import type { LecturasProduccionResponse } from '../interfaces/lecturas.interface'


const base='/lecturita/dana/produccion/lecturas'
export function listarLecturasProduccion(filters:{criterio:string;desde:string;hasta:string;tipo:string;componente_id:string},page=1){const q=new URLSearchParams({...filters,page:String(page)});return apiRequest<LecturasProduccionResponse>(`${base}?${q}`)}
export function eliminarLecturaProduccion(id:number){return apiRequest<void>(`${base}/${id}`,{method:'DELETE'})}
