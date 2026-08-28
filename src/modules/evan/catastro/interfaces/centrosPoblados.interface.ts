import type { CatalogDistrict, CatalogItem } from '@/interfaces/catalog'

export interface CentroPoblado extends CatalogItem {
  distrito: CatalogDistrict
}
