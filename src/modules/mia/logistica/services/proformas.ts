import { apiRequest } from '@/services/auth'
import type { ProformasResponse, ProveedorCotizacion } from '../interfaces/proformas.interface'
const base='/mia/logistica/proformas'
export function listarProformas(evaluacionId:number|null){return apiRequest<ProformasResponse>(`${base}${evaluacionId?`?evaluacion_id=${evaluacionId}`:''}`)}
export function buscarProveedorRuc(ruc:string){return apiRequest<ProveedorCotizacion>(`${base}/proveedores/${encodeURIComponent(ruc)}`)}
export function guardarProforma(evaluacionId:number,data:{proveedor_id:number;fecha_vencimiento:string;items:Array<{item_id:number;cantidad:number;precio_unitario:number}>}){return apiRequest<void>(`${base}/evaluaciones/${evaluacionId}`,{method:'POST',body:JSON.stringify(data)})}
export function seleccionarPrecio(evaluacionId:number,detalleId:number){return apiRequest<void>(`${base}/evaluaciones/${evaluacionId}/precios/${detalleId}/seleccionar`,{method:'POST'})}
