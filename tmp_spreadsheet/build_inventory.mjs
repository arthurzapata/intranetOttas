import fs from 'node:fs/promises';
import { Workbook, SpreadsheetFile } from '@oai/artifact-tool';

const migrated = [
['Trámite V2','Bandejas documentarias','Por recepcionar','/modulos/tramite/bandejas/por-recepcionar','etrami-v2-por-recepcionar','Etrami/DocumentoV2Controller'],
['Trámite V2','Bandejas documentarias','En bandeja','/modulos/tramite/bandejas/en-bandeja','etrami-v2-en-bandeja','Etrami/DocumentoV2Controller'],
['Trámite V2','Bandejas documentarias','Pendientes','/modulos/tramite/bandejas/pendientes','etrami-v2-pendientes','Etrami/DocumentoV2Controller'],
['Trámite V2','Bandejas documentarias','Documentos propios','/modulos/tramite/bandejas/propios','etrami-v2-propios','Etrami/DocumentoV2Controller'],
['Trámite V2','Bandejas documentarias','Archivados','/modulos/tramite/bandejas/archivados','etrami-v2-archivados','Etrami/DocumentoV2Controller'],
['Trámite V2','Gestión de documentos','Registrar documento','/modulos/tramite/documentos/registrar','etrami-v2-registrar-documento','Etrami/DocumentoV2Controller'],
['Trámite V2','Gestión de documentos','Anulados / rechazados','/modulos/tramite/documentos/anulados-rechazados','etrami-v2-anulados-rechazados','Etrami/DocumentoV2Controller'],
['Trámite V2','Flujo documentario','Seguimiento de documentos','/modulos/tramite/flujo-documentario/seguimiento','etrami-v2-flujo-seguimiento','Etrami/DocumentoV2Controller'],
['Trámite V2','Trámite externo','Remitentes y documentos','/modulos/tramite/tramite-externo/remitentes','etrami-v2-externo-remitentes','Etrami/RemitenteV2Controller'],
['Trámite V2','Trámite externo','Documentos por validar','/modulos/tramite/tramite-externo/validar','etrami-v2-externo-validar','Etrami/DocumentoExternoV2Controller'],
['Trámite V2','Reportes y firma','Reporte de documentos','/modulos/tramite/reportes-firma/reporte-documentos','etrami-v2-reporte-documentos','Etrami/ReporteDocumentosV2Controller'],
['Trámite V2','Reportes y firma','Firma digital','/modulos/tramite/reportes-firma/firma-digital','etrami-v2-firma-digital','Etrami/FirmaDigitalController'],
['Trámite V2','Configuración','Tipos de documento','/modulos/tramite/configuracion/tipos-documento','etrami-v2-config-tipos-documento','Etrami/TipoDocumentoController'],
['Trámite V2','Configuración','Correlativos','/modulos/tramite/configuracion/correlativos','etrami-v2-config-correlativos','Etrami/CorrelativoController'],
['Institucional (AURA)','Directorio','Sesiones','/modulos/institucional/directorio/sesiones','aura-directorio-sesiones','Aura/Directorio/SesionController'],
['Institucional (AURA)','Directorio','Acuerdos','/modulos/institucional/directorio/acuerdos','aura-directorio-acuerdos','Aura/Directorio/AccionController'],
['Institucional (AURA)','Directorio','Disposiciones','/modulos/institucional/directorio/disposiciones','aura-directorio-disposiciones','Aura/Directorio/AccionController'],
['Institucional (AURA)','Directorio','Pedidos','/modulos/institucional/directorio/pedidos','aura-directorio-pedidos','Aura/Directorio/PedidoController'],
['Institucional (AURA)','Buen Gobierno Corporativo','Estructura BGC','/modulos/institucional/buen-gobierno/estructura','aura-bgc-estructura','Aura/BuenGobiernoCorporativo'],
['Institucional (AURA)','Buen Gobierno Corporativo','Procesos y evidencias','/modulos/institucional/buen-gobierno/procesos-evidencias','aura-bgc-procesos','Aura/BuenGobiernoCorporativo/ProcesoController'],
['Institucional (AURA)','Buen Gobierno Corporativo','Control de avance','/modulos/institucional/buen-gobierno/control-avance','aura-bgc-control-avance','Aura/BuenGobiernoCorporativo/ControlAvanceController'],
['Comercial (EVAN)','Catastro Comercial','Conexiones','/modulos/comercial/catastro/conexiones','evan-catastro-conexiones','Evan/Catastro/ConexionController'],
['Comercial (EVAN)','Catastro Comercial','Sectores','/modulos/comercial/catastro/sectores','evan-catastro-sectores','Evan/Catastro/SectorController'],
['Comercial (EVAN)','Catastro Comercial','Urbanizaciones','/modulos/comercial/catastro/urbanizaciones','evan-catastro-urbanizaciones','Evan/Catastro/UrbanizacionController'],
['Comercial (EVAN)','Catastro Comercial','Calles','/modulos/comercial/catastro/calles','evan-catastro-calles','Evan/Catastro/CalleController'],
['Comercial (EVAN)','Catastro Comercial','Centros poblados','/modulos/comercial/catastro/centros-poblados','evan-catastro-centros-poblados','Evan/Catastro/CentroPobladoController'],
['Comercial (EVAN)','Comercialización','Expedientes de atención','/modulos/comercial/comercializacion/expedientes','evan-atencion-expedientes','Evan/Comercializacion/ExpedienteController'],
['Comercial (EVAN)','Medición','Medidores','/modulos/comercial/medicion/medidores','evan-medicion-medidores','Evan/Medicion/MedidorController'],
];

const pending = [
['Institucional (AURA)','Gestión de Comités','Comités, reuniones y acuerdos','Aura/GestionComite','Alta','Nuevo desarrollo Vue'],
['Institucional (AURA)','Comunicaciones','Noticias, publicaciones y stakeholders','Aura/Comunicaciones','Media','Nuevo desarrollo Vue'],
['Institucional (AURA)','Integridad','Denuncias e incidencias','Aura/Integridad','Alta','Nuevo desarrollo Vue'],
['Comercial (EVAN)','Comercialización','Cálculo de atención al cliente','Evan/Comercializacion','Alta','Revisado: requiere definir integración/API'],
['Comercial (EVAN)','Comercialización','Atenciones, solicitudes, tickets y trabajos restantes','Evan/Comercializacion','Alta','Completar opciones del bloque'],
['Comercial (EVAN)','Medición','Lecturas, padrones y críticas','Evan/Medicion','Alta','Completar opciones del bloque'],
['Comercial (EVAN)','Facturación','Ciclos y procesos de facturación','Evan/Facturacion','Alta','Nuevo desarrollo Vue'],
['Comercial (EVAN)','Cobranza','Deudas, pagos y verificación de cortes','Evan/Cobranza','Alta','Nuevo desarrollo Vue'],
['Comercial (EVAN)','SICI','Personas y conexiones','Evan/Sici','Media','Nuevo desarrollo Vue'],
['Administración (MIA)','Logística','Pedidos, procesos, órdenes y proveedores','Mia/Logistica','Alta','Nuevo módulo Vue'],
['Administración (MIA)','Almacén','Ingresos, salidas, stock y movimientos','Mia/Logistica/AlmacenController','Alta','Nuevo módulo Vue'],
['Administración (MIA)','Presupuesto','Formulación presupuestal','Mia/Presupuesto','Media','Nuevo módulo Vue'],
['Administración (MIA)','Recursos Humanos','Productividad y personal','Mia/Recursos','Media','Nuevo módulo Vue'],
['Administración (MIA)','Utilitarios','Herramientas administrativas','Mia/Utilitario','Baja','Nuevo módulo Vue'],
['Operaciones (DANA)','Sistemas y componentes','Sistemas, componentes, planos e interrupciones','Dana','Alta','Nuevo módulo Vue'],
['Operaciones (DANA)','Catastro Técnico','Clasificación de componentes','Dana/CatastroTecnico','Alta','Nuevo módulo Vue'],
['Operaciones (DANA)','Control de Calidad','Muestras, parámetros y resultados','Dana/ControlCalidad','Media','Nuevo módulo Vue'],
['Operaciones (DANA)','Gestión de Cisternas','Programación, abastecimiento y rastreo','Dana/GestionCisternas','Media','Nuevo módulo Vue'],
['Operaciones (DANA)','Producción','Macromedidores y lecturas','Dana/Produccion','Alta','Nuevo módulo Vue'],
['Legal (MAT)','Expedientes','Expedientes, partes y adjuntos','Mat/Expedientes','Alta','Nuevo módulo Vue'],
['Legal (MAT)','PAD','Procesos disciplinarios y precalificación','Mat/Pad','Media','Nuevo módulo Vue'],
['Legal (MAT)','PAS','Fiscalización y medidas correctivas','Mat/Pas','Media','Nuevo módulo Vue'],
['Legal (MAT)','Convenios','Convenios, contrapartes y archivos','Mat/Convenio','Media','Nuevo módulo Vue'],
['Legal (MAT)','Documentos Normativos','Normas, tipos y relaciones','Mat/DocumentoNormativo','Media','Nuevo módulo Vue'],
['HelpDesk','Requerimientos','Registro y seguimiento de soporte','HelpDesk/RequerimientoController','Alta','Nuevo módulo Vue'],
];

const wb=Workbook.create();
const summary=wb.worksheets.add('Resumen');
const done=wb.worksheets.add('Migrados');
const todo=wb.worksheets.add('Pendientes');
const purple='#7257C8', dark='#35464E', light='#F4F1FC', green='#DFF3E9', red='#FCE7E7', amber='#FFF1CC';

summary.showGridLines=false; done.showGridLines=false; todo.showGridLines=false;
summary.getRange('A1:H2').merge(); summary.getRange('A1').values=[['Inventario de migración Laravel → Vue']];
summary.getRange('A3:H3').merge(); summary.getRange('A3').values=[['Estado al 23 de agosto de 2026 · Fuente: modules.ts y controladores del proyecto Laravel']];
summary.getRange('A5:B5').merge(); summary.getRange('D5:E5').merge(); summary.getRange('G5:H5').merge();
summary.getRange('A5').values=[['Opciones migradas']]; summary.getRange('D5').values=[['Bloques pendientes']]; summary.getRange('G5').values=[['Avance referencial']];
summary.getRange('A6:B7').merge(); summary.getRange('D6:E7').merge(); summary.getRange('G6:H7').merge();
summary.getRange('A6').formulas=[["=COUNTA('Migrados'!$A$5:$A$100)"]];
summary.getRange('D6').formulas=[["=COUNTA('Pendientes'!$A$5:$A$100)"]];
summary.getRange('G6').formulas=[["=A6/(A6+D6)"]]; summary.getRange('G6').format.numberFormat='0%';
summary.getRange('A10:D10').values=[['Macro módulo','Migrados','Pendientes','Observación']];
const modules=['Trámite V2','Institucional (AURA)','Comercial (EVAN)','Administración (MIA)','Operaciones (DANA)','Legal (MAT)','HelpDesk'];
summary.getRange(`A11:A${10+modules.length}`).values=modules.map(x=>[x]);
for(let row=11;row<=17;row++){
  summary.getRange(`B${row}`).formulas=[[`=COUNTIF('Migrados'!$A$5:$A$100,A${row})`]];
  summary.getRange(`C${row}`).formulas=[[`=COUNTIF('Pendientes'!$A$5:$A$100,A${row})`]];
  summary.getRange(`D${row}`).formulas=[[`=IF(C${row}=0,"Migración cubierta","Requiere planificación")`]];
}
summary.getRange('A23:H24').merge(); summary.getRange('A23').values=[['Nota: “Migrado” significa que la pantalla y navegación existen en Vue. La disponibilidad productiva depende de que los endpoints /lecturita correspondientes estén implementados y validados en el backend. Los pendientes se presentan por bloque funcional, por lo que no son directamente equivalentes al número de pantallas migradas.']];

done.getRange('A1:H2').merge(); done.getRange('A1').values=[['Detalle de opciones migradas']];
done.getRange('A3:H3').merge(); done.getRange('A3').values=[['Pantallas presentes en la configuración y el router del frontend Vue']];
done.getRange('A4:H4').values=[['Macro módulo','Sección','Opción / pantalla','Ruta Vue','Clave de página','Controlador Laravel de referencia','Estado','Observación backend']];
done.getRange(`A5:H${4+migrated.length}`).values=migrated.map(r=>[...r,'Frontend implementado','API /lecturita preparada o por validar']);
done.tables.add(`A4:H${4+migrated.length}`,true,'MigradosTable').style='TableStyleMedium4';

todo.getRange('A1:G2').merge(); todo.getRange('A1').values=[['Módulos y bloques pendientes']];
todo.getRange('A3:G3').merge(); todo.getRange('A3').values=[['Backlog preliminar para levantamiento funcional, diseño Vue e integración API']];
todo.getRange('A4:G4').values=[['Macro módulo','Sección / bloque','Alcance funcional','Controlador Laravel de referencia','Prioridad sugerida','Siguiente paso','Estado']];
todo.getRange(`A5:G${4+pending.length}`).values=pending.map(r=>[...r,'Pendiente']);
todo.tables.add(`A4:G${4+pending.length}`,true,'PendientesTable').style='TableStyleMedium4';
todo.getRange(`E5:E${4+pending.length}`).dataValidation={rule:{type:'list',values:['Alta','Media','Baja','Por definir']}};
todo.getRange(`G5:G${4+pending.length}`).dataValidation={rule:{type:'list',values:['Pendiente','En análisis','En desarrollo','Completado']}};
todo.getRange(`E5:E${4+pending.length}`).conditionalFormats.add('containsText',{text:'Alta',format:{fill:'#FCE7E7',font:{color:'#A13F43',bold:true}}});
todo.getRange(`E5:E${4+pending.length}`).conditionalFormats.add('containsText',{text:'Media',format:{fill:'#FFF1CC',font:{color:'#8A6412'}}});
todo.getRange(`G5:G${4+pending.length}`).conditionalFormats.add('containsText',{text:'Completado',format:{fill:'#DFF3E9',font:{color:'#286B50',bold:true}}});

for(const [sheet,lastCol,widths] of [[summary,'H',[22,12,12,24,12,12,18,18]],[done,'H',[22,25,28,42,30,40,24,35]],[todo,'G',[22,27,46,40,17,35,18]]]){
  sheet.getRange(`A1:${lastCol}2`).format={fill:purple,font:{bold:true,color:'#FFFFFF',size:18},verticalAlignment:'center'};
  sheet.getRange(`A3:${lastCol}3`).format={fill:dark,font:{color:'#FFFFFF',italic:true,size:10}};
  sheet.getRange(`A1:${lastCol}${sheet===summary?24:(sheet===done?4+migrated.length:4+pending.length)}`).format.wrapText=true;
  widths.forEach((w,i)=>sheet.getRangeByIndexes(0,i,1,1).format.columnWidth=w);
  sheet.freezePanes.freezeRows(sheet===summary?10:4);
}
summary.getRange('A5:H5').format={fill:light,font:{bold:true,color:purple},horizontalAlignment:'center'};
summary.getRange('A6:H7').format={font:{bold:true,color:dark,size:20},horizontalAlignment:'center',verticalAlignment:'center',borders:{preset:'outside',style:'thin',color:'#D8D2EA'}};
summary.getRange('A10:D10').format={fill:purple,font:{bold:true,color:'#FFFFFF'}};
summary.getRange('A11:D17').format.borders={preset:'inside',style:'thin',color:'#E5E8EA'};
summary.getRange('B11:C17').format.numberFormat='#,##0';
summary.getRange('A23:H24').format={fill:amber,font:{color:'#715618',italic:true},wrapText:true,verticalAlignment:'center'};
done.getRange(`G5:G${4+migrated.length}`).format={fill:green,font:{color:'#286B50',bold:true}};

const outputDir='outputs/inventario_migracion_20260823';
await fs.mkdir(outputDir,{recursive:true});
const preview1=await wb.render({sheetName:'Resumen',range:'A1:H24',scale:1.3,format:'png'});
await fs.writeFile(`${outputDir}/resumen.png`,new Uint8Array(await preview1.arrayBuffer()));
const preview2=await wb.render({sheetName:'Migrados',range:'A1:H18',scale:1,format:'png'});
await fs.writeFile(`${outputDir}/migrados.png`,new Uint8Array(await preview2.arrayBuffer()));
const preview3=await wb.render({sheetName:'Pendientes',range:'A1:G18',scale:1,format:'png'});
await fs.writeFile(`${outputDir}/pendientes.png`,new Uint8Array(await preview3.arrayBuffer()));
console.log((await wb.inspect({kind:'table',range:'Resumen!A1:H24',include:'values,formulas',tableMaxRows:24,tableMaxCols:8})).ndjson);
console.log((await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A',options:{useRegex:true,maxResults:100},summary:'formula errors'})).ndjson);
const output=await SpreadsheetFile.exportXlsx(wb); await output.save(`${outputDir}/Inventario_migracion_modulos.xlsx`);
