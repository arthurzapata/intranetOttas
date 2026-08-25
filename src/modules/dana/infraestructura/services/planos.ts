import { apiRequest } from '@/services/auth'
export interface SistemaPlano { id:number; nombre:string; distrito:string; tipo:string }
export interface PuntoPlano { latitud:number; longitud:number }
export interface ComponentePlano { id:number; nombre:string; tipo:string; color:string; grosor:number; icono_url?:string; puntos:PuntoPlano[]; condicion:string; observacion:string }
export interface PlanoResponse { sistemas:SistemaPlano[]; sistema?:SistemaPlano; centro:{latitud:number;longitud:number}; componentes:ComponentePlano[] }
const base='/lecturita/dana/planos'
export function obtenerPlano(sistemaId:string=''){return apiRequest<PlanoResponse>(`${base}${sistemaId?`?sistema_id=${encodeURIComponent(sistemaId)}`:''}`)}
