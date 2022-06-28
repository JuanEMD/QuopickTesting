<script setup>
import { computed } from "vue";

const selectedService = computed(() => {
  if (localStorage.getItem("selectedService")) {
    return JSON.parse(localStorage.getItem("selectedService"));
  }
});
</script>

<template>
  <div class="attrs-container">
    <h1>{{ selectedService }}</h1>
  </div>
</template>

<style scoped>
.attrs-container{
    @apply mt-8
}
</style>
