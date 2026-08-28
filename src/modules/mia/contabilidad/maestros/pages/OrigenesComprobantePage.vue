<script setup lang="ts">
import AccountingCatalogPage from '../components/AccountingCatalogPage.vue'
import { cambiarEstadoOrigenComprobante, guardarOrigenComprobante, listarOrigenesComprobante } from '../services/origenesComprobante'
</script>

<template><AccountingCatalogPage title="Orígenes de comprobante" singular="Origen de comprobante" description="Clasifica el origen de las operaciones registradas en los comprobantes contables." icon="OC" :description-min="3" :list="listarOrigenesComprobante" :save="guardarOrigenComprobante" :toggle="cambiarEstadoOrigenComprobante"/></template>
