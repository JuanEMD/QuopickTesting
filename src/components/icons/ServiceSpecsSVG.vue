<template>
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="100%"
    height="100%"
    :class="{ selected }"
  >
    <rect x="5" y="4" width="14" height="17" rx="2" stroke="#6b7280" />
    <path d="M9 9H15" stroke="#6b7280" stroke-linecap="round" />
    <path d="M9 13H15" stroke="#6b7280" stroke-linecap="round" />
    <path d="M9 17H13" stroke="#6b7280" stroke-linecap="round" />
  </svg>
</template>

<script setup>
const props = defineProps({
  selected: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
path, rect {
  /* stroke: #6b7280; */
  stroke: #0D9488;
}

.selected path,
.selected rect {
  stroke: white;
}
</style>
