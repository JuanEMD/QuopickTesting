<script setup>
import { ref, inject } from "vue";
import HourItem from "./HourItem.vue";

// const props = defineProps(["meetingHour"]);

const meetingHours = ref([
  "8:30 - 9:30",
  "9:30 - 10:30",
  "10:30 - 11:30",
  "13:30 - 14:30",
  "14:30 - 15:30",
  "15:30 - 16:30",
]);

const selectedHour = ref("");

if (localStorage.getItem("meetingHour")) {
  selectedHour.value = JSON.parse(localStorage.getItem("meetingHour"));
}

const selectHour = (index, hour) => {
  selectedHour.value = hour;
  localStorage.setItem("meetingHour", JSON.stringify(selectedHour.value));
};

const selectItem = (index) => {
  
}


</script>

<template>
  <div class="time-container">
    <div class="hour-wrapper">
      <HourItem
        v-for="(hour, index) in meetingHours"
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
