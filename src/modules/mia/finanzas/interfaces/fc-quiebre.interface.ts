export type NivelQuiebre = 1 | 2 | 3
export type TipoMovimientoQuiebre = 'INGRESO' | 'EGRESO' | ''
export interface FcQuiebre { id: number; padre_id?: number | null; nivel: NivelQuiebre; codigo: string; nombre: string; tipo_movimiento?: 'INGRESO' | 'EGRESO' | null; orden: number; activo: boolean; padre?: FcQuiebre | null }
export interface FcQuiebrePayload { padre_id: number | null; nivel: NivelQuiebre; codigo: string; nombre: string; tipo_movimiento: TipoMovimientoQuiebre; orden: number }
export interface FcQuiebreResponse { quiebres: FcQuiebre[]; padres: FcQuiebre[] }
