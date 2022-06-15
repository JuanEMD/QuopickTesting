<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    :class="iconClass"
  >
    <path
      d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"
    />
    <path
      d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"
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
.section-default path {
  fill: #6b7280;
}
.section-selected path {
  fill: white;
}
.section-done path {
  fill: #0d9488;
}
</style>
