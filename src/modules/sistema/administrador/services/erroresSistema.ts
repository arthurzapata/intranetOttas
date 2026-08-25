import{apiRequest}from'@/services/auth'

export type NivelLog='emergency'|'alert'|'critical'|'error'|'warning'|'notice'|'info'|'debug'
export interface ArchivoLog{nombre:string;tamanio:string;fecha_modificacion:string;activo:boolean}
export interface ErrorSistema{id:string;archivo:string;nivel:NivelLog;fecha:string;entorno?:string;mensaje:string;contexto?:string;traza?:string}
export interface ErrorPage{data:ErrorSistema[];total:number;current_page:number;last_page:number;archivos:ArchivoLog[];resumen:Partial<Record<NivelLog,number>>}
export interface ErrorFilters{archivo:string;nivel:string;criterio:string;desde:string;hasta:string;page:number}

const base='/lecturita/sistema/administrador/errores'
export function listarErrores(filters:ErrorFilters){const params=new URLSearchParams();Object.entries(filters).forEach(([key,value])=>{if(value!==''&&value!==0)params.set(key,String(value))});return apiRequest<ErrorPage>(`${base}?${params}`)}
