export interface UnidadGps { id:number; placa:string; conductor:string; capacidad:number; celular:string; tipo:string; latitud:number|null; longitud:number|null; fecha:string|null; hora:string|null; velocidad:number|null; bateria:number|null }
export interface PuntoRecorrido { latitud:number; longitud:number; fechahora:string; velocidad:number|null; bateria:number|null; estado:'INICIO'|'INTERMEDIO'|'FIN' }
export interface RecorridoResponse { unidad:UnidadGps; puntos:PuntoRecorrido[]; segmentos:{latitud:number;longitud:number}[][]; total_km:number; count:number }
export interface RecorridosInicialResponse { unidades:UnidadGps[]; actualizadas:number; sin_ubicacion:number }
