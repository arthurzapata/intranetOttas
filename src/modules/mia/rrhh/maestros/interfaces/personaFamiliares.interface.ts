export interface FamiliarPersona { id:number; nombre_completo:string; dni:string|null }
export interface PersonaFamiliar { id:number; persona_id:number; apellidopaterno:string; apellidomaterno:string; nombres:string; tipoidentidad:string; numerodocumento:string; sexo:string|null; fechanacimiento:string|null; vinculo:string; sustento:string|null; estado:boolean; persona?:FamiliarPersona|null }
export interface PersonaFamiliaresResponse { data:PersonaFamiliar[]; total:number; current_page:number; last_page:number }
export interface PersonaFamiliaresOptions { personas:FamiliarPersona[]; tipos_identidad:string[]; sexos:string[]; vinculos:string[]; maximo_archivo_mb:number }
export interface PersonaFamiliarPayload { persona_id:number; apellidopaterno:string; apellidomaterno:string; nombres:string; tipoidentidad:string; numerodocumento:string; sexo:string|null; fechanacimiento:string|null; vinculo:string; sustento:File|null }

