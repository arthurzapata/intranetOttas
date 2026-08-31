export type TipoReporteEgp = 'F'|'N'
export type TipoSaldoEgp = 'A'|'M'
export interface MesEgp { id:number; mes:number; mes_label:string }
export interface FilaEgp { codigo:string; nombre:string; saldo:number }
export interface GrupoEgp { label:string; rows:FilaEgp[]; total:number }
export interface ResumenEgp { resultado_operacion:number; resultado_explotacion:number; resultado_antes_impuesto:number; total_resultado:number }
export interface EstadoGananciasPerdidasData { tipo_reporte:TipoReporteEgp; saldos:TipoSaldoEgp; anio:number; mes:number; grupos:Record<string,GrupoEgp>; resumen:ResumenEgp }
export interface FiltrosEgp { mes:number|null; tipo:TipoReporteEgp; saldos:TipoSaldoEgp }
export interface EstadoGananciasPerdidasResponse { anio_vigente:number; mes_vigente:number; meses:MesEgp[]; data:EstadoGananciasPerdidasData|null }
