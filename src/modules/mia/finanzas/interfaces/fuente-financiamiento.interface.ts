export interface FuenteFinanciamiento { id: number; nombre: string; descripcion: string; activo: boolean }
export interface FuenteFinanciamientoPayload { nombre: string; descripcion: string; activo: boolean }
export interface FuenteFinanciamientoResponse { data: FuenteFinanciamiento[]; current_page: number; last_page: number; total: number }
