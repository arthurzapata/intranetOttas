import{apiRequest}from'@/services/auth'

export interface Categoria{id:number;nombre:string}
export interface UnidadUso{id:number;categoria_id:number;categoria:string}
export interface Recategorizacion{id:number;cliente:string;documento?:string;codigo:string;codigo_sici?:string;direccion:string;distrito:string;sector:string;manzana:string;lote:string;fotografia_url?:string;fecha_solicitud:string;unidades_uso:UnidadUso[];categorias:Categoria[]}
export interface CambioPayload{categorias:Record<number,number>}

const base='/lecturita/evan/catastro/recategorizaciones'
export const listarRecategorizaciones=()=>apiRequest<Recategorizacion[]>(base)
export const cambiarCategorias=(id:number,data:CambioPayload)=>apiRequest<void>(`${base}/${id}/cambiar`,{method:'POST',body:JSON.stringify(data)})
