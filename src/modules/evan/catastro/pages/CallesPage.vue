<script setup lang="ts">
import CatalogCrudPage from '@/components/CatalogCrudPage.vue'

import { actualizarCalle, crearCalle, eliminarCalle, listarCalles } from '../services/calles'

const service = { list: listarCalles, create: crearCalle, update: actualizarCalle, remove: eliminarCalle }
</script>

<template>
  <CatalogCrudPage
    title="Calles"
    singular="calle"
    gender="f"
    description="Administración del catálogo de calles por distrito."
    icon="↔"
    :service="service"
  />
</template>