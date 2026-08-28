export interface TrabajadorResumen {
  id:number
  nombre:string|null
  apellido_paterno:string|null
  apellido_materno:string|null
  nombre_completo:string
  dni:string|null
  ruc:string|null
  email:string|null
  celular:string|null
  tipo:string
  razon_social:string|null
  registrado:boolean
}
export interface TrabajadoresResponse { data:TrabajadorResumen[]; total:number; current_page:number; last_page:number }
export interface CatalogoFicha { id:number; codigo?:string|null; nombre?:string|null; descripcion?:string|null }
export interface DatoLaboralFicha { id:number; codigo_trabajador:string|null; fecha_ingreso:string|null; fecha_cese:string|null; sueldo_base:number|string|null; estado:boolean; regimen?:CatalogoFicha|null; afp?:CatalogoFicha|null }
export interface ProfesionFicha { id:number; estado:boolean; profesion?:CatalogoFicha|null }
export interface GradoFicha { id:number; estado:boolean; grado_instruccion?:CatalogoFicha|null; gradoInstruccion?:CatalogoFicha|null }
export interface DistritoFicha extends CatalogoFicha { provincia?:CatalogoFicha & { departamento?:CatalogoFicha & { pais?:CatalogoFicha|null }|null }|null }
export interface EstudioFicha { id:number; fechadesde:string|null; fechahasta:string|null; califica:string|number|null; nota:string|number|null; estado:boolean; grado_instruccion?:CatalogoFicha|null; gradoInstruccion?:CatalogoFicha|null; centro_ensenanza?:CatalogoFicha|null; centroEnsenanza?:CatalogoFicha|null; distrito?:DistritoFicha|null }
export interface FamiliarFicha { id:number; apellidopaterno:string|null; apellidomaterno:string|null; nombres:string|null; vinculo:string|null; tipoidentidad:string|null; numerodocumento:string|null; sexo:string|null; fechanacimiento:string|null }
export interface PersonaFicha extends TrabajadorResumen { fecha_nacimiento:string|null; sexo:string|null }
export interface FichaTrabajadorResponse { persona:PersonaFicha; datos_trabajador:DatoLaboralFicha[]; profesiones:ProfesionFicha[]; grados_instruccion:GradoFicha[]; estudios:EstudioFicha[]; familiares:FamiliarFicha[] }

