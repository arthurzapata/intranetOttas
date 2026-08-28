import { apiDownload, apiRequest } from '@/services/auth'
import type { AccionArchivo, AccionDirectorio, AccionPage, AccionTipo } from '../interfaces/acciones.interface'
export function listarAcciones(tipo:AccionTipo,filters:{criterio:string;estado:string;page:number}){const q=new URLSearchParams({page:String(filters.page)});if(filters.criterio)q.set('criterio',filters.criterio);if(filters.estado)q.set('estado',filters.estado);return apiRequest<AccionPage>(`/lecturita/aura/directorio/${tipo}s?${q}`)}
export function detallarAccion(tipo:AccionTipo,id:number){return apiRequest<AccionDirectorio>(`/lecturita/aura/directorio/${tipo}s/${id}`)}
export function votarAccion(tipo:AccionTipo,id:number,data:{aprobado:boolean;comentario:string}){return apiRequest<void>(`/lecturita/aura/directorio/${tipo}s/${id}/visto-bueno`,{method:'POST',body:JSON.stringify(data)})}
export function finalizarAccion(tipo:AccionTipo,id:number,respuesta:string){return apiRequest<void>(`/lecturita/aura/directorio/${tipo}s/${id}/finalizar`,{method:'POST',body:JSON.stringify({respuesta})})}
export function subirArchivoAccion(tipo:AccionTipo,id:number,archivo:File){const data=new FormData();data.append('archivo',archivo);return apiRequest<void>(`/lecturita/aura/directorio/${tipo}s/${id}/archivos`,{method:'POST',body:data})}
export function eliminarArchivoAccion(tipo:AccionTipo,id:number,archivoId:number){return apiRequest<void>(`/lecturita/aura/directorio/${tipo}s/${id}/archivos/${archivoId}`,{method:'DELETE'})}
export function descargarArchivoAccion(tipo:AccionTipo,id:number,archivo:AccionArchivo){return apiDownload(`/lecturita/aura/directorio/${tipo}s/${id}/archivos/${archivo.id}`,archivo.archivo)}
