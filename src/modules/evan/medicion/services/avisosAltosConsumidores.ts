import type { Aviso, Page } from '../interfaces/avisosAltosConsumidores.interface'
import{apiRequest}from'@/services/auth'

const base='/lecturita/evan/medicion/avisos-altos-consumidores',qs=(v:Record<string,string|number>)=>{const p=new URLSearchParams();Object.entries(v).forEach(([k,x])=>x!==''&&p.set(k,String(x)));return p};export const listarAvisos=(f:Record<string,string|number>)=>apiRequest<Page>(`${base}?${qs(f)}`);export const entregarAviso=(id:number)=>apiRequest<Aviso>(`${base}/${id}/entregar`,{method:'POST'});export const entregarAvisos=(ids:number[])=>apiRequest<{actualizados:number}>(`${base}/entregar-masivo`,{method:'POST',body:JSON.stringify({ids})});export const urlAviso=(id:number)=>`${base}/${id}/imprimir`
