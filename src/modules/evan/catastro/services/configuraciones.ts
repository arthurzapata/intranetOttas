import{apiRequest}from'@/services/auth'
export interface Configuracion{id:number;objeto:string;atributo:string;valor:string;descripcion:string;estado:boolean}
export interface Pair{objeto:string;atributo:string}
export interface Page{data:Configuracion[];current_page:number;last_page:number;total:number;objetos:string[];atributos:string[];pares:Pair[]}
export interface Payload{objeto:string;atributo:string;valor:string;descripcion:string}
const base='/lecturita/evan/catastro/configuraciones'
export function listarConfiguraciones(objeto='',atributo='',page=1){const q=new URLSearchParams({page:String(page)});if(objeto)q.set('objeto',objeto);if(atributo)q.set('atributo',atributo);return apiRequest<Page>(`${base}?${q}`)}
export const crearConfiguracion=(data:Payload)=>apiRequest<Configuracion>(base,{method:'POST',body:JSON.stringify(data)})
export const actualizarConfiguracion=(id:number,data:Payload)=>apiRequest<Configuracion>(`${base}/${id}`,{method:'PUT',body:JSON.stringify(data)})
export const cambiarEstadoConfiguracion=(id:number,estado:boolean)=>apiRequest<void>(`${base}/${id}/${estado?'activar':'desactivar'}`,{method:'PUT'})
