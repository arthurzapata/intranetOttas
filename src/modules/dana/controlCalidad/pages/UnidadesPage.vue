<script setup lang="ts">
import SimpleCatalogCrudPage from '@/components/SimpleCatalogCrudPage.vue'
import { actualizarUnidad, crearUnidad, eliminarUnidad, listarUnidades } from '../services/unidades'
const service={list:listarUnidades,create:crearUnidad,update:actualizarUnidad,remove:eliminarUnidad}
</script>
<template><SimpleCatalogCrudPage title="Unidades de control" singular="Unidad" description="Catálogo de unidades utilizadas para expresar parámetros y resultados de calidad." icon="UC" module-label="DANA" section-label="Control de Calidad" name-placeholder="Ej.: mg/L" :service="service"/></template>
