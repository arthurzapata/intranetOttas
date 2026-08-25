import { apiRequest } from '@/services/auth'
export interface Option{id:string|number;nombre:string}
export interface Medida{id:number;descripcion:string;fecha_limite:string;estado:string;dias_para_vencimiento?:number}
export interface Fiscalizacion{id:number;numero_fiscalizacion:string;tipo_accion:string;tipo_accion_label?:string;fecha_accion:string;descripcion_hechos:string;resultado:string;resultado_label?:string;estado:string;fecha_limite_subsanacion?:string;medidas_correctivas?:Medida[];pas_id?:number;puede_registrar_resultado?:boolean;puede_crear_pas?:boolean}
export interface ExpedientePas{id:number;numero_expediente:string;res_inicio_numero?:string;res_inicio_fecha?:string;estado_pas:string;estado_label?:string;fiscalizacion?:Fiscalizacion;fecha_tope_caducidad?:string;dias_para_caducidad?:number;multa_soles?:number;tipo_sancion?:string;abogado?:string;puede_cerrar?:boolean}
export interface Options{tipos_accion:Option[];resultados:Option[];estados_pas:Option[];anios:number[]}
export interface Page<T>{data:T[];total:number;page:number;last_page:number;options:Options}
const qs=(f:Record<string,string|number>)=>{const q=new URLSearchParams();Object.entries(f).forEach(([k,v])=>{if(v!=='')q.set(k,String(v))});return q}
export const listarFiscalizaciones=(f:Record<string,string|number>)=>apiRequest<Page<Fiscalizacion>>(`/lecturita/mat/pas/fiscalizaciones?${qs(f)}`)
export const listarExpedientesPas=(f:Record<string,string|number>)=>apiRequest<Page<ExpedientePas>>(`/lecturita/mat/pas/expedientes?${qs(f)}`)
export const detalleFiscalizacion=(id:number)=>apiRequest<Fiscalizacion>(`/lecturita/mat/pas/fiscalizaciones/${id}`)
export const detallePas=(id:number)=>apiRequest<ExpedientePas>(`/lecturita/mat/pas/expedientes/${id}`)
export const registrarFiscalizacion=(data:FormData)=>apiRequest<{id:number}>('/lecturita/mat/pas/fiscalizaciones',{method:'POST',body:data})
