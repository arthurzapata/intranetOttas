import { apiDownload, apiRequest } from '@/services/auth'
import type { EmpresaAvance, EvidenciaBgc, PilarBgc, ProcesoBgc } from '../interfaces/bgc.interface'
export function obtenerEstructura(){return apiRequest<{pilares:PilarBgc[];tipos_criterio:Array<{id:number;nombre:string}>}>('/lecturita/aura/bgc/estructura')}
export function guardarNodo(tipo:'pilar'|'estandar'|'componente'|'criterio',id:number|null,data:Record<string,unknown>){return apiRequest<void>(`/lecturita/aura/bgc/estructura/${tipo}${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function eliminarNodo(tipo:string,id:number){return apiRequest<void>(`/lecturita/aura/bgc/estructura/${tipo}/${id}`,{method:'DELETE'})}
export function listarProcesos(){return apiRequest<ProcesoBgc[]>('/lecturita/aura/bgc/procesos')}
export function guardarProceso(id:number|null,data:Omit<ProcesoBgc,'id'>){return apiRequest<void>(`/lecturita/aura/bgc/procesos${id?`/${id}`:''}`,{method:id?'PUT':'POST',body:JSON.stringify(data)})}
export function estructuraProceso(id:number){return apiRequest<{proceso:ProcesoBgc;pilares:PilarBgc[]}>(`/lecturita/aura/bgc/procesos/${id}/estructura`)}
export function listarEvidencias(procesoId:number,criterioId:number){return apiRequest<EvidenciaBgc[]>(`/lecturita/aura/bgc/procesos/${procesoId}/criterios/${criterioId}/evidencias`)}
export function subirEvidencia(procesoId:number,criterioId:number,archivo:File,descripcion:string){const d=new FormData();d.append('archivo',archivo);d.append('descripcion',descripcion);return apiRequest<void>(`/lecturita/aura/bgc/procesos/${procesoId}/criterios/${criterioId}/evidencias`,{method:'POST',body:d})}
export function revisarEvidencia(procesoId:number,evidenciaId:number,estado:'aprobado'|'observado',observacion:string){return apiRequest<void>(`/lecturita/aura/bgc/procesos/${procesoId}/evidencias/${evidenciaId}/revision`,{method:'POST',body:JSON.stringify({estado,observacion})})}
export function opcionesAvance(){return apiRequest<{periodos:string[];empresas:Array<{id:number;nombre:string}>}>('/lecturita/aura/bgc/control-avance/opciones')}
export function controlAvance(periodo:string,empresas:number[]){const q=new URLSearchParams({periodo});empresas.forEach(id=>q.append('empresas[]',String(id)));return apiRequest<EmpresaAvance[]>(`/lecturita/aura/bgc/control-avance?${q}`)}
export function descargarAvance(empresaId:number,periodo:string){return apiDownload(`/lecturita/aura/bgc/control-avance/${empresaId}/${periodo}/resumen`,`avance_bgc_${periodo}.pdf`)}
