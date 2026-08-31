import { readonly, ref } from 'vue'

const active = ref(false)
let pendingNavigations = 0
let showTimer: ReturnType<typeof setTimeout> | undefined
let hideTimer: ReturnType<typeof setTimeout> | undefined
let shownAt = 0

const SHOW_DELAY = 100
const MIN_VISIBLE_TIME = 250

export const navigationLoading = readonly(active)

export function startNavigationLoading() {
  pendingNavigations += 1
  clearTimeout(hideTimer)

  if (active.value || showTimer) return

  showTimer = setTimeout(() => {
    showTimer = undefined
    shownAt = Date.now()
    active.value = true
  }, SHOW_DELAY)
}

export function finishNavigationLoading() {
  pendingNavigations = Math.max(0, pendingNavigations - 1)
  if (pendingNavigations > 0) return

  clearTimeout(showTimer)
  showTimer = undefined

  if (!active.value) return

  const remaining = Math.max(0, MIN_VISIBLE_TIME - (Date.now() - shownAt))
  hideTimer = setTimeout(() => {
    active.value = false
    hideTimer = undefined
  }, remaining)
}
