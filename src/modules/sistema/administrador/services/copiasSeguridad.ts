import type { ArchivoBackup, BackupsResponse } from '../interfaces/copiasSeguridad.interface'
import{apiDownload,apiRequest}from'@/services/auth'





const base='/sistema/administrador/copias-seguridad'
export const listarCopias=()=>apiRequest<BackupsResponse>(base)
export const descargarCopia=(item:ArchivoBackup)=>apiDownload(`${base}/${item.origen}/${encodeURIComponent(item.nombre)}`,item.nombre)
