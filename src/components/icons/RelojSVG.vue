<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    :class="iconClass"
  >
    <circle cx="12" cy="12" r="8.6" stroke="#0d9488" />
    <path
      d="M16.5 12H12.25C12.1119 12 12 11.8881 12 11.75V8.5"
      stroke="#0d9488"
      stroke-width="1.2"
      stroke-linecap="round"
    />
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

.section-default path, .section-default circle {
  stroke: #6b7280;
}
.section-selected path, .section-selected circle {
  stroke: white;
}
.section-done path, .section-done circle {
  stroke: #0d9488;
}
</style>
