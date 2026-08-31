export interface TrabajadorReporteAsistencia { id:number; codigo_trabajador:string; nombre_completo:string }
export interface DescuentoBloque { tardanza_minutos:number; descuento_minutos:number; monto:number }
export interface ReporteAsistenciaDiariaItem {
  id:number; fecha:string; trabajador_codigo:string; trabajador_nombre:string; trabajador_dni:string
  horario_detalle:string; regimen_detalle:string; entrada_1:string|null; salida_1:string|null; entrada_2:string|null; salida_2:string|null
  bloque_1:DescuentoBloque; bloque_2:DescuentoBloque; tipo:string|null; modo_descuento_tardanza:string
  tardanza_diaria_minutos:number; descuento_diario_minutos:number; monto_descuento_diario:number; origen:string|null; observacion:string|null
}
export interface TotalesReporteAsistencia { bloque_1:number; bloque_2:number; bloques:number; descuento_diario:number }
export interface ReporteAsistenciaDiariaResponse {
  data:ReporteAsistenciaDiariaItem[]; current_page:number; last_page:number; total:number; from:number|null; to:number|null
  trabajadores_filtro:TrabajadorReporteAsistencia[]; totales_pagina:TotalesReporteAsistencia
}
export interface FiltrosReporteAsistencia { mes:string; fecha_inicio:string; fecha_fin:string; datos_persona_id:number|null }

