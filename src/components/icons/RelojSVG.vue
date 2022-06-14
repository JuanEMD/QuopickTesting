<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    :class="{selected}"
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
  color: String,
  selected: {
    type: Boolean,
    default: false,
  },
  defaultClass: {
    type: Boolean,
    default: false,
  },
  doneClass: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.defaultClass path,
.default circle {
  stroke: #6b7280;
}

.selected path,
.selected circle {
  stroke: white;
}

.doneClass path,
.doneClass circle {
  stroke: #0d9488;
}
</style>
