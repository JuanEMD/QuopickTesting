<script setup>
const props = defineProps(["value"]);
</script>

<template>
    <button class="hour-item">
      {{ value }}
    </button>
</template>

<style scoped>
.hour-item {
  @apply w-full bg-teal-600 hover:bg-teal-700 text-white h-9 mb-1 rounded-lg;
}

</style>
