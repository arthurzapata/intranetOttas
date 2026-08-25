import { apiRequest } from '@/services/auth'
export interface Concepto{nombre:string;importe:number}
export interface Grupo{nombre:string;cantidad:number}
export interface Ciclo{id:number;nombre:string;sector:string;procesado:boolean;afectos:number;igv:number;inafectos:number;total:number;volumen:number;conexiones:number;unidades:number;conceptos_afectos:Concepto[];conceptos_inafectos:Concepto[];categorias:Grupo[];tipos_facturacion:Grupo[]}
export interface Distrito{id:number;nombre:string;ciclos:Ciclo[];resumen?:Ciclo}
const base='/lecturita/evan/facturacion/critica'
export const listarCritica=()=>apiRequest<{distritos:Distrito[]}>(base)
export const detalleDistrito=(id:number)=>apiRequest<Distrito>(`${base}/distritos/${id}`)
export const preFacturarCiclo=(id:number)=>apiRequest<Ciclo>(`${base}/ciclos/${id}/pre-facturar`,{method:'POST'})
export const preFacturarDistrito=(id:number)=>apiRequest<Distrito>(`${base}/distritos/${id}/pre-facturar`,{method:'POST'})
export const urlExportar=(id:number)=>`${base}/distritos/${id}/exportar`
