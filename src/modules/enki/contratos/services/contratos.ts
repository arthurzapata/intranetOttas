import{apiDownload,apiRequest}from'@/services/auth'
import type { Contrato, ContratoPayload, ContratosPage, Option } from '../interfaces/contratos.interface'
const base='/lecturita/enki/contratos-explotacion'
export const listarContratos=(criterio:string,empresaId:number,page:number)=>apiRequest<ContratosPage>(`${base}?criterio=${encodeURIComponent(criterio)}&empresa_id=${empresaId||''}&page=${page}`)
export const listarProvincias=(departamentoId:number)=>apiRequest<Option[]>(`${base}/opciones/provincias?departamento_id=${departamentoId}`)
export const listarCentros=(provinciaId:number)=>apiRequest<Option[]>(`${base}/opciones/centros-poblados?provincia_id=${provinciaId}`)
export function crearContrato(data:ContratoPayload){const form=new FormData();form.append('empresa_id',String(data.empresa_id));form.append('titulo',data.titulo);form.append('fecha',data.fecha);form.append('archivo',data.archivo);data.provincias.forEach(id=>form.append('provincias[]',String(id)));data.centros_poblados.forEach(id=>form.append('centros_poblados[]',String(id)));return apiRequest<void>(base,{method:'POST',body:form})}
export const descargarContrato=(item:Contrato)=>apiDownload(`${base}/${item.id}/archivo`,item.archivo)
