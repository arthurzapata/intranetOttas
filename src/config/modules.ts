export interface ModuleOption { slug: string; name: string; description: string; controller: string; page: string }
export interface ModuleSection { slug: string; name: string; description: string; controller: string; options?: ModuleOption[] }
export interface AppModule { slug: string; name: string; code: string; color: string; description: string; controller: string; sections: ModuleSection[] }

export const appModules: AppModule[] = [
  { slug:'tramite', name:'Trámite V2', code:'TR', color:'#2878d0', controller:'Etrami', description:'Gestión documentaria y seguimiento de documentos.', sections:[
    {slug:'bandejas',name:'Bandejas documentarias',description:'Documentos por recibir, pendientes y enviados.',controller:'Etrami/DocumentoV2Controller',options:[
      {slug:'por-recepcionar',name:'Por recepcionar',description:'Documentos derivados a la instancia y cargo activos.',controller:'Etrami/DocumentoV2Controller',page:'etrami-v2-por-recepcionar'},
      {slug:'en-bandeja',name:'En bandeja',description:'Documentos recibidos pendientes de atención o archivo.',controller:'Etrami/DocumentoV2Controller',page:'etrami-v2-en-bandeja'},
      {slug:'pendientes',name:'Pendientes',description:'Documentos registrados que aún no fueron derivados.',controller:'Etrami/DocumentoV2Controller',page:'etrami-v2-pendientes'},
      {slug:'propios',name:'Documentos propios',description:'Documentos emitidos por la instancia y cargo activos.',controller:'Etrami/DocumentoV2Controller',page:'etrami-v2-propios'},
      {slug:'archivados',name:'Archivados',description:'Documentos archivados en la instancia activa.',controller:'Etrami/DocumentoV2Controller',page:'etrami-v2-archivados'}
    ]},
    {slug:'documentos',name:'Gestión de documentos',description:'Registro y recuperación de documentos internos.',controller:'Etrami/DocumentoV2Controller',options:[
      {slug:'registrar',name:'Registrar documento',description:'Registro de documentos internos con destinos, anexos y referencias.',controller:'Etrami/DocumentoV2Controller',page:'etrami-v2-registrar-documento'},
      {slug:'anulados-rechazados',name:'Anulados / rechazados',description:'Consulta y recuperación de documentos anulados o rechazados.',controller:'Etrami/DocumentoV2Controller',page:'etrami-v2-anulados-rechazados'}
    ]},
    {slug:'flujo-documentario',name:'Flujo documentario',description:'Consulta y seguimiento cronológico del trámite.',controller:'Etrami/DocumentoV2Controller',options:[
      {slug:'seguimiento',name:'Seguimiento de documentos',description:'Búsqueda y visualización del recorrido completo de un documento.',controller:'Etrami/DocumentoV2Controller',page:'etrami-v2-flujo-seguimiento'}
    ]},
    {slug:'tramite-externo',name:'Trámite externo',description:'Registro y validación de documentos externos.',controller:'Etrami/DocumentoExternoV2Controller',options:[
      {slug:'remitentes',name:'Remitentes y documentos',description:'Registro de personas, empresas y sus documentos externos.',controller:'Etrami/RemitenteV2Controller',page:'etrami-v2-externo-remitentes'},
      {slug:'validar',name:'Documentos por validar',description:'Revisión e ingreso de documentos externos al flujo interno.',controller:'Etrami/DocumentoExternoV2Controller',page:'etrami-v2-externo-validar'}
    ]},
    {slug:'reportes-firma',name:'Reportes y firma',description:'Reportes documentales y firma digital RENIEC.',controller:'Etrami/ReporteDocumentosV2Controller',options:[
      {slug:'reporte-documentos',name:'Reporte de documentos',description:'Consulta y exportación del registro documental.',controller:'Etrami/ReporteDocumentosV2Controller',page:'etrami-v2-reporte-documentos'},
      {slug:'firma-digital',name:'Firma digital',description:'Preparación y seguimiento de firmas mediante ReFirma RENIEC.',controller:'Etrami/FirmaDigitalController',page:'etrami-v2-firma-digital'}
    ]},
    {slug:'configuracion',name:'Configuración',description:'Correlativos y tipos documentales.',controller:'Etrami/OpcionesController',options:[
      {slug:'tipos-documento',name:'Tipos de documento',description:'Configuración de tipos documentales y sus características.',controller:'Etrami/TipoDocumentoController',page:'etrami-v2-config-tipos-documento'},
      {slug:'correlativos',name:'Correlativos',description:'Numeración por tipo documental, instancia y cargo.',controller:'Etrami/CorrelativoController',page:'etrami-v2-config-correlativos'}
    ]} ]},
  { slug:'institucional', name:'Institucional', code:'AU', color:'#7257c8', controller:'Aura', description:'Gobierno corporativo y gestión institucional.', sections:[
    {slug:'directorio',name:'Directorio',description:'Sesiones, acuerdos, disposiciones y pedidos.',controller:'Aura/Directorio',options:[
      {slug:'sesiones',name:'Sesiones',description:'Programación y seguimiento de sesiones del Directorio.',controller:'Aura/Directorio/SesionController',page:'aura-directorio-sesiones'}
      ,{slug:'acuerdos',name:'Acuerdos',description:'Seguimiento y vistos buenos de acuerdos del Directorio.',controller:'Aura/Directorio/AccionController',page:'aura-directorio-acuerdos'}
      ,{slug:'disposiciones',name:'Disposiciones',description:'Atención y seguimiento de disposiciones del Directorio.',controller:'Aura/Directorio/AccionController',page:'aura-directorio-disposiciones'}
      ,{slug:'pedidos',name:'Pedidos',description:'Atención de pedidos formulados durante las sesiones.',controller:'Aura/Directorio/PedidoController',page:'aura-directorio-pedidos'}
    ]},
    {slug:'buen-gobierno',name:'Buen Gobierno Corporativo',description:'Pilares, estándares, criterios y evidencias.',controller:'Aura/BuenGobiernoCorporativo',options:[
      {slug:'estructura',name:'Estructura BGC',description:'Administración jerárquica de pilares, estándares, componentes y criterios.',controller:'Aura/BuenGobiernoCorporativo',page:'aura-bgc-estructura'},
      {slug:'procesos-evidencias',name:'Procesos y evidencias',description:'Carga, revisión y evaluación de evidencias por período.',controller:'Aura/BuenGobiernoCorporativo/ProcesoController',page:'aura-bgc-procesos'},
      {slug:'control-avance',name:'Control de avance',description:'Indicadores comparativos de cumplimiento por empresa y período.',controller:'Aura/BuenGobiernoCorporativo/ControlAvanceController',page:'aura-bgc-control-avance'}
    ]},
    {slug:'comites',name:'Gestión de Comités',description:'Comités, reuniones y acuerdos.',controller:'Aura/GestionComite'},
    {slug:'comunicaciones',name:'Comunicaciones',description:'Noticias, publicaciones y stakeholders.',controller:'Aura/Comunicaciones'},
    {slug:'integridad',name:'Integridad',description:'Denuncias e incidencias.',controller:'Aura/Integridad'} ]},
  { slug:'administracion', name:'Administración', code:'MI', color:'#d64f83', controller:'Mia', description:'Logística, presupuesto y recursos administrativos.', sections:[
    {slug:'logistica',name:'Logística',description:'Pedidos, procesos, órdenes y proveedores.',controller:'Mia/Logistica'},
    {slug:'almacen',name:'Almacén',description:'Ingresos, salidas, stock y movimientos.',controller:'Mia/Logistica/AlmacenController'},
    {slug:'presupuesto',name:'Presupuesto',description:'Formulación presupuestal.',controller:'Mia/Presupuesto'},
    {slug:'recursos',name:'Recursos Humanos',description:'Productividad y personal.',controller:'Mia/Recursos'},
    {slug:'utilitarios',name:'Utilitarios',description:'Herramientas administrativas.',controller:'Mia/Utilitario'} ]},
  { slug:'comercial', name:'Comercial', code:'EV', color:'#21a06b', controller:'Evan', description:'Catastro, medición, facturación y cobranza.', sections:[
    {slug:'catastro',name:'Catastro Comercial',description:'Clientes, predios, conexiones y sectores.',controller:'Evan/Catastro',options:[
      {slug:'conexiones',name:'Conexiones',description:'Consulta de conexiones y suministros del catastro comercial.',controller:'Evan/Catastro/ConexionController',page:'evan-catastro-conexiones'},
      {slug:'sectores',name:'Sectores',description:'Administración de sectores comerciales por distrito.',controller:'Evan/Catastro/SectorController',page:'evan-catastro-sectores'},
      {slug:'urbanizaciones',name:'Urbanizaciones',description:'Administración de urbanizaciones por distrito.',controller:'Evan/Catastro/UrbanizacionController',page:'evan-catastro-urbanizaciones'},
      {slug:'calles',name:'Calles',description:'Administración de calles por distrito.',controller:'Evan/Catastro/CalleController',page:'evan-catastro-calles'},
      {slug:'centros-poblados',name:'Centros poblados',description:'Administración de centros poblados por distrito.',controller:'Evan/Catastro/CentroPobladoController',page:'evan-catastro-centros-poblados'}
    ]},
    {slug:'comercializacion',name:'Comercialización',description:'Atenciones, solicitudes, tickets y trabajos.',controller:'Evan/Comercializacion',options:[
      {slug:'expedientes',name:'Expedientes de atención',description:'Registro y seguimiento de expedientes comerciales.',controller:'Evan/Comercializacion/ExpedienteController',page:'evan-atencion-expedientes'}
    ]},
    {slug:'medicion',name:'Medición',description:'Lecturas, medidores, padrones y críticas.',controller:'Evan/Medicion',options:[
      {slug:'medidores',name:'Medidores',description:'Registro, consulta y situación operativa de medidores.',controller:'Evan/Medicion/MedidorController',page:'evan-medicion-medidores'}
    ]},
    {slug:'facturacion',name:'Facturación',description:'Ciclos y procesos de facturación.',controller:'Evan/Facturacion'},
    {slug:'cobranza',name:'Cobranza',description:'Deudas, pagos y verificación de cortes.',controller:'Evan/Cobranza'},
    {slug:'sici',name:'SICI',description:'Personas y conexiones.',controller:'Evan/Sici'} ]},
  { slug:'operaciones', name:'Operaciones', code:'DA', color:'#e38b2f', controller:'Dana', description:'Infraestructura, calidad, producción y cisternas.', sections:[
    {slug:'infraestructura',name:'Sistemas y componentes',description:'Sistemas, componentes, planos e interrupciones.',controller:'Dana'},
    {slug:'catastro-tecnico',name:'Catastro Técnico',description:'Clasificación de componentes.',controller:'Dana/CatastroTecnico'},
    {slug:'calidad',name:'Control de Calidad',description:'Muestras, parámetros y resultados.',controller:'Dana/ControlCalidad'},
    {slug:'cisternas',name:'Gestión de Cisternas',description:'Programación, abastecimiento y rastreo.',controller:'Dana/GestionCisternas'},
    {slug:'produccion',name:'Producción',description:'Macromedidores y lecturas.',controller:'Dana/Produccion'} ]},
  { slug:'legal', name:'Legal', code:'MA', color:'#596a7b', controller:'Mat', description:'Expedientes y procedimientos legales.', sections:[
    {slug:'expedientes',name:'Expedientes',description:'Expedientes, partes y adjuntos.',controller:'Mat/Expedientes'},
    {slug:'pad',name:'PAD',description:'Procesos disciplinarios y precalificación.',controller:'Mat/Pad'},
    {slug:'pas',name:'PAS',description:'Fiscalización y medidas correctivas.',controller:'Mat/Pas'},
    {slug:'convenios',name:'Convenios',description:'Convenios, contrapartes y archivos.',controller:'Mat/Convenio'},
    {slug:'documentos-normativos',name:'Documentos Normativos',description:'Normas, tipos y relaciones.',controller:'Mat/DocumentoNormativo'} ]},
  { slug:'helpdesk', name:'HelpDesk', code:'HD', color:'#db4b4b', controller:'HelpDesk', description:'Requerimientos de soporte.', sections:[
    {slug:'requerimientos',name:'Requerimientos',description:'Registro y seguimiento de soporte.',controller:'HelpDesk/RequerimientoController'} ]},
  { slug:'integracion', name:'Integración', code:'EN', color:'#148f92', controller:'Enki', description:'Integración territorial y asistencias.', sections:[
    {slug:'territorial',name:'Integración Territorial',description:'Fases y centros poblados.',controller:'Enki/TerritorialController'},
    {slug:'asistencias',name:'Asistencias',description:'Asistencias técnicas.',controller:'Enki/AsistenciaController'},
    {slug:'contratos',name:'Contratos de Explotación',description:'Contratos de explotación.',controller:'Enki/ContratoExplotacionController'} ]},
  { slug:'sistema', name:'Sistema', code:'AD', color:'#334a61', controller:'Intranet', description:'Usuarios y configuración general.', sections:[
    {slug:'usuarios',name:'Usuarios',description:'Usuarios, accesos y cuentas.',controller:'Intranet/UsuarioController'},
    {slug:'personas',name:'Personas',description:'Directorio de personas.',controller:'Intranet/PersonaController'},
    {slug:'configuracion',name:'Configuración',description:'Parámetros e indicadores.',controller:'Intranet/ConfiguracionController'},
    {slug:'administrador',name:'Administrador',description:'Administración general.',controller:'Intranet/AdministradorController'} ]},
]

export const getModule = (slug: string) => appModules.find((module) => module.slug === slug)
