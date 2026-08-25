import { apiRequest } from '@/services/auth'
export interface Option{id:number;nombre:string}
export interface Lectura{id:number;cliente:string;direccion:string;distrito:string;sector:string;ruta:string;secuencia:number;suministro:string;codigo_catastral:string;medidor:string;categoria:string;lectura_anterior:number;consumo_promedio:number;minimo_esperado?:number;maximo_esperado?:number;registrado:boolean;lectura_actual?:number;consumo?:number;observacion?:string;fecha_lectura?:string;lecturista?:string;latitud?:number;longitud?:number;fotografias?:string[];dinamicas?:string[]}
export interface LecturaPage{data:Lectura[];total:number;page:number;last_page:number;distritos:Option[];rutas:Option[];observaciones:Option[];dinamicas:Option[];avance:{registradas:number;total:number}}
const base='/lecturita/evan/medicion/lecturas',qs=(v:Record<string,string|number>)=>{const p=new URLSearchParams();Object.entries(v).forEach(([k,x])=>x!==''&&p.set(k,String(x)));return p}
export const listarLecturas=(f:Record<string,string|number>)=>apiRequest<LecturaPage>(`${base}?${qs(f)}`)
export const obtenerLectura=(id:number)=>apiRequest<Lectura>(`${base}/${id}`)
export const registrarLectura=(id:number,data:FormData)=>apiRequest<{lectura:Lectura;siguiente_id?:number}>(`${base}/${id}`,{method:'POST',body:data})
export const anularLectura=(id:number)=>apiRequest<void>(`${base}/${id}`,{method:'DELETE'})
