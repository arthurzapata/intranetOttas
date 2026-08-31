import { apiRequest } from '@/services/auth'
import type { CalcularPlanillaPayload, DetalleTrabajadorProcesoResponse, FiltrosProcesosPlanilla, ProcesoPlanilla, ProcesoPlanillaPayload, ProcesosPlanillaResponse, SeleccionTrabajadoresResponse, TrabajadoresProcesoResponse } from '../interfaces/procesoPlanilla.interface'
const base='/mia/rrhh/planilla/procesos'
export function listarProcesosPlanilla(filtros:FiltrosProcesosPlanilla,page:number){const q=new URLSearchParams({page:String(page)});Object.entries(filtros).forEach(([k,v])=>{if(v!==null&&v!=='')q.set(k,String(v))});return apiRequest<ProcesosPlanillaResponse>(`${base}?${q}`)}
export const crearProcesoPlanilla=(payload:ProcesoPlanillaPayload)=>apiRequest<ProcesoPlanilla>(base,{method:'POST',body:JSON.stringify(payload)})
export const obtenerProcesoPlanilla=(id:number)=>apiRequest<ProcesoPlanilla>(`${base}/${id}`)
export const ejecutarAccionProceso=(id:number,accion:'recalcular-todo'|'validar'|'cerrar'|'anular')=>apiRequest<ProcesoPlanilla>(`${base}/${id}/${accion}`,{method:'POST'})
export function listarTrabajadoresCalculo(id:number,q:string,page:number){const params=new URLSearchParams({q,page:String(page)});return apiRequest<SeleccionTrabajadoresResponse>(`${base}/${id}/seleccionar-trabajadores?${params}`)}
export const calcularProcesoPlanilla=(id:number,payload:CalcularPlanillaPayload)=>apiRequest<ProcesoPlanilla>(`${base}/${id}/calcular`,{method:'POST',body:JSON.stringify(payload)})
export const obtenerResumenProcesoPlanilla=(id:number)=>apiRequest<ProcesoPlanilla>(`${base}/${id}/resumen`)
export function listarTrabajadoresProceso(id:number,q:string,page:number){const params=new URLSearchParams({page:String(page)});if(q)params.set('q',q);return apiRequest<TrabajadoresProcesoResponse>(`${base}/${id}/trabajadores?${params}`)}
export const obtenerDetalleTrabajadorProceso=(id:number,trabajadorId:number)=>apiRequest<DetalleTrabajadorProcesoResponse>(`${base}/${id}/trabajadores/${trabajadorId}/detalle`)
