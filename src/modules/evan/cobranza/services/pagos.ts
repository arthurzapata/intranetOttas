import { apiRequest } from '@/services/auth'
import type { Conexion } from '../interfaces/pagos.interface'


const base='/lecturita/evan/cobranza/pagos'
export const buscarDeuda=(comprobante:string)=>apiRequest<Conexion>(`${base}/buscar?comprobante=${encodeURIComponent(comprobante)}`)
export const registrarPago=(conexion:number,comprobantes:number[])=>apiRequest<{operacion:string;fecha:string}>(`${base}/conexiones/${conexion}`,{method:'POST',body:JSON.stringify({comprobantes})})
