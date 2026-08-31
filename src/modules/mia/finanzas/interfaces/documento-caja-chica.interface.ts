export interface DocumentoCajaChica { id: number; codigo: string; detalle: string; abreviatura?: string | null; porcentaje_impuesto: number; signo: 1 | -1; tipo_impuesto_retencion: 'I' | 'R'; activo: boolean }
export interface DocumentoCajaChicaPayload { codigo: string; detalle: string; abreviatura: string; porcentaje_impuesto: number; signo: 1 | -1; tipo_impuesto_retencion: 'I' | 'R' }
