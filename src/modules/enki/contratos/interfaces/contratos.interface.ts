export interface Option{id:number;nombre:string}
export interface Contrato{id:number;titulo:string;fecha:string;archivo:string;empresa:string;provincias:Option[];centros_poblados:Option[]}
export interface ContratosPage{data:Contrato[];total:number;current_page:number;last_page:number;options:{empresas:Option[];departamentos:Option[]}}
export interface ContratoPayload{empresa_id:number;titulo:string;fecha:string;archivo:File;provincias:number[];centros_poblados:number[]}
