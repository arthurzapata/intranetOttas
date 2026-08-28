import type { Punto, Dashboard } from '../interfaces/avanceLecturas.interface'
import{apiRequest}from'@/services/auth'

const base='/lecturita/evan/medicion/avance-lecturas';export const obtenerAvance=(distritoId:string|number='')=>apiRequest<Dashboard>(`${base}${distritoId?`?distrito_id=${distritoId}`:''}`);export const obtenerRecorrido=(distrito:number,usuario:number,fecha:string)=>apiRequest<{puntos:Punto[];total:number}>(`${base}/distritos/${distrito}/lecturistas/${usuario}/recorrido?fecha=${fecha}`);export const urlPadron=(distrito:number)=>`${base}/distritos/${distrito}/padron`;export const urlAtipicos=(distrito:number)=>`${base}/distritos/${distrito}/atipicos`
