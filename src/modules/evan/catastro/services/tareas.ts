import{apiRequest}from'@/services/auth'
export interface Option{id:number;nombre:string}
export interface Tarea{id:number;ticket_id:number;documento_id?:number;tipo_atencion:string;tipo_tarea:string;cliente:string;documento?:string;distrito:string;direccion?:string;descripcion?:string;usuario_envia:string;fecha:string;estado:string}
export interface Page{data:Tarea[];total:number;page:number;last_page:number;distritos:Option[];tipos_atencion:Option[]}
const base=(area:string)=>`/lecturita/evan/${area}/tareas`
export function listarTareas(f:{criterio:string;distrito_id:number;tipo_atencion_id:number;page:number},area='catastro'){const q=new URLSearchParams({page:String(f.page)});if(f.criterio)q.set('criterio',f.criterio);if(f.distrito_id)q.set('distrito_id',String(f.distrito_id));if(f.tipo_atencion_id)q.set('tipo_atencion_id',String(f.tipo_atencion_id));return apiRequest<Page>(`${base(area)}?${q}`)}
export const recibirTarea=(id:number,area='catastro')=>apiRequest<void>(`${base(area)}/${id}/recibir`,{method:'POST'})
