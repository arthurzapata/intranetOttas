import { apiDownload, apiRequest } from '@/services/auth'
export interface CriterioBgc{id:number;nombre:string;descripcion?:string;tipo_criterio?:{id:number;nombre:string};estado:boolean;evidencias_count?:number}
export interface ComponenteBgc{id:number;nombre:string;descripcion?:string;estado:boolean;criterios:CriterioBgc[]}
export interface EstandarBgc{id:number;nombre:string;descripcion?:string;estado:boolean;componentes:ComponenteBgc[]}
export interface PilarBgc{id:number;nombre:string;descripcion?:string;estado:boolean;estandares:EstandarBgc[]}
export interface ProcesoBgc{id:number;nombre:string;periodo:string;descripcion?:string;tipo:'carga'|'revision'|'evaluacion';estado:'carga_evidencia'|'en_proceso'|'cerrado'}
export interface EvidenciaBgc{id:number;criterio_id:number;archivo:string;descripcion?:string;estado?:'pendiente'|'aprobado'|'observado';observacion?:string;created_at?:string;usuario?:string}
export interface EmpresaAvance{id:number;nombre:string;total:number;cargados:number;aprobados:number;observados:number;pendientes:number;criterios:Array<{tipo:string;total:number;avance:number}>;proceso_periodo?:string}
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
