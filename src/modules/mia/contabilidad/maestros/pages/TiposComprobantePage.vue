<script setup lang="ts">
import AccountingCatalogPage from '../components/AccountingCatalogPage.vue'
import { cambiarEstadoTipoComprobante, guardarTipoComprobante, listarTiposComprobante } from '../services/tiposComprobante'
</script>

<template><AccountingCatalogPage title="Tipos de comprobante" singular="Tipo de comprobante" description="Administra los tipos de comprobante utilizados en las operaciones contables." icon="TC" :description-min="3" :list="listarTiposComprobante" :save="guardarTipoComprobante" :toggle="cambiarEstadoTipoComprobante"/></template>
