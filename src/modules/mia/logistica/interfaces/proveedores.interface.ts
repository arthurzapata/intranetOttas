export interface Proveedor{id:number;ruc:string;razon_social:string;celular:string;telefono_fijo?:string;email:string;direccion?:string;estado?:boolean;procesos_count?:number;ordenes_count?:number}
export interface ProveedorResponse{data:Proveedor[];total:number;page:number;last_page:number}
