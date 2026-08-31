<script setup lang="ts">
withDefaults(defineProps<{
  active?: boolean
  mode?: 'bar' | 'overlay' | 'inline'
  label?: string
}>(), {
  active: true,
  mode: 'inline',
  label: 'Cargando…',
})
</script>

<template>
  <Transition name="loading-fade">
    <div
      v-if="active"
      :class="['loading-indicator', `loading-indicator--${mode}`]"
      role="status"
      aria-live="polite"
      :aria-label="label"
    >
      <span v-if="mode === 'bar'" class="loading-indicator__bar" aria-hidden="true"></span>
      <template v-else>
        <span class="loading-indicator__spinner" aria-hidden="true"></span>
        <span>{{ label }}</span>
      </template>
    </div>
  </Transition>
</template>

<style scoped>
.loading-indicator--bar{position:fixed;z-index:20000;inset:0 0 auto;height:3px;overflow:hidden;pointer-events:none;background:#25a9d633}.loading-indicator__bar{position:absolute;inset:0 auto 0 0;width:42%;background:linear-gradient(90deg,#0788b5,#37c8ee);box-shadow:0 0 10px #25a9d6;animation:loading-bar 1s ease-in-out infinite}.loading-indicator--overlay{position:fixed;z-index:19999;inset:0;display:flex;align-items:center;justify-content:center;gap:12px;color:#53666e;background:#f3f8fa}.loading-indicator--inline{min-height:110px;display:flex;align-items:center;justify-content:center;gap:10px;color:#687980}.loading-indicator__spinner{width:23px;height:23px;border:2px solid #0788b533;border-top-color:#0788b5;border-radius:50%;animation:loading-spin .7s linear infinite}.loading-fade-enter-active,.loading-fade-leave-active{transition:opacity .15s}.loading-fade-enter-from,.loading-fade-leave-to{opacity:0}@keyframes loading-spin{to{transform:rotate(360deg)}}@keyframes loading-bar{0%{left:-45%}55%{left:55%;width:55%}100%{left:105%;width:20%}}@media(prefers-reduced-motion:reduce){.loading-indicator__bar,.loading-indicator__spinner{animation-duration:1.8s}}
</style>
