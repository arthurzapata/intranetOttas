import { apiRequest } from '@/services/auth'
export interface EvaluacionProforma { id:number;nombre:string;proceso:string;estado_nombre:string;items_count:number;proformas_count:number }
export interface PrecioProforma { detalle_id:number;proforma_id:number;proveedor_id:number;proveedor:string;ruc:string;precio_unitario:number;subtotal:number;seleccionado:boolean }
export interface ItemProforma { item_id:number;nombre:string;imagen_url?:string;unidad:string;cantidad:number;pedidos:Array<{pedido_id:number;cantidad:number}>;precios:PrecioProforma[] }
export interface Proforma { id:number;evaluacion_id:number;proveedor_id:number;proveedor:string;ruc:string;fecha_vencimiento:string;total:number;vigente:boolean }
export interface ProformasResponse { evaluaciones:EvaluacionProforma[];evaluacion?:EvaluacionProforma;items:ItemProforma[];proformas:Proforma[] }
export interface ProveedorCotizacion { id:number;ruc:string;razon_social:string }
const base='/lecturita/mia/logistica/proformas'
export function listarProformas(evaluacionId:number|null){return apiRequest<ProformasResponse>(`${base}${evaluacionId?`?evaluacion_id=${evaluacionId}`:''}`)}
export function buscarProveedorRuc(ruc:string){return apiRequest<ProveedorCotizacion>(`${base}/proveedores/${encodeURIComponent(ruc)}`)}
export function guardarProforma(evaluacionId:number,data:{proveedor_id:number;fecha_vencimiento:string;items:Array<{item_id:number;cantidad:number;precio_unitario:number}>}){return apiRequest<void>(`${base}/evaluaciones/${evaluacionId}`,{method:'POST',body:JSON.stringify(data)})}
export function seleccionarPrecio(evaluacionId:number,detalleId:number){return apiRequest<void>(`${base}/evaluaciones/${evaluacionId}/precios/${detalleId}/seleccionar`,{method:'POST'})}
