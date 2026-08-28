export type TipoOperacion='SUMA'|'RESTA'|'MULTIPLICA'|'DIVIDE'|'LIMITE'|'CONDICIONAL'
export interface TipoRelacion { id:number; codigo:string; descripcion:string; tipo_operacion:TipoOperacion; requiere_factor:boolean; requiere_limite:boolean; requiere_condicion:boolean; estado:boolean }
export type TipoRelacionPayload=Omit<TipoRelacion,'id'|'estado'>

