<script setup lang="ts">
import CatalogCrudPage from '@/components/CatalogCrudPage.vue'
import { actualizarUrbanizacion, crearUrbanizacion, eliminarUrbanizacion, listarUrbanizaciones } from '../services/urbanizaciones'

const service = { list: listarUrbanizaciones, create: crearUrbanizacion, update: actualizarUrbanizacion, remove: eliminarUrbanizacion }
</script>

<template>
  <CatalogCrudPage
    title="Urbanizaciones"
    singular="urbanización"
    gender="f"
    description="Administración de urbanizaciones por distrito."
    icon="⌂"
    :service="service"
    :uppercase="false"
  />
</template>
