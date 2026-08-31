export type EstadoCartaFianza='BORRADOR'|'VIGENTE'|'VENCIDA'|'EJECUTADA'|'LIBERADA'|'ANULADA'
export type SentidoCartaFianza='EMITIDA'|'RECIBIDA'
export interface OpcionCartaFianza{id:number;nombre:string;codigo?:string;estado?:boolean;activo?:boolean}
export interface DocumentoCartaFianza{id:number;nombre?:string;nombre_original?:string;tipo?:string;principal?:boolean;verificado?:boolean;created_at?:string}
export interface HistorialCartaFianza{id:number;accion:string;descripcion?:string;estado_anterior?:string;estado_nuevo?:string;fecha?:string;created_at?:string;usuario_nombre?:string}
export interface RenovacionCartaFianza{id:number;numero_anterior?:string;numero_nuevo?:string;fecha_vencimiento_anterior?:string;fecha_vencimiento_nueva?:string;monto_anterior?:number;monto_nuevo?:number;created_at?:string}
export interface CartaFianza{
 id:number;numero:string;sentido:SentidoCartaFianza;estado:EstadoCartaFianza;tipo_carta_fianza_id:number;banco_id:number;moneda_id:number
 tipo_carta_fianza?:OpcionCartaFianza;banco?:OpcionCartaFianza;moneda?:OpcionCartaFianza;monto:number;fecha_emision:string;fecha_inicio:string;fecha_vencimiento:string
 ordenante_tipo_documento?:string;ordenante_numero_documento?:string;ordenante_nombre:string;beneficiario_tipo_documento?:string;beneficiario_numero_documento?:string;beneficiario_nombre:string
 objeto_garantia:string;dias_alerta:number;tasa_comision?:number;importe_comision?:number;numero_contrato?:string;numero_expediente?:string;numero_proceso?:string;observaciones?:string
 documentos?:DocumentoCartaFianza[];historial?:HistorialCartaFianza[];renovaciones?:RenovacionCartaFianza[]
}
export interface CartaFianzaPayload extends Omit<CartaFianza,'id'|'estado'|'tipo_carta_fianza'|'banco'|'moneda'|'documentos'|'historial'|'renovaciones'>{}
export interface CartaFianzaFiltros{texto:string;tipo_carta_fianza_id:string;banco_id:string;moneda_id:string;sentido:string;estado:string;fecha_desde:string;fecha_hasta:string;por_vencer:boolean}
export interface CartaFianzaResponse{data:CartaFianza[];current_page:number;last_page:number;total:number;tipos_carta_fianza:OpcionCartaFianza[];bancos:OpcionCartaFianza[];monedas:OpcionCartaFianza[]}
export interface CartaFianzaOperacion{tipo_operacion:'RENOVAR'|'EJECUTAR'|'LIBERAR'|'ANULAR';[key:string]:string|number|File|undefined}
