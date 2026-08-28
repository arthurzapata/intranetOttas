import type { Fotografia, Notificacion, CierrePayload } from '../interfaces/notificaciones.interface'
import{apiRequest}from'@/services/auth'





const base='/evan/catastro/notificaciones'
export const listarNotificaciones=()=>apiRequest<Notificacion[]>(base)
export const cerrarNotificacion=(id:number,data:CierrePayload)=>apiRequest<Notificacion>(`${base}/${id}/cerrar`,{method:'POST',body:JSON.stringify(data)})
export const agregarFotografia=(id:number,fotografia:File)=>{const body=new FormData();body.append('fotografia',fotografia);return apiRequest<Fotografia>(`${base}/${id}/fotografias`,{method:'POST',body})}
export const eliminarFotografia=(id:number,fotoId:number)=>apiRequest<void>(`${base}/${id}/fotografias/${fotoId}`,{method:'DELETE'})
export const urlImpresion=(id:number)=>`${base}/${id}/imprimir`
