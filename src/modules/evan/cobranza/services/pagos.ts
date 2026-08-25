import { apiRequest } from '@/services/auth'
export interface Comprobante{id:number;tipo:string;numero:string;periodo?:string;emision?:string;vencimiento?:string;total:number}
export interface Conexion{id:number;suministro:string;cliente:string;documento:string;direccion:string;distrito:string;estado:string;deuda:number;comprobantes:Comprobante[]}
const base='/lecturita/evan/cobranza/pagos'
export const buscarDeuda=(comprobante:string)=>apiRequest<Conexion>(`${base}/buscar?comprobante=${encodeURIComponent(comprobante)}`)
export const registrarPago=(conexion:number,comprobantes:number[])=>apiRequest<{operacion:string;fecha:string}>(`${base}/conexiones/${conexion}`,{method:'POST',body:JSON.stringify({comprobantes})})
