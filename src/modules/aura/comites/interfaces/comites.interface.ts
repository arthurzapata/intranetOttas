export type ComiteMode='comites'|'reuniones'|'acuerdos'|'tipos'
export interface ComiteItem{id:number;codigo?:string;nombre?:string;descripcion:string;fecha?:string;estado?:string;finalizado?:boolean;comite?:string;tipo?:string;miembros?:Array<{id:number;nombre:string}>;documento?:string;archivos?:number;acuerdos?:number}
export interface ComiteOptions{tipos:Array<{id:number;nombre:string}>;personas:Array<{id:number;nombre:string}>;comites:Array<{id:number;nombre:string}>}
