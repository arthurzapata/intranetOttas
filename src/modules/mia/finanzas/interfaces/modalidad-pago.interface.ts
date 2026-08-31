export interface ModalidadPago { id: number; detalle: string; activo: boolean }
export interface ModalidadPagoPayload { detalle: string; activo: boolean }
export interface ModalidadPagoResponse { data: ModalidadPago[]; current_page: number; last_page: number; total: number }
