import { apiRequest } from '@/services/auth'
import type { TrabajadorResumen, TrabajadoresResponse, CatalogoFicha, DatoLaboralFicha, ProfesionFicha, GradoFicha, DistritoFicha, EstudioFicha, FamiliarFicha, PersonaFicha, FichaTrabajadorResponse } from '../interfaces/trabajadores.interface'
const base='/mia/rrhh/maestros/trabajadores'
export function listarTrabajadores(criterio:string,page:number){const query=new URLSearchParams({criterio,page:String(page)});return apiRequest<TrabajadoresResponse>(`${base}?${query}`)}
export function obtenerFichaTrabajador(personaId:number){return apiRequest<FichaTrabajadorResponse>(`${base}/${personaId}/ficha`)}
export function urlFichaTrabajadorPdf(personaId:number){return `${base}/${personaId}/ficha/pdf`}
