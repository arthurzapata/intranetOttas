import type { Page } from '../interfaces/tareas.interface'
import{apiRequest}from'@/services/auth'



const base=(area:string)=>`/lecturita/evan/${area}/tareas`
export function listarTareas(f:{criterio:string;distrito_id:number;tipo_atencion_id:number;page:number},area='catastro'){const q=new URLSearchParams({page:String(f.page)});if(f.criterio)q.set('criterio',f.criterio);if(f.distrito_id)q.set('distrito_id',String(f.distrito_id));if(f.tipo_atencion_id)q.set('tipo_atencion_id',String(f.tipo_atencion_id));return apiRequest<Page>(`${base(area)}?${q}`)}
export const recibirTarea=(id:number,area='catastro')=>apiRequest<void>(`${base(area)}/${id}/recibir`,{method:'POST'})
