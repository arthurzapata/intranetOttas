import{apiDownload,apiRequest}from'@/services/auth'

export type OrigenBackup='principal'|'empresa'
export interface ArchivoBackup{nombre:string;tamanio_bytes?:number;tamanio?:string;fecha_modificacion?:string;origen:OrigenBackup}
export interface BackupsResponse{principal:ArchivoBackup[];empresa:ArchivoBackup[];empresa_nombre?:string;base_empresa?:string;ultima_actualizacion?:string}

const base='/lecturita/sistema/administrador/copias-seguridad'
export const listarCopias=()=>apiRequest<BackupsResponse>(base)
export const descargarCopia=(item:ArchivoBackup)=>apiDownload(`${base}/${item.origen}/${encodeURIComponent(item.nombre)}`,item.nombre)
