export interface MesConsistencia { mes:number; mes_label:string }
export interface DetalleConsistencia { cta_contable:string; descripcion_cuenta:string; debe:number; haber:number }
export interface ComprobanteConsistencia { id?:number; numero:string; fecha:string; glosa:string; origen:string; fecha_doc:string|null; detalles:DetalleConsistencia[]; total_debe:number; total_haber:number }
export interface TipoConsistencia { tipo_codigo:string; tipo_nombre:string; comprobantes:ComprobanteConsistencia[] }
export interface ConsistenciasFiltros { anio:number|null; mes_inicio:number|null; mes_fin:number|null }
export interface ConsistenciasData { dataPorTipo:TipoConsistencia[]; totalGeneralDebe:number; totalGeneralHaber:number }
export interface ConsistenciasResponse { anios:number[]; meses:MesConsistencia[]; mes_vigente:number; data:ConsistenciasData|null }
