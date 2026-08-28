export interface Option{id:number;nombre:string}
export interface ProcesoIntegracion{id:number;fecha:string;empresa_id:number;empresa:string;fase_id:number;fase:string;departamento:string;provincia:string;distrito:string;centro_poblado:string;centro_poblado_id:number;observaciones?:string;documentos_count?:number;asistencias_count?:number}
export interface TerritorialFilters{departamento:number;provincia:number;distrito:number;centro_poblado:number;fase:number;empresa:number;page:number}
export interface TerritorialPage{data:ProcesoIntegracion[];total:number;current_page:number;last_page:number;options:{departamentos:Option[];provincias:Option[];distritos:Option[];centros_poblados:Option[];fases:Option[];empresas:Option[]}}
export interface ProcesoPayload{empresa_id:number;fecha:string;centro_poblado_id:number;observaciones:string}
export interface DocumentoFase{id:number;fase_id:number;fecha:string;nombre_archivo:string;archivo:string;usuario?:string}
export interface AsistenciaFase{id:number;fase_id:number;tipo_asistencia:string;fecha:string;detalle:string;archivo:string;usuario?:string}
export interface FaseProceso extends Option{estado:'completada'|'actual'|'pendiente';detalle?:string;fecha_cierre?:string;usuario?:string;documentos:DocumentoFase[];asistencias:AsistenciaFase[]}
export interface SeguimientoProceso{proceso:ProcesoIntegracion;fases:FaseProceso[];tipos_asistencia:Option[];puede_eliminar:boolean}
export interface HitoRegularizable{id:number;proceso_id:number;centro_poblado:string;empresa:string;fase_id:number;fase:string;fecha_cierre:string;detalle:string;archivo?:string;usuario?:string}
export interface RegularizacionPage{data:HitoRegularizable[];total:number;current_page:number;last_page:number;options:{empresas:Option[];fases:Option[]}}
