export type OrigenBackup='principal'|'empresa'
export interface ArchivoBackup{nombre:string;tamanio_bytes?:number;tamanio?:string;fecha_modificacion?:string;origen:OrigenBackup}
export interface BackupsResponse{principal:ArchivoBackup[];empresa:ArchivoBackup[];empresa_nombre?:string;base_empresa?:string;ultima_actualizacion?:string}
