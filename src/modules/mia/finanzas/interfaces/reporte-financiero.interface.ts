export type ReporteFinancieroClave='comprobantes-tesoreria'|'estado-cuentas-bancarias'|'libro-caja-banco'|'resumen-cuentas'|'estado-flujo-caja'|'libro-mayor-auxiliar'
export interface ReportePeriodoOption { id?:number; anio:number; estado?:boolean|number; meses?:ReporteMesOption[] }
export interface ReporteMesOption { mes:number; nombre?:string }
export interface ReporteCuentaOption { id:number; cta_contable:string; descripcion:string }
export interface ReporteTipoComprobanteOption { id:number; codigo?:string; detalle:string }
export interface ReporteFinancieroOpciones { periodos?:ReportePeriodoOption[]; periodo_activo?:ReportePeriodoOption|null; meses?:ReporteMesOption[]; cuentas?:ReporteCuentaOption[]; tipos_comprobante?:ReporteTipoComprobanteOption[] }
export interface ReporteFinancieroFiltros { anio:string; mes:string; cuenta_desde:string; cuenta_hasta:string; fecha_inicio:string; fecha_fin:string; tipo_comprobante_id:string; orden:string }
export interface ReporteFila { [key:string]:string|number|null|undefined }
export interface ReporteFinancieroPreview { data:unknown }
