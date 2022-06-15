<template>
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="100%"
    height="100%"
    :class="iconClass"
  >
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 9H15" stroke-linecap="round" />
    <path d="M9 13H15" stroke-linecap="round" />
    <path d="M9 17H13" stroke-linecap="round" />
  </svg>
</template>

<script setup>
const props = defineProps({
  iconClass: {
    type: String,
    default: "#6b7280",
  },
});
</script>

<style scoped>
.section-default path,
.section-default rect {
  stroke: #6b7280;
}
.section-selected path,
.section-selected rect {
  stroke: white;
}
.section-done path,
.section-done rect {
  stroke: #0d9488;
}
</style>
