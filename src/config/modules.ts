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
    {slug:'comites',name:'Gestión de Comités',description:'Comités, reuniones y acuerdos.',controller:'Aura/GestionComite',options:[
      {slug:'comites',name:'Comités',description:'Registro de comités, miembros y documentos de sustento.',controller:'Aura/GestionComite/ComiteController',page:'aura-comites-comites'},
      {slug:'reuniones',name:'Reuniones',description:'Programación, asistencia y archivos de reuniones.',controller:'Aura/GestionComite/ComiteController',page:'aura-comites-reuniones'},
      {slug:'acuerdos',name:'Acuerdos',description:'Registro, atención y cierre de acuerdos de comité.',controller:'Aura/GestionComite/ComiteController',page:'aura-comites-acuerdos'},
      {slug:'tipos',name:'Tipos de comité',description:'Catálogo de tipos utilizados para clasificar los comités.',controller:'Aura/GestionComite/ComiteController',page:'aura-comites-tipos'}
    ]},
    {slug:'comunicaciones',name:'Comunicaciones',description:'Noticias, publicaciones y stakeholders.',controller:'Aura/Comunicaciones',options:[
      {slug:'dashboard',name:'Dashboard',description:'Indicadores de noticias, medios, stakeholders y acuerdos.',controller:'Aura/Comunicaciones/DashboardComunicacionesController',page:'aura-comunicaciones-dashboard'},
      {slug:'noticias',name:'Noticias',description:'Registro, archivos y exportación de noticias institucionales.',controller:'Aura/Comunicaciones/NoticiaController',page:'aura-comunicaciones-noticias'},
      {slug:'publicaciones',name:'Publicaciones',description:'Gestión y difusión de publicaciones institucionales.',controller:'Aura/Comunicaciones/PublicacionController',page:'aura-comunicaciones-publicaciones'},
      {slug:'relaciones',name:'Relaciones y reuniones',description:'Stakeholders, reuniones, agendas y acuerdos.',controller:'Aura/Comunicaciones',page:'aura-comunicaciones-relaciones'},
      {slug:'configuracion',name:'Configuración',description:'Temáticas, medios, estados y tipos de comunicación.',controller:'Aura/Comunicaciones',page:'aura-comunicaciones-configuracion'}
    ]},
    {slug:'integridad',name:'Integridad',description:'Denuncias e incidencias.',controller:'Aura/Integridad',options:[
      {slug:'incidencias',name:'Incidencias y denuncias',description:'Consulta y detalle de incidencias reportadas durante la programación de cisternas.',controller:'Aura/Integridad/DenunciasController',page:'aura-integridad-incidencias'}
    ]} ]},
  { slug:'administracion', name:'Administración', code:'MI', color:'#d64f83', controller:'Mia', description:'Logística, almacén, presupuesto, contabilidad y recursos administrativos.', sections:[
    {slug:'logistica',name:'Logística',description:'Pedidos, procesos, órdenes y proveedores.',controller:'Mia/Logistica',options:[
      {slug:'pedidos',name:'Pedidos',description:'Registro, envío, evaluación y seguimiento de pedidos logísticos.',controller:'Mia/Logistica/PedidoController',page:'mia-logistica-pedidos'}
      ,{slug:'requerimientos-almacen',name:'Requerimientos de almacén',description:'Solicitud de materiales de uso común con control de stock y actividad presupuestal.',controller:'Mia/Logistica/RequerimientoAlmacenController',page:'mia-logistica-requerimientos-almacen'}
      ,{slug:'evaluacion-tecnica',name:'Evaluación técnica de ofertas',description:'Validación técnica de propuestas y documentos presentados por proveedores.',controller:'Mia/Logistica/ValidacionTecnicaController',page:'mia-logistica-evaluacion-tecnica'}
      ,{slug:'procesos-compra',name:'Procesos de compra',description:'Creación, publicación y seguimiento de procesos y sus etapas.',controller:'Mia/Logistica/ProcesoController',page:'mia-logistica-procesos-compra'}
      ,{slug:'ordenes',name:'Órdenes de compra y servicio',description:'Generación, notificación y seguimiento de órdenes adjudicadas.',controller:'Mia/Logistica/OrdenController',page:'mia-logistica-ordenes'}
      ,{slug:'proveedores',name:'Proveedores',description:'Registro y mantenimiento de proveedores logísticos.',controller:'Mia/Logistica/ProveedorController',page:'mia-logistica-proveedores'}
      ,{slug:'evaluaciones-economicas',name:'Evaluaciones económicas',description:'Condiciones comerciales, precios, cuadro comparativo y selección de ganador.',controller:'Mia/Logistica/EvaluacionController',page:'mia-logistica-evaluaciones-economicas'}
      ,{slug:'proformas',name:'Proformas',description:'Registro de cotizaciones y selección de precios por ítem.',controller:'Mia/Logistica/ProformaController',page:'mia-logistica-proformas'}
    ]},
    {slug:'almacen',name:'Almacén',description:'Ingresos, salidas, stock y movimientos.',controller:'Mia/Logistica/AlmacenController',options:[
      {slug:'ingresos',name:'Ingresos',description:'Registro, consulta, impresión y anulación de ingresos de almacén.',controller:'Mia/Logistica/IngresoController',page:'mia-almacen-ingresos'},
      {slug:'salidas',name:'Salidas',description:'Atención de pedidos, entrega de materiales y control de salidas de almacén.',controller:'Mia/Logistica/SalidaController',page:'mia-almacen-salidas'},
      {slug:'stock',name:'Stock comprometido',description:'Control del stock físico, comprometido y disponible por pedido.',controller:'Mia/Logistica/StockController',page:'mia-almacen-stock'},
      {slug:'saldos',name:'Saldos',description:'Existencias valorizadas por almacén, periodo y tipo de ítem.',controller:'Mia/Logistica/AlmacenController',page:'mia-almacen-saldos'},
      {slug:'movimientos',name:'Movimientos',description:'Consulta consolidada y detallada de ingresos y salidas de almacén.',controller:'Mia/Logistica/AlmacenController',page:'mia-almacen-movimientos'},
      {slug:'almacenes',name:'Almacenes',description:'Configuración de locales, responsables y almacén predeterminado.',controller:'Mia/Logistica/AlmacenController',page:'mia-almacen-almacenes'},
      {slug:'tipos-transaccion',name:'Tipos de transacción',description:'Reglas documentarias para ingresos y salidas de almacén.',controller:'Mia/Logistica/TipoDocumentoAlmacenController',page:'mia-almacen-tipos-transaccion'},
      {slug:'periodos',name:'Periodos',description:'Apertura y cierre de periodos mensuales y días operativos.',controller:'Mia/Logistica/PeriodoController',page:'mia-almacen-periodos'},
      {slug:'estados',name:'Estados logísticos',description:'Administración de estados operativos y códigos de tablas maestras.',controller:'Mia/Logistica/EstadoController',page:'mia-almacen-estados'},
      {slug:'grupos-items',name:'Grupos de ítems',description:'Familias, subgrupos, depreciación y características técnicas.',controller:'Mia/Logistica/GrupoController',page:'mia-almacen-grupos-items'},
      {slug:'items',name:'Ítems',description:'Catálogo de materiales, activos y servicios con parámetros de inventario.',controller:'Mia/Logistica/ItemController',page:'mia-almacen-items'},
      {slug:'documentos-compra',name:'Documentos de compra',description:'Tipos de comprobante, afectación y cuentas contables de proveedores.',controller:'Mia/Logistica/TipoDocumentoCompraController',page:'mia-logistica-documentos-compra'}
    ]},
    {slug:'presupuesto',name:'Presupuesto',description:'Formulación presupuestal.',controller:'Mia/Presupuesto',options:[
      {slug:'formulaciones',name:'Formulaciones presupuestales',description:'Proyección, distribución y consolidación del presupuesto institucional.',controller:'Mia/Presupuesto/FormulacionController',page:'mia-presupuesto-formulaciones'},
      {slug:'inversiones',name:'Inversiones',description:'Catálogo de inversiones utilizadas en los procesos presupuestales y financieros.',controller:'Mia/Presupuesto/Inversiones/InversionesController',page:'mia-presupuesto-inversiones'}
    ]},
    {slug:'contabilidad',name:'Contabilidad',description:'Estructura, movimientos, procesos y consultas contables.',controller:'Mia/Contabilidad',options:[
      {slug:'periodos-contables',name:'Periodos contables',description:'Registro, vigencia, apertura y cierre de periodos contables.',controller:'Mia/Contabilidad/Maestros/PeriodoContableController',page:'mia-contabilidad-periodos-contables'},
      {slug:'monedas',name:'Monedas',description:'Catálogo de monedas y abreviaturas utilizadas en los procesos contables.',controller:'Mia/Contabilidad/Maestros/MonedaController',page:'mia-contabilidad-monedas'},
      {slug:'entidades',name:'Entidades',description:'Entidades utilizadas en las operaciones y análisis contables del sistema.',controller:'Mia/Contabilidad/Maestros/Entidades/EntidadesController',page:'mia-contabilidad-entidades'},
      {slug:'variables-financieras',name:'Variables financieras',description:'Variables, fórmulas y valores utilizados en el cálculo de indicadores financieros.',controller:'Mia/Contabilidad/Maestros/VariablesFinancieras/VariablesFinancierasController',page:'mia-contabilidad-variables-financieras'},
      {slug:'tipos-comprobante',name:'Tipos de comprobante',description:'Catálogo de tipos de comprobante para las operaciones contables.',controller:'Mia/Contabilidad/Maestros/TipoComprobanteController',page:'mia-contabilidad-tipos-comprobante'},
      {slug:'tipos-documento',name:'Tipos de documento',description:'Documentos y diminutivos asociados a los tipos de comprobante contable.',controller:'Mia/Contabilidad/Maestros/TipoDocumentoController',page:'mia-contabilidad-tipos-documento'},
      {slug:'origenes-comprobante',name:'Orígenes de comprobante',description:'Clasificación del origen de las operaciones registradas en comprobantes.',controller:'Mia/Contabilidad/Maestros/OrigenComprobanteController',page:'mia-contabilidad-origenes-comprobante'},
      {slug:'asientos-tipo',name:'Asientos tipo',description:'Configuración de asientos automáticos y sus cuentas por tipo de documento.',controller:'Mia/Contabilidad/Maestros/AsientoTipo/AsientoTipoController',page:'mia-contabilidad-asientos-tipo'},
      {slug:'sucursales',name:'Sucursales',description:'Sedes, distritos, niveles y fechas operativas del proceso contable.',controller:'Mia/Contabilidad/Maestros/SucursalesController',page:'mia-contabilidad-sucursales'},
      {slug:'cuentas-contables',name:'Cuentas contables',description:'Plan de cuentas jerárquico y configuración operativa contable.',controller:'Mia/Contabilidad/Maestros/CuentaContableController',page:'mia-contabilidad-cuentas-contables'},
      {slug:'numeracion-comprobantes',name:'Numeración de comprobantes',description:'Rangos y correlativos disponibles por año y tipo de documento.',controller:'Mia/Contabilidad/Maestros/NumeracionComprobantesController',page:'mia-contabilidad-numeracion-comprobantes'},
      {slug:'agrupadores-gasto',name:'Agrupadores de gasto',description:'Categorías agrupadas para la clasificación y control de gastos.',controller:'Mia/Contabilidad/Maestros/AgrupadorGastoController',page:'mia-contabilidad-agrupadores-gasto'},
      {slug:'impuestos',name:'Impuestos',description:'Catálogo de impuestos y porcentajes para las operaciones contables.',controller:'Mia/Contabilidad/Maestros/Impuestos/ImpuestoController',page:'mia-contabilidad-impuestos'},
      {slug:'quiebres-cuenta',name:'Quiebre de cuentas',description:'Posiciones de corte para la segmentación de cuentas contables.',controller:'Mia/Contabilidad/Maestros/QuiebreCuentas/QuiebreCuentaController',page:'mia-contabilidad-quiebres-cuenta'},
      {slug:'clasificadores-gasto',name:'Clasificadores de gasto',description:'Clasificación de gastos contables vinculada a sus agrupadores.',controller:'Mia/Contabilidad/Maestros/ClasificadorGastoController',page:'mia-contabilidad-clasificadores-gasto'},
      {slug:'documentos-compra',name:'Documentos para compras',description:'Documentos contables de compra, afectación, detracción y cuentas de proveedor.',controller:'Mia/Contabilidad/Maestros/Documentos/DocumentoController',page:'mia-contabilidad-documentos-compra'},
      {slug:'movimientos-contables',name:'Movimientos contables',description:'Registro de comprobantes y asientos contables balanceados al Debe y Haber.',controller:'Mia/Contabilidad/Movimientos/ComprobanteController',page:'mia-contabilidad-movimientos-contables'},
      {slug:'registro-compras',name:'Registro de compras',description:'Comprobantes de proveedores, impuestos, detracciones y crédito fiscal.',controller:'Mia/Contabilidad/Movimientos/CompraController',page:'mia-contabilidad-registro-compras'},
      {slug:'parametros-generales',name:'Parámetros generales',description:'Configuración de comprobantes, documentos, orígenes, cuentas especiales e impuestos.',controller:'Mia/Contabilidad/ParametroGeneralController',page:'mia-contabilidad-parametros-generales'},
      {slug:'parametros-costos',name:'Parámetros de costos',description:'Estructura jerárquica de macroprocesos, procesos, actividades, inductores y centros de costos.',controller:'Mia/Contabilidad/ParametrosCostos',page:'mia-contabilidad-parametros-costos'},
      {slug:'macroprocesos',name:'Macroprocesos',description:'Grupos principales que organizan la estructura institucional de costos.',controller:'Mia/Contabilidad/ParametrosCostos/MacroProcesoController',page:'mia-contabilidad-macroprocesos'},
      {slug:'procesos-costos',name:'Procesos de costos',description:'Procesos vinculados con los macroprocesos de la estructura institucional.',controller:'Mia/Contabilidad/ParametrosCostos/ProcesoController',page:'mia-contabilidad-procesos-costos'},
      {slug:'subprocesos-costos',name:'Subprocesos de costos',description:'Desglose operativo de los procesos de la estructura institucional.',controller:'Mia/Contabilidad/ParametrosCostos/SubProcesoController',page:'mia-contabilidad-subprocesos-costos'},
      {slug:'actividades-costos',name:'Actividades de costos',description:'Actividades específicas vinculadas a los subprocesos institucionales.',controller:'Mia/Contabilidad/ParametrosCostos/ActividadController',page:'mia-contabilidad-actividades-costos'},
      {slug:'subactividades-costos',name:'Subactividades de costos',description:'Tareas específicas asociadas con actividades e inductores de costos.',controller:'Mia/Contabilidad/ParametrosCostos/SubActividadController',page:'mia-contabilidad-subactividades-costos'},
      {slug:'inductores-costos',name:'Inductores de costos',description:'Factores de asignación relacionados con los orígenes de comprobante.',controller:'Mia/Contabilidad/ParametrosCostos/InductorController',page:'mia-contabilidad-inductores-costos'},
      {slug:'centros-costos',name:'Centros de costos',description:'Centros con cuentas contables y estructura operativa para distribuir costos.',controller:'Mia/Contabilidad/ParametrosCostos/CentroCostosController',page:'mia-contabilidad-centros-costos'},
      {slug:'proceso-contable',name:'Proceso contable',description:'Análisis, consistencias, libros y estados financieros del proceso contable.',controller:'Mia/Contabilidad/ContabilidadController',page:'mia-contabilidad-proceso'},
      {slug:'analisis-cuentas',name:'Análisis de cuentas',description:'Movimientos, saldos anteriores y balance por cuenta y periodo contable.',controller:'Mia/Contabilidad/ContabilidadController',page:'mia-contabilidad-analisis-cuentas'},
      {slug:'consistencias-contables',name:'Consistencias contables',description:'Validación de cuadratura Debe/Haber por comprobante y periodo.',controller:'Mia/Contabilidad/ContabilidadController',page:'mia-contabilidad-consistencias'},
      {slug:'comprobantes-proceso',name:'Comprobantes contables',description:'Consulta de comprobantes y detalle de sus asientos contables.',controller:'Mia/Contabilidad/ContabilidadController',page:'mia-contabilidad-comprobantes-proceso'},
      {slug:'cuadro-general-cuentas',name:'Cuadro general de cuentas',description:'Reporte consolidado de cuentas y saldos por periodo contable.',controller:'Mia/Contabilidad/ContabilidadController',page:'mia-contabilidad-cuadro-general-cuentas'},
      {slug:'libro-diario',name:'Libro diario general',description:'Operaciones contables ordenadas cronológicamente por periodo.',controller:'Mia/Contabilidad/ContabilidadController',page:'mia-contabilidad-libro-diario'},
      {slug:'libro-mayor',name:'Libro mayor general',description:'Movimientos por cuenta con saldos iniciales, mensuales y finales.',controller:'Mia/Contabilidad/ContabilidadController',page:'mia-contabilidad-libro-mayor'},
      {slug:'consulta-saldos',name:'Consulta de saldos',description:'Saldos por periodo con acumulación jerárquica de cuentas.',controller:'Mia/Contabilidad/ContabilidadController',page:'mia-contabilidad-consulta-saldos'},
      {slug:'libro-inventarios',name:'Libro de inventarios y balances',description:'Saldos de activo, pasivo y patrimonio por nivel contable.',controller:'Mia/Contabilidad/ContabilidadController',page:'mia-contabilidad-libro-inventarios'},
      {slug:'balance-comprobacion',name:'Balance de comprobación',description:'Apertura, movimientos, saldos, inventarios y resultados.',controller:'Mia/Contabilidad/ContabilidadController',page:'mia-contabilidad-balance-comprobacion'},
      {slug:'plantilla-balance-general',name:'Plantilla del balance general',description:'Configuración de cuentas por grupos del balance financiero.',controller:'Mia/Contabilidad/Proceso/PlantillaBalanceGeneralController',page:'mia-contabilidad-plantilla-balance-general'},
      {slug:'balance-general',name:'Balance general',description:'Situación financiera construida desde la plantilla configurada.',controller:'Mia/Contabilidad/ContabilidadController',page:'mia-contabilidad-balance-general'},
      {slug:'plantilla-egp-funcion',name:'Plantilla E.G.P. por función',description:'Estructura de resultados y criterios de acumulación por función.',controller:'Mia/Contabilidad/Proceso/PlantillaEgpFuncionController',page:'mia-contabilidad-plantilla-egp-funcion'},
      {slug:'plantilla-egp-naturaleza',name:'Plantilla E.G.P. por naturaleza',description:'Estructura de resultados y criterios de acumulación por naturaleza.',controller:'Mia/Contabilidad/Proceso/PlantillaEgpNaturalezaController',page:'mia-contabilidad-plantilla-egp-naturaleza'},
      {slug:'estado-ganancias-perdidas',name:'Estado de ganancias y pérdidas',description:'Resultados por función o naturaleza con saldos mensuales o acumulados.',controller:'Mia/Contabilidad/ContabilidadController',page:'mia-contabilidad-estado-ganancias-perdidas'}
    ]},
    {slug:'recursos',name:'Recursos Humanos',description:'Productividad y personal.',controller:'Mia/Recursos',options:[
      {slug:'productividad',name:'Productividad',description:'Asignación de actividades y seguimiento del avance de los colaboradores.',controller:'Mia/Recursos/ProductividadController',page:'mia-recursos-productividad'},
      {slug:'trabajadores',name:'Trabajadores',description:'Consulta de personas de planilla y ficha laboral, académica y familiar consolidada.',controller:'Mia/Rrhh/Maestros/TrabajadoresController',page:'mia-rrhh-maestros-trabajadores'},
      {slug:'datos-laborales',name:'Datos laborales',description:'Contratos, régimen, previsión, banco, fechas y sueldo base de los trabajadores.',controller:'Mia/Rrhh/Maestros/DatosPersonaController',page:'mia-rrhh-maestros-datos-laborales'},
      {slug:'persona-profesiones',name:'Profesiones por trabajador',description:'Asignación de profesiones a las personas registradas en planilla.',controller:'Mia/Rrhh/Maestros/PersonaProfesionController',page:'mia-rrhh-maestros-persona-profesiones'},
      {slug:'persona-grados',name:'Grados por trabajador',description:'Asignación de grados de instrucción alcanzados por los trabajadores.',controller:'Mia/Rrhh/Maestros/PersonaGradosInstruccionController',page:'mia-rrhh-maestros-persona-grados'},
      {slug:'persona-estudios',name:'Estudios por trabajador',description:'Historial académico, centros de enseñanza, ubicación y documentos de sustento.',controller:'Mia/Rrhh/Maestros/PersonaEstudiosController',page:'mia-rrhh-maestros-persona-estudios'},
      {slug:'persona-familiares',name:'Familiares por trabajador',description:'Familiares, vínculos, documentos de identidad y sustentos del personal.',controller:'Mia/Rrhh/Maestros/PersonaFamiliaresController',page:'mia-rrhh-maestros-persona-familiares'},
      {slug:'paises',name:'Países',description:'Catálogo de países para datos personales, estudios y centros de enseñanza.',controller:'Mia/Rrhh/Maestros/UbigeoPaisController',page:'mia-rrhh-maestros-paises'},
      {slug:'departamentos',name:'Departamentos',description:'Catálogo territorial de departamentos y su asociación con países.',controller:'Mia/Rrhh/Maestros/UbigeoDepartamentoController',page:'mia-rrhh-maestros-departamentos'},
      {slug:'provincias',name:'Provincias',description:'Catálogo territorial de provincias asociadas a departamentos.',controller:'Mia/Rrhh/Maestros/UbigeoProvinciaController',page:'mia-rrhh-maestros-provincias'},
      {slug:'distritos',name:'Distritos',description:'Catálogo territorial de distritos asociados a provincias y departamentos.',controller:'Mia/Rrhh/Maestros/UbigeoDistritoController',page:'mia-rrhh-maestros-distritos'},
      {slug:'profesiones',name:'Profesiones',description:'Catálogo de profesiones para la formación y ficha de los trabajadores.',controller:'Mia/Rrhh/Maestros/ProfesionesController',page:'mia-rrhh-maestros-profesiones'},
      {slug:'grados-instruccion',name:'Grados de instrucción',description:'Niveles educativos ordenados para la formación académica del personal.',controller:'Mia/Rrhh/Maestros/GradosInstruccionController',page:'mia-rrhh-maestros-grados-instruccion'},
      {slug:'centros-ensenanza',name:'Centros de enseñanza',description:'Instituciones educativas y su ubicación geográfica para estudios y capacitaciones.',controller:'Mia/Rrhh/Maestros/CentroEnsenanzaController',page:'mia-rrhh-maestros-centros-ensenanza'},
      {slug:'cursos-capacitaciones',name:'Cursos y capacitaciones',description:'Formación complementaria vinculada a centros de enseñanza.',controller:'Mia/Rrhh/Maestros/CursosCapacitacionesController',page:'mia-rrhh-maestros-cursos-capacitaciones'},
      {slug:'regimenes',name:'Regímenes laborales',description:'Configuración de jornada, tareaje, tardanzas y beneficios laborales.',controller:'Mia/Rrhh/Maestros/RegimenesController',page:'mia-rrhh-maestros-regimenes'},
      {slug:'tipos-planilla',name:'Tipos de planilla',description:'Periodicidad y régimen aplicable para el procesamiento de planillas.',controller:'Mia/Rrhh/Maestros/TiposPlanillaController',page:'mia-rrhh-maestros-tipos-planilla'},
      {slug:'afps',name:'AFP',description:'Administradoras, comisiones y primas de seguro del sistema previsional.',controller:'Mia/Rrhh/Maestros/AfpsController',page:'mia-rrhh-maestros-afps'},
      {slug:'bancos',name:'Bancos',description:'Entidades financieras para cuentas bancarias y pagos al personal.',controller:'Mia/Rrhh/Maestros/BancosController',page:'mia-rrhh-maestros-bancos'},
      {slug:'tipos-afectacion',name:'Tipos de afectación',description:'Clasificación del impacto legal o tributario de los conceptos de planilla.',controller:'Mia/Rrhh/Maestros/TiposAfectacionesPlanillaController',page:'mia-rrhh-maestros-tipos-afectacion'},
      {slug:'afectaciones-planilla',name:'Afectaciones de planilla',description:'Relación de conceptos EPS con afectaciones legales, tributarias y sus valores.',controller:'Mia/Rrhh/Maestros/AfectacionesPlanillaController',page:'mia-rrhh-maestros-afectaciones-planilla'},
      {slug:'tipos-conceptos-planilla',name:'Tipos de conceptos de planilla',description:'Clasificación y ubicación de conceptos en la boleta de pago.',controller:'Mia/Rrhh/Maestros/TiposConceptosPlanillaController',page:'mia-rrhh-maestros-tipos-conceptos-planilla'},
      {slug:'conceptos-planilla',name:'Conceptos de planilla',description:'Reglas, fórmulas y orden de cálculo de remuneraciones y descuentos.',controller:'Mia/Rrhh/Maestros/ConceptosPlanillaController',page:'mia-rrhh-maestros-conceptos-planilla'},
      {slug:'agrupadoras-conceptos',name:'Agrupadoras de conceptos',description:'Grupos funcionales para organizar los conceptos de planilla.',controller:'Mia/Rrhh/Maestros/AgrupadoraConceptoController',page:'mia-rrhh-maestros-agrupadoras-conceptos'},
      {slug:'conceptos-planilla-eps',name:'Conceptos de planilla EPS',description:'Habilitación de conceptos institucionales para la EPS actual.',controller:'Mia/Rrhh/Maestros/ConceptosPlanillaEPSController',page:'mia-rrhh-maestros-conceptos-planilla-eps'},
      {slug:'dependencias-conceptos-eps',name:'Dependencias de conceptos EPS',description:'Relaciones y factores de cálculo entre conceptos habilitados para EPS.',controller:'Mia/Rrhh/Maestros/DependenciaConceptosPlanillaEPSController',page:'mia-rrhh-maestros-dependencias-conceptos-eps'},
      {slug:'tipos-relacion',name:'Tipos de relación',description:'Operaciones y parámetros para relacionar conceptos de planilla.',controller:'Mia/Rrhh/Maestros/TiposRelacionController',page:'mia-rrhh-maestros-tipos-relacion'},
      {slug:'trabajador-conceptos',name:'Conceptos por trabajador',description:'Asignaciones, excepciones, montos manuales y vigencias por trabajador.',controller:'Mia/Rrhh/Maestros/TrabajadorConceptoConfigController',page:'mia-rrhh-maestros-trabajador-conceptos'},
      {slug:'procesos-planilla',name:'Procesos de planilla',description:'Consulta y seguimiento de los procesos de cálculo de planillas.',controller:'Mia/Rrhh/Planilla/ProcesosController',page:'mia-rrhh-planilla-procesos'},
      {slug:'nuevo-proceso-planilla',name:'Nuevo proceso de planilla',description:'Creación de borradores para el cálculo de planillas por periodo y régimen.',controller:'Mia/Rrhh/Planilla/ProcesosController',page:'mia-rrhh-planilla-procesos-crear'},
      {slug:'detalle-proceso-planilla',name:'Detalle del proceso de planilla',description:'Estado, información y acciones disponibles para un proceso de planilla.',controller:'Mia/Rrhh/Planilla/ProcesosController',page:'mia-rrhh-planilla-proceso-detalle'},
      {slug:'seleccionar-trabajadores-planilla',name:'Seleccionar trabajadores de planilla',description:'Selección total o personalizada para calcular y recalcular procesos.',controller:'Mia/Rrhh/Planilla/ProcesosController',page:'mia-rrhh-planilla-seleccionar-trabajadores'},
      {slug:'resumen-proceso-planilla',name:'Resumen del proceso de planilla',description:'Totales de trabajadores, ingresos, descuentos y neto calculado.',controller:'Mia/Rrhh/Planilla/ProcesosController',page:'mia-rrhh-planilla-resumen'},
      {slug:'trabajadores-proceso-planilla',name:'Trabajadores del proceso de planilla',description:'Consulta de trabajadores calculados, importes y acceso a sus boletas.',controller:'Mia/Rrhh/Planilla/ProcesosController',page:'mia-rrhh-planilla-trabajadores'},
      {slug:'detalle-trabajador-planilla',name:'Detalle del trabajador en planilla',description:'Conceptos e importes calculados para un trabajador dentro del proceso.',controller:'Mia/Rrhh/Planilla/ProcesosController',page:'mia-rrhh-planilla-trabajador-detalle'},
      {slug:'reporte-conceptos-planilla',name:'Reporte de planilla por concepto',description:'Consulta de conceptos calculados por periodo, régimen y trabajador.',controller:'Mia/Rrhh/Planilla/PlanillaController',page:'mia-rrhh-planilla-reporte-concepto'},
      {slug:'reporte-boletas-planilla',name:'Reporte de boletas',description:'Vista previa y exportación masiva de boletas de pago por periodo y régimen.',controller:'Mia/Rrhh/Planilla/PlanillaController',page:'mia-rrhh-planilla-reporte-boletas'}
      ,{slug:'horarios-trabajo',name:'Horarios de trabajo',description:'Configuración de jornadas, bloques de entrada y salida por régimen laboral.',controller:'Mia/Rrhh/ControlTiempos/HorariosController',page:'mia-rrhh-control-tiempos-horarios'}
      ,{slug:'turnos-extra',name:'Turnos extra',description:'Turnos adicionales, horarios nocturnos, duración y concepto de planilla asociado.',controller:'Mia/Rrhh/ControlTiempos/TurnosExtrasController',page:'mia-rrhh-control-tiempos-turnos-extra'}
      ,{slug:'programacion-horarios',name:'Programación de horarios',description:'Asignación masiva o individual de jornadas a trabajadores por régimen y periodo.',controller:'Mia/Rrhh/ControlTiempos/ProgramacionHorariosController',page:'mia-rrhh-control-tiempos-programaciones'}
      ,{slug:'detalle-programacion-horarios',name:'Detalle de programación de horarios',description:'Jornadas diarias por trabajador y corrección del horario asignado.',controller:'Mia/Rrhh/ControlTiempos/ProgramacionHorariosController',page:'mia-rrhh-control-tiempos-programacion-detalle'}
      ,{slug:'asistencias',name:'Asistencias',description:'Registro manual, corrección e importación de las marcaciones diarias del personal.',controller:'Mia/Rrhh/ControlTiempos/AsistenciasController',page:'mia-rrhh-control-tiempos-asistencias'}
      ,{slug:'reporte-diario-asistencia',name:'Reporte diario de asistencia',description:'Marcaciones, tardanzas y descuentos diarios por trabajador y bloque horario.',controller:'Mia/Rrhh/ControlTiempos/ControlTiemposController',page:'mia-rrhh-control-tiempos-reporte-diario'}
    ]},
    {slug:'utilitarios',name:'Utilitarios',description:'Herramientas administrativas.',controller:'Mia/Utilitario',options:[
      {slug:'reporte-almacen',name:'Reporte anual de almacén',description:'Ítems ingresados a almacén sin movimiento, agrupados y valorizados por año.',controller:'Mia/Utilitario/AlmacenController',page:'mia-utilitarios-reporte-almacen'}
    ]},
    {slug:'finanzas',name:'Finanzas',description:'Tesorería, proveedores, flujo de caja y reportes financieros.',controller:'Mia/Finanzas',options:[
      {slug:'bitacora',name:'Bitácora financiera',description:'Auditoría de cambios y operaciones realizadas en el módulo de Finanzas.',controller:'Mia/Finanzas/Maestros/BitacoraController',page:'mia-finanzas-bitacora'},
      {slug:'cartas-fianza',name:'Cartas Fianza',description:'Registro, seguimiento y control de garantías emitidas y recibidas.',controller:'Mia/Finanzas/Maestros/CartaFianzaController',page:'mia-finanzas-cartas-fianza'},
      {slug:'tipos-carta-fianza',name:'Tipos de Carta Fianza',description:'Catálogo de tipos utilizados para clasificar las garantías financieras.',controller:'Mia/Finanzas/Maestros/TipoCartaFianzaController',page:'mia-finanzas-tipos-carta-fianza'},
      {slug:'catalogo-detracciones',name:'Catálogo de detracciones',description:'Gestión de códigos, porcentajes, montos mínimos y vigencias aplicables.',controller:'Mia/Finanzas/Maestros/CatalogoDetraccionController',page:'mia-finanzas-catalogo-detracciones'},
      {slug:'configuraciones-retencion',name:'Configuración de retenciones',description:'Porcentajes, vigencias y numeración de comprobantes de retención.',controller:'Mia/Finanzas/Maestros/ConfiguracionRetencionController',page:'mia-finanzas-configuraciones-retencion'},
      {slug:'tipos-cambio',name:'Tipos de cambio',description:'Valores diarios de compra y venta para las monedas financieras.',controller:'Mia/Finanzas/Maestros/TipoCambioController',page:'mia-finanzas-tipos-cambio'},
      {slug:'analitico-comprobantes',name:'Consistencias de comprobantes',description:'Análisis de cargos, abonos y consistencia por tipo de comprobante.',controller:'Mia/Finanzas/Reportes/ReporteAnaliticoComprobanteController',page:'mia-finanzas-analitico-comprobantes'},
      {slug:'cuentas-bancarias-proveedores',name:'Cuentas bancarias de proveedores',description:'Gestión de cuentas, CCI y cuentas de detracciones por proveedor.',controller:'Mia/Finanzas/Proveedores/ProveedorCuentaBancariaController',page:'mia-finanzas-cuentas-bancarias-proveedores'},
      {slug:'documentos-proveedores',name:'Documentos de proveedores',description:'Registro y control de documentos pendientes de pago, retenciones y detracciones.',controller:'Mia/Finanzas/Proveedores/DocumentoProveedorController',page:'mia-finanzas-documentos-proveedores'},
      {slug:'detracciones-proveedores',name:'Gestión de detracciones',description:'Control de depósitos de detracciones asociados a documentos de proveedores.',controller:'Mia/Finanzas/Proveedores/DetraccionProveedorController',page:'mia-finanzas-detracciones-proveedores'},
      {slug:'movimientos-financieros',name:'Movimientos financieros',description:'Registro y control de comprobantes, pagos y asientos de tesorería.',controller:'Mia/Finanzas/Movimientos/MovimientoController',page:'mia-finanzas-movimientos-financieros'},
      {slug:'movimientos-flujo-caja',name:'Movimientos de flujo de caja',description:'Ingresos y egresos de tesorería generados por movimientos financieros.',controller:'Mia/Finanzas/Movimientos/MovimientoFlujoCajaController',page:'mia-finanzas-movimientos-flujo-caja'},
      {slug:'consistencias-proveedores',name:'Consistencias de proveedores',description:'Validación de integridad documental, tributaria y de pagos a proveedores.',controller:'Mia/Finanzas/Consistencias/ConsistenciaProveedorController',page:'mia-finanzas-consistencias-proveedores'},
      {slug:'conceptos-cuenta',name:'Conceptos de cuenta',description:'Catálogo ordenado de conceptos utilizados en la gestión financiera.',controller:'Mia/Finanzas/Maestros/ConceptoCuentaController',page:'mia-finanzas-conceptos-cuenta'},
      {slug:'conceptos-flujo-caja',name:'Conceptos de flujo de caja',description:'Clasificación de ingresos y salidas por actividad financiera.',controller:'Mia/Finanzas/Maestros/ConceptoFlujoCajaController',page:'mia-finanzas-conceptos-flujo-caja'},
      {slug:'cuentas-flujo-caja',name:'Cuentas de flujo de caja',description:'Asociación de cuentas contables con conceptos del flujo de efectivo.',controller:'Mia/Finanzas/Maestros/CuentaFlujoCajaController',page:'mia-finanzas-cuentas-flujo-caja'},
      {slug:'cuentas-tesoreria',name:'Cuentas de tesorería',description:'Configuración bancaria y contable de las cuentas utilizadas por tesorería.',controller:'Mia/Finanzas/Maestros/CuentaTesoreriaController',page:'mia-finanzas-cuentas-tesoreria'},
      {slug:'clasificacion-flujo-caja',name:'Clasificación para flujo de caja',description:'Clasificación de cuentas contables como ingresos o egresos del flujo de caja.',controller:'Mia/Finanzas/Maestros/CuentaTesoreriaController@configurarFlujoCaja',page:'mia-finanzas-clasificacion-flujo-caja'},
      {slug:'destinos-movilidad',name:'Destinos de movilidad',description:'Catálogo de destinos utilizados para registrar gastos de movilidad.',controller:'Mia/Finanzas/Maestros/DestinoMovilidadController',page:'mia-finanzas-destinos-movilidad'},
      {slug:'periodos-financieros',name:'Periodos financieros',description:'Administración de ejercicios y apertura o cierre de periodos mensuales.',controller:'Mia/Finanzas/Maestros/PeriodoFinancieroController+DetallePeriodoController',page:'mia-finanzas-periodos-financieros'},
      {slug:'documentos-caja-chica',name:'Documentos de caja chica',description:'Comprobantes e impuestos utilizados en la rendición de gastos menores.',controller:'Mia/Finanzas/Maestros/DocumentoCajaChicaController',page:'mia-finanzas-documentos-caja-chica'},
      {slug:'equivalencias-flujo-caja',name:'Equivalencias de flujo de caja',description:'Relación de cuentas, quiebres, conceptos e inversiones para el flujo de caja.',controller:'Mia/Finanzas/Maestros/FcEquivalenciaController',page:'mia-finanzas-equivalencias-flujo-caja'},
      {slug:'quiebres-flujo-caja',name:'Quiebres de flujo de caja',description:'Estructura jerárquica para clasificar ingresos y egresos financieros.',controller:'Mia/Finanzas/Maestros/FcQuiebreController',page:'mia-finanzas-quiebres-flujo-caja'},
      {slug:'fuentes-financiamiento',name:'Fuentes de financiamiento',description:'Catálogo de recursos que financian las operaciones de tesorería.',controller:'Mia/Finanzas/Maestros/FuenteFinanciamientoController',page:'mia-finanzas-fuentes-financiamiento'},
      {slug:'modalidades-pago',name:'Modalidades de pago',description:'Catálogo de formas utilizadas para efectuar operaciones y pagos financieros.',controller:'Mia/Finanzas/Maestros/ModalidadPagoController',page:'mia-finanzas-modalidades-pago'},
      {slug:'numeraciones-comprobante',name:'Numeración de comprobantes',description:'Rangos de correlativos por sucursal, ejercicio y tipo de comprobante.',controller:'Mia/Finanzas/Maestros/NumeracionTipoComprobanteController',page:'mia-finanzas-numeraciones-comprobante'},
      {slug:'configuracion-tipos-documento',name:'Configuración financiera de documentos',description:'Origen y uso financiero de los tipos de documento contable.',controller:'Mia/Finanzas/Maestros/TipoDocumentoConfiguracionController',page:'mia-finanzas-configuracion-tipos-documento'},
      {slug:'rendiciones-caja-chica',name:'Rendiciones de caja chica',description:'Control de fondos fijos, gastos directos y anticipos por rendir.',controller:'Mia/Finanzas/Maestros/RendicionCajaChicaController@listar',page:'mia-finanzas-rendiciones-caja-chica'},
      {slug:'tipos-fondo-caja-chica',name:'Tipos de fondo de caja chica',description:'Configuración de fondos, cuentas y modalidades de rendición permitidas.',controller:'Mia/Finanzas/Maestros/TipoFondoCajaChicaController',page:'mia-finanzas-tipos-fondo-caja-chica'},
      {slug:'rubros-caja-chica',name:'Rubros de caja chica',description:'Clasificación contable de los gastos registrados en las rendiciones.',controller:'Mia/Finanzas/Maestros/RubroCajaChicaController',page:'mia-finanzas-rubros-caja-chica'},
      {slug:'reporte-caja-chica',name:'Reporte de caja chica',description:'Consulta y exportación de rendiciones, documentos y gastos por rubro.',controller:'Mia/Finanzas/Maestros/ReporteCajaChicaController',page:'mia-finanzas-reporte-caja-chica'},
      {slug:'comprobantes-tesoreria',name:'Comprobantes de tesorería',description:'Movimientos, documentos, cargos y abonos por tipo de comprobante.',controller:'Mia/Finanzas/Procesos/ComprobanteTesoreriaController',page:'mia-finanzas-comprobantes-tesoreria'},
      {slug:'estado-cuentas-bancarias',name:'Estado de cuentas bancarias',description:'Saldos bancarios agrupados por concepto y cuenta contable.',controller:'Mia/Finanzas/Procesos/EstadoCuentasBancariasConceptosController',page:'mia-finanzas-estado-cuentas-bancarias'},
      {slug:'libro-caja-banco',name:'Libro caja y bancos',description:'Movimientos y saldos de las cuentas de caja y bancos.',controller:'Mia/Finanzas/Procesos/LibroCajaBancoController',page:'mia-finanzas-libro-caja-banco'},
      {slug:'resumen-cuentas',name:'Resumen de cuentas',description:'Saldos anteriores y movimientos mensuales por cuenta contable.',controller:'Mia/Finanzas/Procesos/ResumenCuentasController',page:'mia-finanzas-resumen-cuentas'},
      {slug:'estado-flujo-caja',name:'Estado de flujo de caja',description:'Flujo de efectivo entre fechas, clasificado por actividad y concepto.',controller:'Mia/Finanzas/Procesos/EstadoFlujoCajaController',page:'mia-finanzas-estado-flujo-caja'},
      {slug:'libro-mayor-auxiliar',name:'Libro mayor auxiliar',description:'Movimientos contables consolidados por periodo y rango de cuentas.',controller:'Mia/Finanzas/Procesos/LibroMayorAuxiliarController',page:'mia-finanzas-libro-mayor-auxiliar'}
    ]} ]},
  { slug:'comercial', name:'Comercial', code:'EV', color:'#21a06b', controller:'Evan', description:'Catastro, medición, facturación y cobranza.', sections:[
    {slug:'catastro',name:'Catastro Comercial',description:'Clientes, predios, conexiones y sectores.',controller:'Evan/Catastro',options:[
      {slug:'conexiones',name:'Conexiones',description:'Consulta de conexiones y suministros del catastro comercial.',controller:'Evan/Catastro/ConexionController',page:'evan-catastro-conexiones'},
      {slug:'sectores',name:'Sectores',description:'Administración de sectores comerciales por distrito.',controller:'Evan/Catastro/SectorController',page:'evan-catastro-sectores'},
      {slug:'manzanas',name:'Manzanas',description:'Administración de manzanas vinculadas a los sectores comerciales.',controller:'Evan/Catastro/ManzanaController',page:'evan-catastro-manzanas'},
      {slug:'urbanizaciones',name:'Urbanizaciones',description:'Administración de urbanizaciones por distrito.',controller:'Evan/Catastro/UrbanizacionController',page:'evan-catastro-urbanizaciones'},
      {slug:'calles',name:'Calles',description:'Administración de calles por distrito.',controller:'Evan/Catastro/CalleController',page:'evan-catastro-calles'},
      {slug:'centros-poblados',name:'Centros poblados',description:'Administración de centros poblados por distrito.',controller:'Evan/Catastro/CentroPobladoController',page:'evan-catastro-centros-poblados'},
      {slug:'predios',name:'Predios',description:'Ubicación catastral, propietarios, conexiones y fotografías de los inmuebles.',controller:'Evan/Catastro/PredioController|FotografiaPredioController',page:'evan-catastro-predios'},
      {slug:'clientes',name:'Clientes y propietarios',description:'Padrón maestro de personas naturales y jurídicas vinculables a predios.',controller:'Evan/Catastro/ClienteController',page:'evan-catastro-clientes'},
      {slug:'notificaciones',name:'Notificaciones',description:'Bandeja de avisos catastrales pendientes, evidencia fotográfica y constancia de entrega.',controller:'Evan/Catastro/NotificacionController|FotografiaNotificacionController',page:'evan-catastro-notificaciones'},
      {slug:'recategorizar',name:'Recategorizar',description:'Solicitudes pendientes para actualizar la categoría de las unidades de uso de una conexión.',controller:'Evan/Catastro/ActualizacionCategoriaController',page:'evan-catastro-recategorizar'}
      ,{slug:'fichas',name:'Fichas catastrales',description:'Campañas de actualización y captura digital de información de predios.',controller:'Evan/Catastro/CampanaController|FichaActualizacionController',page:'evan-catastro-fichas'},
      {slug:'tareas',name:'Tareas',description:'Bandeja de solicitudes y reclamos pendientes de recepción por Catastro.',controller:'Evan/Comercializacion/TareaController',page:'evan-catastro-tareas'}
      ,{slug:'configuraciones',name:'Configuraciones',description:'Catálogo jerárquico de objetos, atributos y valores utilizados por Catastro.',controller:'Evan/Catastro/CatastroConfiguracionController',page:'evan-catastro-configuraciones'}
    ]},
    {slug:'comercializacion',name:'Comercialización',description:'Atenciones, solicitudes, tickets y trabajos.',controller:'Evan/Comercializacion',options:[
      {slug:'clientes',name:'Clientes',description:'Búsqueda, registro y ficha integral de clientes, predios y conexiones.',controller:'Evan/Comercializacion/ClienteController',page:'evan-comercial-clientes'},
      {slug:'solicitudes',name:'Solicitudes',description:'Registro y seguimiento del flujo de solicitudes comerciales.',controller:'Evan/Comercializacion/SolicitudController|DocumentoController',page:'evan-comercial-solicitudes'},
      {slug:'tramites',name:'Trámites',description:'Bandeja consolidada y seguimiento de solicitudes y reclamos comerciales.',controller:'Evan/Comercializacion/TramiteController|DocumentoController',page:'evan-comercial-tramites'},
      {slug:'trabajos',name:'Trabajos',description:'Trabajos derivados de expedientes y acciones del flujo comercial.',controller:'Evan/Comercializacion/TrabajoController',page:'evan-comercial-trabajos'},
      {slug:'tareas',name:'Tareas',description:'Recepción, derivación, ejecución y cierre de tareas comerciales.',controller:'Evan/Comercializacion/TareaController',page:'evan-comercial-tareas'},
      {slug:'atencion-externa',name:'Atención externa',description:'Validación de solicitudes ciudadanas y generación de tickets comerciales.',controller:'Evan/Comercializacion/AtencionExternaController',page:'evan-comercial-atencion-externa'},
      {slug:'call-center',name:'Call Center',description:'Registro, asignación, seguimiento y cierre de tickets de atención.',controller:'Evan/Comercializacion/CallCenterController',page:'evan-comercial-call-center'},
      {slug:'calculadora-consumo',name:'Calculadora de consumo',description:'Simulación de agua, alcantarillado, cargo fijo e IGV por estructura tarifaria.',controller:'Evan/Comercializacion/CalculadoraController',page:'evan-comercial-calculadora-consumo'},
      {slug:'estadisticas',name:'Estadísticas',description:'Indicadores mensuales de tickets recibidos, atendidos, pendientes y tiempos de respuesta.',controller:'Evan/Comercializacion/EstadisticaController',page:'evan-comercial-estadisticas'},
      {slug:'tipos-atencion',name:'Tipos de atención',description:'Configuración de solicitudes, reclamos y secuencia de acciones del flujo.',controller:'Evan/Comercializacion/ConceptoController',page:'evan-comercial-tipos-atencion'},
      {slug:'acciones',name:'Acciones',description:'Catálogo de actividades, responsables y movimientos disponibles para los flujos de atención.',controller:'Evan/Comercializacion/AccionController',page:'evan-comercial-acciones'},
      {slug:'flujos-atencion',name:'Flujos de atención',description:'Definición de procedimientos y códigos correlativos para solicitudes y reclamos.',controller:'Evan/Comercializacion/FlujoAtencionController',page:'evan-comercial-flujos-atencion'},
      {slug:'tipos-trabajo',name:'Tipos de trabajo',description:'Catálogo de labores, duración, proceso y movimientos generados por la atención.',controller:'Evan/Comercializacion/TipoTrabajoController',page:'evan-comercial-tipos-trabajo'},
      {slug:'acciones-flujo',name:'Acciones del flujo',description:'Configuración secuencial de trabajos, condiciones y rutas de decisión por flujo.',controller:'Evan/Comercializacion/AccionFlujoController',page:'evan-comercial-acciones-flujo'},
      {slug:'motivos-expediente',name:'Motivos de expediente',description:'Reglas, requisitos y efectos asociados a solicitudes y reclamos comerciales.',controller:'Evan/Comercializacion/MotivoExpedienteController',page:'evan-comercial-motivos-expediente'},
      {slug:'expedientes',name:'Expedientes de atención',description:'Registro y seguimiento de expedientes comerciales.',controller:'Evan/Comercializacion/ExpedienteController',page:'evan-atencion-expedientes'}
    ]},
    {slug:'operativo-comercial',name:'Operativo comercial',description:'Inspecciones y actividades de campo del equipo comercial.',controller:'Evan/Comercializacion/TareaController',options:[
      {slug:'tareas',name:'Tareas de inspector',description:'Bandeja de tareas disponibles para inspectores y personal operativo comercial.',controller:'Evan/Comercializacion/TareaController',page:'evan-operativo-tareas'}
    ]},
    {slug:'medicion',name:'Medición',description:'Lecturas, medidores, padrones y críticas.',controller:'Evan/Medicion',options:[
      {slug:'medidores',name:'Medidores',description:'Registro, consulta y situación operativa de medidores.',controller:'Evan/Medicion/MedidorController',page:'evan-medicion-medidores'},
      {slug:'padron-lecturas',name:'Padrón de lecturas',description:'Generación y recorrido de padrones por distrito, sector, ruta y medidor.',controller:'Evan/Medicion/PadronLecturaController',page:'evan-medicion-padron-lecturas'},
      {slug:'lecturas',name:'Registro de lecturas',description:'Captura de lecturas, impedimentos, evidencias, GPS y dinámica catastral.',controller:'Evan/Medicion/LecturaController',page:'evan-medicion-lecturas'},
      {slug:'atipicos',name:'Lecturas atípicas',description:'Control de desviaciones, notificaciones e inspecciones generadas por consumos atípicos.',controller:'Evan/Medicion/AtipicoController|LecturaController',page:'evan-medicion-atipicos'},
      {slug:'critica-lecturas',name:'Crítica de lecturas',description:'Revisión, corrección y validación de consumos observados antes de facturación.',controller:'Evan/Medicion/CriticaController|LecturaController',page:'evan-medicion-critica-lecturas'},
      {slug:'avisos-altos-consumidores',name:'Avisos a altos consumidores',description:'Emisión y control de entrega de avisos por consumos superiores al promedio.',controller:'Evan/Medicion/AvisosAltosConsumidoresController',page:'evan-medicion-avisos-altos-consumidores'},
      {slug:'avance-lecturas',name:'Avance de lecturas',description:'Indicadores de progreso, calidad, alertas y productividad por lecturista.',controller:'Evan/Medicion/AvanceLecturasController',page:'evan-medicion-avance-lecturas'},
      {slug:'tareas',name:'Tareas',description:'Bandeja de tareas comerciales pendientes de recepción por el área de Medición.',controller:'Evan/Comercializacion/TareaController',page:'evan-medicion-tareas'}
    ]},
    {slug:'facturacion',name:'Facturación',description:'Ciclos y procesos de facturación.',controller:'Evan/Facturacion',options:[
      {slug:'ciclos',name:'Ciclos de facturación',description:'Cronograma y avance de las fases de facturación por distrito y sector.',controller:'Evan/Facturacion/CicloController|CicloMasivoController',page:'evan-facturacion-ciclos'}
      ,{slug:'critica',name:'Crítica y pre-facturación',description:'Procesamiento y revisión financiera de ciclos habilitados para facturación.',controller:'Evan/Facturacion/CriticaController',page:'evan-facturacion-critica'}
      ,{slug:'tareas',name:'Tareas',description:'Bandeja de tareas comerciales pendientes de recepción por Facturación.',controller:'Evan/Comercializacion/TareaController',page:'evan-facturacion-tareas'}
    ]},
    {slug:'vma',name:'Valores Máximos Admisibles',description:'Gestión de atenciones relacionadas con descargas no domésticas.',controller:'Evan/Vma',options:[
      {slug:'tareas',name:'Tareas',description:'Bandeja de solicitudes y reclamos pendientes de recepción por VMA.',controller:'Evan/Comercializacion/TareaController',page:'evan-vma-tareas'}
    ]},
    {slug:'cobranza',name:'Cobranza',description:'Deudas, pagos y verificación de cortes.',controller:'Evan/Cobranza',options:[
      {slug:'pagos',name:'Registro de pagos',description:'Búsqueda de deuda y recaudación de comprobantes pendientes por conexión.',controller:'Evan/Cobranza/PagoController|DeudaController',page:'evan-cobranza-pagos'}
      ,{slug:'verificar-cortados',name:'Verificación de cortados',description:'Generación del padrón y captura de la situación real de servicios cortados.',controller:'Evan/Cobranza/VerificarCortadosController',page:'evan-cobranza-verificar-cortados'}
      ,{slug:'tareas',name:'Tareas',description:'Bandeja de tareas comerciales pendientes de recepción por Cobranza.',controller:'Evan/Comercializacion/TareaController',page:'evan-cobranza-tareas'}
    ]},
    {slug:'sici',name:'SICI',description:'Personas y conexiones para reportes regulatorios.',controller:'Evan/Sici',options:[
      {slug:'conexiones',name:'Conexiones - Anexo 04',description:'Registro de titulares y nuevas conexiones para el Anexo 04 de SUNASS.',controller:'Evan/Sici/ConexionController|PersonaController',page:'evan-sici-conexiones'}
    ]} ]},
  { slug:'operaciones', name:'Operaciones', code:'DA', color:'#e38b2f', controller:'Dana', description:'Infraestructura, calidad, producción y cisternas.', sections:[
    {slug:'infraestructura',name:'Sistemas y componentes',description:'Sistemas, componentes, planos e interrupciones.',controller:'Dana',options:[
      {slug:'sistemas',name:'Sistemas',description:'Sistemas operacionales de agua potable y alcantarillado por distrito.',controller:'Dana/SistemaController',page:'dana-infraestructura-sistemas'}
      ,{slug:'componentes',name:'Componentes',description:'Infraestructura operacional, georreferenciación y condiciones técnicas.',controller:'Dana/ComponenteController',page:'dana-infraestructura-componentes'}
      ,{slug:'planos',name:'Planos',description:'Visualización geográfica de sistemas y componentes operacionales.',controller:'Dana/PlanoController',page:'dana-infraestructura-planos'}
      ,{slug:'interrupciones',name:'Interrupciones',description:'Consulta, seguimiento y restablecimiento de interrupciones del servicio.',controller:'Dana/InterrupcionController',page:'dana-infraestructura-interrupciones'}
    ]},
    {slug:'cuadrillas',name:'Cuadrillas operativas',description:'Organización de líderes y personal para servicios de campo.',controller:'Dana/CuadrillaController',options:[
      {slug:'gestion',name:'Gestión de cuadrillas',description:'Registro, composición y disponibilidad de cuadrillas operativas.',controller:'Dana/CuadrillaController',page:'dana-cuadrillas'}
    ]},
    {slug:'catastro-tecnico',name:'Catastro Técnico',description:'Clasificación de componentes.',controller:'Dana/CatastroTecnico',options:[
      {slug:'tipos-componentes',name:'Tipos de componente',description:'Clasificación, geometría, iconos y estilo cartográfico de componentes.',controller:'Dana/CatastroTecnico/TipoComponenteController',page:'dana-catastro-tecnico-tipos'}
    ]},
    {slug:'calidad',name:'Control de Calidad',description:'Muestras, parámetros y resultados.',controller:'Dana/ControlCalidad',options:[
      {slug:'muestras',name:'Muestras de agua',description:'Registro, ubicación y seguimiento de muestras tomadas en componentes.',controller:'Dana/ControlCalidad/MuestrasController',page:'dana-calidad-muestras'}
      ,{slug:'unidades',name:'Unidades de control',description:'Catálogo de unidades utilizadas en parámetros y resultados de calidad.',controller:'Dana/ControlCalidad/UnidadesController',page:'dana-calidad-unidades'}
      ,{slug:'parametros',name:'Parámetros de control',description:'Variables analíticas, códigos y unidades para resultados de calidad.',controller:'Dana/ControlCalidad/ParametrosController',page:'dana-calidad-parametros'}
      ,{slug:'variables-sunass',name:'Variables SUNASS',description:'Variables regulatorias, periodicidad y grupos de información.',controller:'Dana/ControlCalidad/VariableSunassController',page:'dana-calidad-variables-sunass'}
      ,{slug:'resultados',name:'Resultados de muestras',description:'Registro de valores analíticos por muestra, parámetro y unidad.',controller:'Dana/ControlCalidad/ResultadosController',page:'dana-calidad-resultados'}
    ]},
    {slug:'cisternas',name:'Gestión de Cisternas',description:'Programación, abastecimiento y rastreo.',controller:'Dana/GestionCisternas',options:[
      {slug:'unidades',name:'Cisternas',description:'Unidades móviles, disponibilidad, conductores y mantenimientos.',controller:'Dana/GestionCisternas/CisternasController',page:'dana-cisternas-unidades'}
      ,{slug:'conductores',name:'Conductores',description:'Padrón y datos de contacto del personal asignado a las programaciones de cisternas.',controller:'Dana/GestionCisternas/ConductorController',page:'dana-cisternas-conductores'}
      ,{slug:'programaciones',name:'Programación',description:'Planificación de fechas, horarios, unidades, conductores, rutas y puntos de abastecimiento.',controller:'Dana/GestionCisternas/ProgramacionController',page:'dana-cisternas-programaciones'}
      ,{slug:'abastecimientos',name:'Abastecimientos',description:'Control de ingresos, salidas y vueltas ejecutadas en puntos de abastecimiento.',controller:'Dana/GestionCisternas/AbastecimientoController',page:'dana-cisternas-abastecimientos'}
      ,{slug:'recorridos',name:'Recorridos GPS',description:'Ubicación actual e historial de desplazamiento de cisternas e hidrojet.',controller:'Dana/GestionCisternas/RecorridoController|RastreoController',page:'dana-cisternas-recorridos'}
      ,{slug:'evidencias',name:'Evidencias',description:'Registro y galería de fotografías georreferenciadas por programación, unidad y vuelta.',controller:'Dana/GestionCisternas/ProgramacionEvidenciaController',page:'dana-cisternas-evidencias'}
      ,{slug:'dashboard',name:'Dashboard',description:'Indicadores de participación, viajes, programación y volumen distribuido por cisternas.',controller:'Dana/GestionCisternas/ProgramacionController@kpis',page:'dana-cisternas-dashboard'}
    ]},
    {slug:'produccion',name:'Producción',description:'Macromedidores y lecturas.',controller:'Dana/Produccion',options:[
      {slug:'macromedidores',name:'Macromedidores',description:'Puntos físicos y virtuales para registro y seguimiento de lecturas de producción.',controller:'Dana/Produccion/MacromedidorController',page:'dana-produccion-macromedidores'}
      ,{slug:'lecturas',name:'Lecturas',description:'Consulta consolidada, evidencia y control del historial de lecturas de producción.',controller:'Dana/Produccion/LecturaController',page:'dana-produccion-lecturas'}
    ]} ]},
  { slug:'legal', name:'Legal', code:'MA', color:'#596a7b', controller:'Mat', description:'Expedientes y procedimientos legales.', sections:[
    {slug:'expedientes',name:'Expedientes',description:'Expedientes, partes y adjuntos.',controller:'Mat/Expedientes',options:[
      {slug:'gestion',name:'Gestión de expedientes',description:'Registro, búsqueda, ficha legal, partes, documentos e historial.',controller:'Mat/Expedientes/ExpedienteController',page:'mat-expedientes-gestion'}
    ]},
    {slug:'pad',name:'PAD',description:'Procesos disciplinarios y precalificación.',controller:'Mat/Pad',options:[
      {slug:'gestion',name:'Gestión PAD',description:'Denuncias, precalificación y seguimiento de expedientes disciplinarios.',controller:'Mat/Pad/DenunciaController|ExpedientePadController|PrecalificacionController',page:'mat-pad-gestion'}
    ]},
    {slug:'pas',name:'PAS',description:'Fiscalización y medidas correctivas.',controller:'Mat/Pas',options:[
      {slug:'gestion',name:'Gestión PAS',description:'Fiscalizaciones, medidas correctivas y expedientes sancionadores.',controller:'Mat/Pas/FiscalizacionController|MedidaCorrectivaController|PasController',page:'mat-pas-gestion'}
    ]},
    {slug:'convenios',name:'Convenios',description:'Convenios, contrapartes y archivos.',controller:'Mat/Convenio',options:[
      {slug:'gestion',name:'Gestión de convenios',description:'Vigencias, contrapartes, compromisos, prórrogas y archivos.',controller:'Mat/Convenio/ConvenioController',page:'mat-convenios-gestion'}
    ]},
    {slug:'documentos-normativos',name:'Documentos Normativos',description:'Normas, tipos y relaciones.',controller:'Mat/DocumentoNormativo',options:[
      {slug:'gestion',name:'Gestión normativa',description:'Repositorio, vigencias, versiones, archivos y relaciones entre documentos.',controller:'Mat/DocumentoNormativo/DocumentoController',page:'mat-documentos-normativos-gestion'}
    ]} ]},
  { slug:'helpdesk', name:'HelpDesk', code:'HD', color:'#db4b4b', controller:'HelpDesk', description:'Requerimientos de soporte.', sections:[
    {slug:'requerimientos',name:'Requerimientos',description:'Registro y seguimiento de soporte.',controller:'HelpDesk/RequerimientoController',options:[
      {slug:'gestion',name:'Gestión de requerimientos',description:'Registro, asignación, atención y cierre de asistencias técnicas.',controller:'HelpDesk/RequerimientoController',page:'helpdesk-requerimientos-gestion'}
    ]} ]},
  { slug:'integracion', name:'Integración', code:'EN', color:'#148f92', controller:'Enki', description:'Integración territorial y asistencias.', sections:[
    {slug:'territorial',name:'Integración Territorial',description:'Fases y centros poblados.',controller:'Enki/TerritorialController',options:[
      {slug:'procesos',name:'Procesos de integración',description:'Registro y seguimiento territorial de centros poblados por EPS y fase.',controller:'Enki/TerritorialController',page:'enki-territorial-procesos'}
      ,{slug:'regularizacion',name:'Regularización de hitos',description:'Corrección de comentarios y documentos sustentatorios de fases cerradas.',controller:'Enki/TerritorialController',page:'enki-territorial-regularizacion'}
    ]},
    {slug:'asistencias',name:'Asistencias',description:'Asistencias técnicas.',controller:'Enki/AsistenciaController'},
    {slug:'contratos',name:'Contratos de Explotación',description:'Contratos de explotación.',controller:'Enki/ContratoExplotacionController',options:[
      {slug:'gestion',name:'Gestión de contratos',description:'Registro y consulta de contratos de explotación y su ámbito territorial.',controller:'Enki/ContratoExplotacionController',page:'enki-contratos-gestion'}
    ]} ]},
  { slug:'sistema', name:'Sistema', code:'AD', color:'#334a61', controller:'Intranet', description:'Usuarios y configuración general.', sections:[
    {slug:'usuarios',name:'Usuarios',description:'Usuarios, accesos y cuentas.',controller:'Intranet/UsuarioController',options:[
      {slug:'gestion',name:'Gestión de usuarios',description:'Registro, edición, activación y asignación de módulos y empresas.',controller:'Intranet/UsuarioController',page:'sistema-usuarios-gestion'}
    ]},
    {slug:'personas',name:'Personas',description:'Directorio de personas.',controller:'Intranet/PersonaController',options:[
      {slug:'gestion',name:'Gestión de personas',description:'Consulta y actualización de datos personales con historial de cambios.',controller:'Intranet/PersonaController',page:'sistema-personas-gestion'}
    ]},
    {slug:'configuracion',name:'Configuración',description:'Parámetros e indicadores.',controller:'Intranet/ConfiguracionController'},
    {slug:'administrador',name:'Administrador',description:'Administración general.',controller:'Intranet/AdministradorController',options:[
      {slug:'log-accesos',name:'Log de accesos',description:'Consulta del registro de ingresos de los usuarios al sistema.',controller:'Intranet/AdministradorController',page:'sistema-administrador-log-accesos'}
      ,{slug:'errores-sistema',name:'Errores del sistema',description:'Revisión del histórico de errores y eventos técnicos registrados por la intranet.',controller:'LaravelLogViewer/LogViewerController',page:'sistema-administrador-errores'}
      ,{slug:'copias-seguridad',name:'Copias de seguridad',description:'Consulta y descarga de respaldos de la base principal y de la empresa activa.',controller:'Intranet/AdministradorController',page:'sistema-administrador-copias-seguridad'}
      ,{slug:'configuracion',name:'Configuración',description:'Administración de parámetros tipados y categorías del sistema para la empresa activa.',controller:'Intranet/ConfiguracionController',page:'sistema-administrador-configuracion'}
      ,{slug:'tipos-documento',name:'Tipos de documento',description:'Catálogo transversal de tipos documentales para Convenios, Documentos Normativos y e-Trami.',controller:'Etrami/TipoDocumentoController',page:'sistema-administrador-tipos-documento'}
    ]} ]},
]

export const getModule = (slug: string) => appModules.find((module) => module.slug === slug)
