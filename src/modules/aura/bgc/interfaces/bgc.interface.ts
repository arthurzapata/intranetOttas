export interface CriterioBgc{id:number;nombre:string;descripcion?:string;tipo_criterio?:{id:number;nombre:string};estado:boolean;evidencias_count?:number}
export interface ComponenteBgc{id:number;nombre:string;descripcion?:string;estado:boolean;criterios:CriterioBgc[]}
export interface EstandarBgc{id:number;nombre:string;descripcion?:string;estado:boolean;componentes:ComponenteBgc[]}
export interface PilarBgc{id:number;nombre:string;descripcion?:string;estado:boolean;estandares:EstandarBgc[]}
export interface ProcesoBgc{id:number;nombre:string;periodo:string;descripcion?:string;tipo:'carga'|'revision'|'evaluacion';estado:'carga_evidencia'|'en_proceso'|'cerrado'}
export interface EvidenciaBgc{id:number;criterio_id:number;archivo:string;descripcion?:string;estado?:'pendiente'|'aprobado'|'observado';observacion?:string;created_at?:string;usuario?:string}
export interface EmpresaAvance{id:number;nombre:string;total:number;cargados:number;aprobados:number;observados:number;pendientes:number;criterios:Array<{tipo:string;total:number;avance:number}>;proceso_periodo?:string}
