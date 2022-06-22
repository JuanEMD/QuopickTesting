<script setup>
/* Components */
import ServiceProps from "../components/Steps/ServiceProps.vue";
import Services from "../components/Steps/Services.vue";
import DateRequest from "../components/Steps/DateRequest/DateRequest.vue";
import ClientInfo from "../components/Steps/ClientInfo.vue";
import Sections from "../components/Sections.vue";

/* Composition API Libs */
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

/* Libs variables */
const { t } = useI18n();
// const meetingDate = ref("")

/* Data Binding */
const currentStep = ref(0);
const steps = ref([
  {
    component: ClientInfo,
  },
  {
    component: Services,
  },
  {
    component: ServiceProps,
  },
  {
    component: DateRequest,
  },
]);

/*Computed Properties*/
const prevStepDisable = computed(() => (currentStep.value == 0 ? true : false));

const nextButtonAction = computed(() =>
  currentStep.value + 1 == steps.value.length ? submitAll : nextStep
);

const nextButtonText = computed(() =>
  currentStep.value + 1 == steps.value.length ? t("finish") : t("next")
);

/* Methods */
const nextStep = () => ++currentStep.value;

const prevStep = () => --currentStep.value;

const submitAll = async () => {
  await validateDateData();

  if (validateDateData()) {
    clearLocalStorage();
    currentStep.value = 0;
  }
};

const validateDateData = () => {
  if (
    localStorage.getItem("meetingDate") &&
    localStorage.getItem("meetingHour")
  ) {
    console.log("Fecha y hora validao");
    return true;
  }
  console.log("No existe una fecha u hora en localstorage");
  return false;
};

const clearLocalStorage = () => {
  localStorage.removeItem("meetingDate");
  localStorage.removeItem("meetingHour");
};

</script>

<template>
  <div class="p-5 pb-12">
    <Sections :current-step="currentStep" />
    <component
      :is="steps[currentStep].component"
      @saveDateData="validateDateData"
    />
    <div class="flex justify-center items-center">
      <div class="flex p-5 mt-4 justify-between w-full">
        <button
          :disabled="prevStepDisable"
          @click="prevStep"
          class="prevButton"
        >
          {{ t("prev") }}
        </button>
        <div class="flex-auto flex flex-row-reverse">
          <button @click="nextButtonAction" class="nextButton">
            {{ nextButtonText }}
          </button>
          <!-- <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
      hover:bg-teal-200  
      bg-teal-100 
      text-teal-700 
      border duration-200 ease-in-out 
      border-teal-600 transition">Skip</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prevButton {
  @apply text-base focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200 bg-gray-100 text-gray-800 border border-gray-400 duration-200 ease-in-out;
}

.nextButton {
  @apply text-base ml-2 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-700 bg-teal-600 text-white border border-teal-600 duration-200 ease-in-out;
}
</style>
