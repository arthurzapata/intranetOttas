<script setup lang="ts">
import CatalogCrudPage from '@/components/CatalogCrudPage.vue'
import { actualizarCentroPoblado, crearCentroPoblado, listarCentrosPoblados } from '../services/centrosPoblados'

const service = {
  list: listarCentrosPoblados,
  create: crearCentroPoblado,
  update: actualizarCentroPoblado,
}
</script>

<template>
  <CatalogCrudPage
    title="Centros poblados"
    singular="centro poblado"
    description="Administración de centros poblados por distrito."
    icon="⌾"
    :service="service"
  />
</template>
