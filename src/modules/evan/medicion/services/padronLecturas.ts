import { apiRequest } from '@/services/auth'

export interface Option { id: number; nombre: string }
export interface NodoAvance { id: number; nombre: string; leidos: number; total: number; generado?: boolean }
export interface LecturaPadron {
  id: number
  cliente: string
  direccion: string
  codigo_catastral: string
  suministro: string
  medidor: string
  secuencia: number
  categoria: string
  registrado: boolean
  lectura_anterior?: number
  lectura_actual?: number
  fecha_lectura?: string
  fotografia?: string
}
export interface PadronPage {
  distritos: NodoAvance[]
  sectores: NodoAvance[]
  rutas: NodoAvance[]
  lecturas: LecturaPadron[]
  calles: Option[]
  total: number
  page: number
  last_page: number
}

const base='/lecturita/evan/medicion/padron-lecturas'
const qs=(values:Record<string,string|number>)=>{const params=new URLSearchParams();Object.entries(values).forEach(([key,value])=>value!==''&&params.set(key,String(value)));return params}
export const listarPadron=(filters:Record<string,string|number>)=>apiRequest<PadronPage>(`${base}?${qs(filters)}`)
export const generarPadron=(sectorId:number)=>apiRequest<{generados:number}>(`${base}/sectores/${sectorId}/generar`,{method:'POST'})
export const anularLectura=(lecturaId:number)=>apiRequest<void>(`${base}/lecturas/${lecturaId}`,{method:'DELETE'})
export const urlImpresionRuta=(rutaId:number)=>`${base}/rutas/${rutaId}/imprimir`
