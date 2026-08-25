import{apiRequest}from'@/services/auth'
export interface SectorOption{id:number;nombre:string;distrito:string;manzanas_count?:number}
export interface Manzana{id:number;nombre:string;sector_id:number;estado:boolean;predios_count?:number;conexiones_count?:number}
export interface Response{data:Manzana[];current_page:number;last_page:number;total:number;sectores:SectorOption[]}
export interface Payload{nombre:string}
const base='/lecturita/evan/catastro/sectores'
export function listarManzanas(sectorId:number,criterio='',page=1){const q=new URLSearchParams({page:String(page)});if(criterio)q.set('criterio',criterio);return apiRequest<Response>(`${base}/${sectorId}/manzanas?${q}`)}
export const crearManzana=(sectorId:number,data:Payload)=>apiRequest<Manzana>(`${base}/${sectorId}/manzanas`,{method:'POST',body:JSON.stringify(data)})
export const actualizarManzana=(sectorId:number,id:number,data:Payload)=>apiRequest<Manzana>(`${base}/${sectorId}/manzanas/${id}`,{method:'PUT',body:JSON.stringify(data)})
export const eliminarManzana=(sectorId:number,id:number)=>apiRequest<void>(`${base}/${sectorId}/manzanas/${id}`,{method:'DELETE'})
