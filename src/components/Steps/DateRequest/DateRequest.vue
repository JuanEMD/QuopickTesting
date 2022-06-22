<template>
  <div class="container">
    <h1>Seleccione una fecha de reunión</h1>
    <div class="datePicker-wrapper">
      <div class="datePicker">
        <Datepicker
          v-model="date"
          inline
          autoApply
          :minDate="new Date()"
          :yearRange="[2022, 2030]"
          :enableTimePicker="false"
          :disabledWeekDays="[6, 0]"
          :disabledDates="disabledDates"
          @update:modelValue="saveSelectedDate"
          hideOffsetDates
          modeHeight="288"
        />
        <HourPicker :meetingHour="meetingHour"/>
        <!-- <Datepicker
          v-model="time"
          inline
          autoApply
          timePicker
          :startTime="startTime"
          :is24="true"
          minutesIncrement="30"
          noMinutesOverlay
          noHoursOverlay
        /> -->
        <!-- @update:modelValue="checkTime" -->
      </div>
    </div>
  </div>
  <h1>{{ formatedDate }}</h1>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import HourPicker from "./HourPicker.vue";

//vars
const date = ref("");
const time = ref("");
// const time = ref({ hours: 0, minutes: 0, seconds: 0 });
// const startTime = ref({ hours: 0, minutes: 0, seconds: 0 });

const selectedDays = ref(["Tue Jun 24 2022", "Tue Jun 23 2022"]);
const meetingHour = ref([
  "8:30 - 9:30",
  "9:30 - 10:30",
  "10:30 - 11:30",
  "13:30 - 14:30",
  "14:30 - 15:30",
  "14:30 - 15:30",
]);

//computed properties
const formatedDate = computed(() => {
  if (date.value == "") {
    if (localStorage.getItem("meetingDate")) {
      return (date.value = JSON.parse(localStorage.getItem("meetingDate")));
    }
    date.value = new Date();
  }
  return date.value.toDateString();
});

const disabledDates = computed(() => {
  return selectedDays.value;
});

//emits
// const emit = defineEmits(["validateDateData"]);

//watchers
// watch(formatedDate, (newformatedDate) => {
//   emit("validateDateData");
// });

//methods
const saveSelectedDate = () => {
  localStorage.setItem("meetingDate", JSON.stringify(formatedDate.value));
};

// const saveSelectedDay = () => {
//   let selectedDay = ref(formatedDate.value);
//   selectedDays.value.push(selectedDay.value);
//   console.log(selectedDays.value);
// };
</script>

<style scoped>
.container {
  @apply my-12 mx-auto;
}
.datePicker-wrapper {
  @apply mt-4 flex justify-center;
}

.datePicker {
  @apply flex flex-wrap justify-center h-full;
}
</style>
