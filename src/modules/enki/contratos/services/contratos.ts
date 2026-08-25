import{apiDownload,apiRequest}from'@/services/auth'
export interface Option{id:number;nombre:string}
export interface Contrato{id:number;titulo:string;fecha:string;archivo:string;empresa:string;provincias:Option[];centros_poblados:Option[]}
export interface ContratosPage{data:Contrato[];total:number;current_page:number;last_page:number;options:{empresas:Option[];departamentos:Option[]}}
export interface ContratoPayload{empresa_id:number;titulo:string;fecha:string;archivo:File;provincias:number[];centros_poblados:number[]}
const base='/lecturita/enki/contratos-explotacion'
export const listarContratos=(criterio:string,empresaId:number,page:number)=>apiRequest<ContratosPage>(`${base}?criterio=${encodeURIComponent(criterio)}&empresa_id=${empresaId||''}&page=${page}`)
export const listarProvincias=(departamentoId:number)=>apiRequest<Option[]>(`${base}/opciones/provincias?departamento_id=${departamentoId}`)
export const listarCentros=(provinciaId:number)=>apiRequest<Option[]>(`${base}/opciones/centros-poblados?provincia_id=${provinciaId}`)
export function crearContrato(data:ContratoPayload){const form=new FormData();form.append('empresa_id',String(data.empresa_id));form.append('titulo',data.titulo);form.append('fecha',data.fecha);form.append('archivo',data.archivo);data.provincias.forEach(id=>form.append('provincias[]',String(id)));data.centros_poblados.forEach(id=>form.append('centros_poblados[]',String(id)));return apiRequest<void>(base,{method:'POST',body:form})}
export const descargarContrato=(item:Contrato)=>apiDownload(`${base}/${item.id}/archivo`,item.archivo)
