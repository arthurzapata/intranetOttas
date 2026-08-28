<script setup lang="ts">
import AccountingCatalogPage from '../components/AccountingCatalogPage.vue'
import { cambiarEstadoAgrupadorGasto, guardarAgrupadorGasto, listarAgrupadoresGasto } from '../services/agrupadoresGasto'
</script>
<template><AccountingCatalogPage title="Agrupadores de gasto" singular="Agrupador de gasto" description="Clasifica los gastos en categorías agrupadas para facilitar su gestión y control." icon="AG" :description-min="3" :list="listarAgrupadoresGasto" :save="guardarAgrupadorGasto" :toggle="cambiarEstadoAgrupadorGasto"/></template>
