import{apiRequest}from'@/services/auth'
export interface Option{id:number;nombre:string}
export interface Sector{id:number;nombre:string;distrito_id:number;distrito:string;predios_count:number}
export interface Campana{id:number;nombre:string;sector:string;distrito:string;predios:number;avance:number;finalizado:boolean;created_at:string}
export interface Ficha{id:number;campana_id:number;predio_id:number;direccion:string;distrito:string;sector:string;manzana:string;lote:string;sublote?:string;fotografia_url?:string;finalizado:boolean;actual:{estado_predio?:string;tipo_almacenamiento?:string;tipo_material?:string;tipo_predio?:string}}
export interface Listado{data:Campana[];current_page:number;last_page:number;total:number;distritos:Option[];sectores:Sector[]}
export interface FichasListado{data:Ficha[];current_page:number;last_page:number;total:number;catalogos:{estados:Option[];almacenamientos:Option[];materiales:Option[];tipos_predio:Option[]}}
export interface FichaPayload{estado_predio_id:number;tipo_almacenamiento_id:number;tipo_material_predio_id:number;tipo_predio_id:number}
const base='/lecturita/evan/catastro/campanas'
export const listarCampanas=(criterio='',page=1)=>apiRequest<Listado>(`${base}?criterio=${encodeURIComponent(criterio)}&page=${page}`)
export const crearCampana=(data:{nombre:string;sector_id:number})=>apiRequest<Campana>(base,{method:'POST',body:JSON.stringify(data)})
export const eliminarCampana=(id:number)=>apiRequest<void>(`${base}/${id}`,{method:'DELETE'})
export const finalizarCampana=(id:number)=>apiRequest<void>(`${base}/${id}/finalizar`,{method:'POST'})
export const listarFichas=(id:number,page=1)=>apiRequest<FichasListado>(`${base}/${id}/fichas?page=${page}`)
export const guardarFicha=(id:number,data:FichaPayload)=>apiRequest<void>(`${base}/fichas/${id}`,{method:'POST',body:JSON.stringify(data)})
