export interface AgendaSesion{id:number;punto_agenda:string;tiene_archivos?:boolean;archivos_count?:number;acciones_count?:number}
export interface DirectorSesion{id:number;cargo:'p'|'m'|string;persona:{id:number;nombre_completo?:string;nombre?:string;email?:string}}
export interface ActaSesion{id:number;archivo:string;created_at?:string;usuario?:{nombre?:string}}
export interface Sesion{id:number;numeracion:string;tipo:'o'|'e'|'u';modalidad:'presencial'|'virtual';url_enlace?:string|null;primera_convocatoria:string;segunda_convocatoria?:string|null;fecha_sesion:string;fecha_limite_carga_archivos:string;finalizado:boolean;archivo_acta?:boolean;es_director_sesion?:boolean;conteo_actas?:number;agenda:AgendaSesion[];directores?:DirectorSesion[];actas?:ActaSesion[];created_at?:string}
export interface SesionPayload{numeracion:string;tipo:'o'|'e'|'u';modalidad:'presencial'|'virtual';url_enlace:string;primera_convocatoria:string;segunda_convocatoria:string;fecha_sesion:string;fecha_limite_carga_archivos:string;puntos_agenda:string[]}
export interface SesionPage{data:Sesion[];current_page:number;last_page:number;total:number}
