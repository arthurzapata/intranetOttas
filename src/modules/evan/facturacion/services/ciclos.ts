import { apiRequest } from '@/services/auth'
export interface Fase{id:number;nombre:string;inicio?:string;fin?:string;completada:boolean;actual:boolean}
export interface Ciclo{id:number;nombre:string;fase_id:number;fase:string;fases:Fase[]}
export interface Sector{id:number;nombre:string;ciclo?:Ciclo}
export interface Distrito{id:number;nombre:string;sectores:Sector[]}
const base='/lecturita/evan/facturacion/ciclos'
export const listarCiclos=()=>apiRequest<{distritos:Distrito[]}>(base)
export const detalleCiclo=(id:number)=>apiRequest<Ciclo>(`${base}/${id}`)
export const abrirCiclo=(sector:number,data:Record<string,string>)=>apiRequest<Ciclo>(`${base}/sectores/${sector}/aperturar`,{method:'POST',body:JSON.stringify(data)})
export const avanzarFase=(id:number)=>apiRequest<Ciclo>(`${base}/${id}/avanzar`,{method:'POST'})
export const finalizarCiclo=(id:number)=>apiRequest<void>(`${base}/${id}/finalizar`,{method:'POST'})
