<script setup>
import { ref } from "vue";
import HourItem from "./HourItem.vue";

const props = defineProps(['meetingHour'])


const selectedHour = ref("");

if (localStorage.getItem("meetingHour")) {
  selectedHour.value = JSON.parse(localStorage.getItem("meetingHour"));
}

const selectHour = (index, hour) => {
  selectedHour.value = hour;
  localStorage.setItem("meetingHour", JSON.stringify(selectedHour.value));
};
</script>

<template>
  <div class="time-container">
    <div class="hour-wrapper">
      <HourItem
        v-for="(hour, index) in meetingHour"
        :key="index"
        :value="hour"
        @click="selectHour(index, hour)"
      />
    </div>
  </div>
</template>

<style scoped>
.time-container {
  @apply w-64 h-72 border-2 p-1;
}

.hour-wrapper {
  @apply h-full overflow-auto flex flex-wrap content-between;
}
</style>
