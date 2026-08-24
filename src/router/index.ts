import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import DashboardView from '@/views/DashboardView.vue'
import ModuleView from '@/views/ModuleView.vue'
import SectionView from '@/views/SectionView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { appModules } from '@/config/modules'

const optionPages = {
  'aura-comites-comites': () => import('@/modules/aura/comites/pages/ComitesPage.vue'),
  'aura-comites-reuniones': () => import('@/modules/aura/comites/pages/ReunionesPage.vue'),
  'aura-comites-acuerdos': () => import('@/modules/aura/comites/pages/AcuerdosPage.vue'),
  'aura-comites-tipos': () => import('@/modules/aura/comites/pages/TiposComitePage.vue'),
  'aura-bgc-estructura': () => import('@/modules/aura/bgc/pages/EstructuraBgcPage.vue'),
  'aura-bgc-procesos': () => import('@/modules/aura/bgc/pages/ProcesosEvidenciasPage.vue'),
  'aura-bgc-control-avance': () => import('@/modules/aura/bgc/pages/ControlAvancePage.vue'),
  'aura-directorio-acuerdos': () => import('@/modules/aura/directorio/pages/AcuerdosPage.vue'),
  'aura-directorio-disposiciones': () => import('@/modules/aura/directorio/pages/DisposicionesPage.vue'),
  'aura-directorio-pedidos': () => import('@/modules/aura/directorio/pages/PedidosPage.vue'),
  'aura-directorio-sesiones': () => import('@/modules/aura/directorio/pages/SesionesPage.vue'),
  'etrami-v2-reporte-documentos': () => import('@/modules/etrami/reportes/pages/ReporteDocumentosPage.vue'),
  'etrami-v2-firma-digital': () => import('@/modules/etrami/firma/pages/FirmaDigitalPage.vue'),
  'etrami-v2-externo-remitentes': () => import('@/modules/etrami/externo/pages/RemitentesExternosPage.vue'),
  'etrami-v2-externo-validar': () => import('@/modules/etrami/externo/pages/ValidarExternosPage.vue'),
  'etrami-v2-config-tipos-documento': () => import('@/modules/etrami/configuracion/pages/TiposDocumentoPage.vue'),
  'etrami-v2-config-correlativos': () => import('@/modules/etrami/configuracion/pages/CorrelativosPage.vue'),
  'etrami-v2-flujo-seguimiento': () => import('@/modules/etrami/flujo/pages/SeguimientoDocumentarioPage.vue'),
  'etrami-v2-registrar-documento': () => import('@/modules/etrami/documentos/pages/RegistrarDocumentoPage.vue'),
  'etrami-v2-anulados-rechazados': () => import('@/modules/etrami/documentos/pages/AnuladosRechazadosPage.vue'),
  'etrami-v2-por-recepcionar': () => import('@/modules/etrami/bandejas/pages/PorRecepcionarPage.vue'),
  'etrami-v2-en-bandeja': () => import('@/modules/etrami/bandejas/pages/EnBandejaPage.vue'),
  'etrami-v2-pendientes': () => import('@/modules/etrami/bandejas/pages/PendientesPage.vue'),
  'etrami-v2-propios': () => import('@/modules/etrami/bandejas/pages/PropiosPage.vue'),
  'etrami-v2-archivados': () => import('@/modules/etrami/bandejas/pages/ArchivadosPage.vue'),
  'evan-catastro-conexiones': () => import('@/modules/evan/catastro/pages/ConexionesPage.vue'),
  'evan-catastro-sectores': () => import('@/modules/evan/catastro/pages/SectoresPage.vue'),
  'evan-catastro-urbanizaciones': () => import('@/modules/evan/catastro/pages/UrbanizacionesPage.vue'),
  'evan-catastro-calles': () => import('@/modules/evan/catastro/pages/CallesPage.vue'),
  'evan-catastro-centros-poblados': () => import('@/modules/evan/catastro/pages/CentrosPobladosPage.vue'),
  'evan-medicion-medidores': () => import('@/modules/evan/medicion/pages/MedidoresPage.vue'),
  'evan-atencion-expedientes': () => import('@/modules/evan/comercializacion/pages/ExpedientesPage.vue'),
}

const modules = appModules.map((module) => ({
  path: module.slug,
  name: `module-${module.slug}`,
  component: ModuleView,
  props: { moduleSlug: module.slug },
  children: module.sections.map((section) => ({
    path: section.slug,
    name: `${module.slug}-${section.slug}`,
    component: SectionView,
    props: { moduleSlug: module.slug, sectionSlug: section.slug },
    children: section.options?.map((option) => ({
      path: option.slug,
      name: `${module.slug}-${section.slug}-${option.slug}`,
      component: optionPages[option.page as keyof typeof optionPages],
    })),
  })),
}))

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path:'/', component:DashboardLayout, children:[
      { path:'', redirect:'/inicio' },
      { path:'inicio', name:'dashboard', component:DashboardView },
      { path:'modulos', children:modules },
    ]},
    { path:'/:pathMatch(.*)*', component:NotFoundView },
  ],
})
