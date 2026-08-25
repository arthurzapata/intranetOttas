export interface SimpleCatalogItem { id:number; nombre:string; descripcion?:string; created_at?:string; usage_count?:number }
export interface SimpleCatalogResponse { data:SimpleCatalogItem[]; current_page:number; last_page:number; total:number }
export interface SimpleCatalogService { list:(params:{criterio:string;page:number})=>Promise<SimpleCatalogResponse>; create:(payload:{nombre:string;descripcion:string})=>Promise<unknown>; update:(id:number,payload:{nombre:string;descripcion:string})=>Promise<unknown>; remove:(id:number)=>Promise<unknown> }
