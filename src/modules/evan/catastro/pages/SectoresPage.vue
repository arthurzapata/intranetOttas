<script setup lang="ts">
import CatalogCrudPage from '@/components/CatalogCrudPage.vue'
import { actualizarSector, crearSector, eliminarSector, listarSectores } from '../services/sectores'

const service = { list: listarSectores, create: crearSector, update: actualizarSector, remove: eliminarSector }
</script>

<template>
  <CatalogCrudPage
    title="Sectores"
    singular="sector"
    description="Organización de sectores comerciales por distrito."
    icon="▦"
    :service="service"
    show-sector-metrics
  />
</template>
