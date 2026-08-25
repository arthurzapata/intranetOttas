import { apiRequest } from '@/services/auth'
export interface Option{id:number;nombre:string}
export interface Tramo{maximo_consumo:number;valor:number;factor_beneficio?:number}
export interface Estructura{id:number;nombre:string;cargo_fijo:number;vigente:boolean;proyecto?:boolean;tarifas:Record<string,{agua:Tramo[];alcantarillado:Tramo[]}>}
export interface ConfiguracionCalculadora{distritos:Option[];categorias:Option[];estructuras:Estructura[];igv:number}
export const obtenerConfiguracion=()=>apiRequest<ConfiguracionCalculadora>('/lecturita/evan/comercializacion/calculadora-consumo/configuracion')
