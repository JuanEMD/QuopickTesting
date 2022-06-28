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
        <HourPicker />
      </div>
    </div>
  </div>
  {{formatedDate}}
</template>

<script setup>
import { ref, computed, watch, provide } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import HourPicker from "./HourPicker.vue";

//vars
const date = ref("");
const time = ref("");

const selectedDays = ref(["Tue Jun 24 2022"]);

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

//methods
const saveSelectedDate = () => {
  localStorage.setItem("meetingDate", JSON.stringify(formatedDate.value));
};
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
