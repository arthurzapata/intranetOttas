import{apiRequest}from'@/services/auth'

export interface Fotografia{id:number;url:string;created_at:string}
export interface Notificacion{id:number;cliente:string;distrito:string;direccion:string;codigo:string;codigo_sici?:string;tipo:string;fecha_inicio:string;iniciado_por:string;fecha_impreso?:string;tipo_entrega?:string;observacion?:string;fotografias:Fotografia[]}
export interface CierrePayload{tipo_entrega:'bajo puerta'|'directamente'|'entregado otro';observacion:string}

const base='/lecturita/evan/catastro/notificaciones'
export const listarNotificaciones=()=>apiRequest<Notificacion[]>(base)
export const cerrarNotificacion=(id:number,data:CierrePayload)=>apiRequest<Notificacion>(`${base}/${id}/cerrar`,{method:'POST',body:JSON.stringify(data)})
export const agregarFotografia=(id:number,fotografia:File)=>{const body=new FormData();body.append('fotografia',fotografia);return apiRequest<Fotografia>(`${base}/${id}/fotografias`,{method:'POST',body})}
export const eliminarFotografia=(id:number,fotoId:number)=>apiRequest<void>(`${base}/${id}/fotografias/${fotoId}`,{method:'DELETE'})
export const urlImpresion=(id:number)=>`${base}/${id}/imprimir`
