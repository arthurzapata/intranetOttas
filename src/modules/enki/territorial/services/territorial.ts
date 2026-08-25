import{apiDownload,apiRequest}from'@/services/auth'

export interface Option{id:number;nombre:string}
export interface ProcesoIntegracion{id:number;fecha:string;empresa_id:number;empresa:string;fase_id:number;fase:string;departamento:string;provincia:string;distrito:string;centro_poblado:string;centro_poblado_id:number;observaciones?:string;documentos_count?:number;asistencias_count?:number}
export interface TerritorialFilters{departamento:number;provincia:number;distrito:number;centro_poblado:number;fase:number;empresa:number;page:number}
export interface TerritorialPage{data:ProcesoIntegracion[];total:number;current_page:number;last_page:number;options:{departamentos:Option[];provincias:Option[];distritos:Option[];centros_poblados:Option[];fases:Option[];empresas:Option[]}}
export interface ProcesoPayload{empresa_id:number;fecha:string;centro_poblado_id:number;observaciones:string}
export interface DocumentoFase{id:number;fase_id:number;fecha:string;nombre_archivo:string;archivo:string;usuario?:string}
export interface AsistenciaFase{id:number;fase_id:number;tipo_asistencia:string;fecha:string;detalle:string;archivo:string;usuario?:string}
export interface FaseProceso extends Option{estado:'completada'|'actual'|'pendiente';detalle?:string;fecha_cierre?:string;usuario?:string;documentos:DocumentoFase[];asistencias:AsistenciaFase[]}
export interface SeguimientoProceso{proceso:ProcesoIntegracion;fases:FaseProceso[];tipos_asistencia:Option[];puede_eliminar:boolean}

const base='/lecturita/enki/territorial'
export function listarProcesos(filters:TerritorialFilters){const params=new URLSearchParams({page:String(filters.page)});Object.entries(filters).forEach(([key,value])=>{if(key!=='page'&&value)params.set(key,String(value))});return apiRequest<TerritorialPage>(`${base}?${params}`)}
export const opcionesGeograficas=(nivel:'provincias'|'distritos'|'centros-poblados',parentId:number)=>apiRequest<Option[]>(`${base}/opciones/${nivel}?parent_id=${parentId}`)
export const crearProceso=(data:ProcesoPayload)=>apiRequest<ProcesoIntegracion>(base,{method:'POST',body:JSON.stringify(data)})
export const exportarProcesos=()=>apiDownload(`${base}/exportar`,'procesos_integracion.xlsx')
export const obtenerSeguimiento=(id:number)=>apiRequest<SeguimientoProceso>(`${base}/${id}`)
export function subirDocumento(id:number,data:{fecha:string;nombre_archivo:string;archivo:File}){const form=new FormData();form.append('fecha',data.fecha);form.append('nombre_archivo',data.nombre_archivo);form.append('archivo',data.archivo);return apiRequest<DocumentoFase>(`${base}/${id}/documentos`,{method:'POST',body:form})}
export const descargarDocumento=(processId:number,item:DocumentoFase)=>apiDownload(`${base}/${processId}/documentos/${item.id}`,item.archivo)
export const eliminarDocumento=(processId:number,id:number)=>apiRequest<void>(`${base}/${processId}/documentos/${id}`,{method:'DELETE'})
export function registrarAsistencia(id:number,data:{tipo_asistencia_id:number;fecha:string;detalle:string;archivo:File}){const form=new FormData();form.append('tipo_asistencia_id',String(data.tipo_asistencia_id));form.append('fecha',data.fecha);form.append('detalle',data.detalle);form.append('archivo',data.archivo);return apiRequest<AsistenciaFase>(`${base}/${id}/asistencias`,{method:'POST',body:form})}
export const descargarAsistencia=(processId:number,item:AsistenciaFase)=>apiDownload(`${base}/${processId}/asistencias/${item.id}`,item.archivo)
export const eliminarAsistencia=(processId:number,id:number)=>apiRequest<void>(`${base}/${processId}/asistencias/${id}`,{method:'DELETE'})
export const cerrarFase=(id:number,detalle_hito:string,noCorresponde=false)=>apiRequest<void>(`${base}/${id}/fases/cerrar`,{method:'POST',body:JSON.stringify({detalle_hito,no_corresponde:noCorresponde})})
export interface HitoRegularizable{id:number;proceso_id:number;centro_poblado:string;empresa:string;fase_id:number;fase:string;fecha_cierre:string;detalle:string;archivo?:string;usuario?:string}
export interface RegularizacionPage{data:HitoRegularizable[];total:number;current_page:number;last_page:number;options:{empresas:Option[];fases:Option[]}}
export function listarHitosRegularizables(filters:{criterio:string;empresa_id:number;fase_id:number;page:number}){const q=new URLSearchParams({criterio:filters.criterio,page:String(filters.page)});if(filters.empresa_id)q.set('empresa_id',String(filters.empresa_id));if(filters.fase_id)q.set('fase_id',String(filters.fase_id));return apiRequest<RegularizacionPage>(`${base}/regularizaciones?${q}`)}
export function regularizarHito(item:HitoRegularizable,data:{detalle_hito:string;archivo:File}){const form=new FormData();form.append('fase_id',String(item.fase_id));form.append('detalle_hito',data.detalle_hito);form.append('archivo',data.archivo);return apiRequest<void>(`${base}/${item.proceso_id}/fases/${item.fase_id}/regularizar`,{method:'POST',body:form})}
