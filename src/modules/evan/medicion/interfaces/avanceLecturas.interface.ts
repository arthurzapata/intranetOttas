export interface Distrito{id:number;nombre:string;registradas:number;total:number}
export interface Metrica{nombre:string;total:number}
export interface Lecturista{id:number;usuario:string;lecturas:number;ultima_lectura?:string}
export interface Reciente{id:number;fecha:string;usuario:string;medidor:string;suministro:string;direccion:string}
export interface Punto{id:number;latitud:number;longitud:number;fecha:string;medidor:string;direccion:string}
export interface Dashboard{distritos:Distrito[];distrito?:Distrito;tipos:Metrica[];alertas:Metrica[];lecturistas:Lecturista[];recientes:Reciente[];resumen:{validas:number;observadas:number;atipicas:number;altos_consumidores:number;criticas:number}}
