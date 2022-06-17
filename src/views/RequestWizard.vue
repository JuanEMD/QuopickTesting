<script setup>
/* Components */
import ServiceProps from "../components/Steps/ServiceProps.vue";
import Services from "../components/Steps/Services.vue";
import Questions from "../components/Steps/Questions.vue";
import DateRequest from "../components/Steps/DateRequest.vue";
import ClientInfo from "../components/Steps/ClientInfo.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import Sections from "../components/Sections.vue";

/* Composition API Libs */
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

/* Libs variables */
const { t } = useI18n();

/* Data Binding */
const currentStep = ref(0);
const steps = ref([
  {
    component: ClientInfo,
  },
  {
    component: Services,
  },
  // {
  //   component: ServiceProps,
  // },
  {
    component: Questions,
  },
  {
    component: DateRequest,
  },
]);

/* Methods */
const nextStep = () => {
  ++currentStep.value;
};

const prevStep = () => {
  --currentStep.value;
};

/*Computed Properties*/
const prevStepDisable = computed(() => {
  return currentStep.value == 0 ? true : false;
});

const nextStepDisable = computed(() => {
  return currentStep.value + 1 == steps.value.length ? true : false;
});
</script>

<template>
  <HeaderComponent />
  <div class="p-5 pb-12">
    <Sections :current-step="currentStep" />
    <component :is="steps[currentStep].component" />
    <div class="flex justify-center items-center">
      <div class="flex p-5 mt-4 justify-between w-full">
        <button
          :disabled="prevStepDisable"
          @click="prevStep"
          class="text-base focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200 bg-gray-100 text-gray-800 border border-gray-400 duration-200 ease-in-out"
        >
          {{ t("prev") }}
        </button>
        <div class="flex-auto flex flex-row-reverse">
          <button
            :disabled="nextStepDisable"
            @click="nextStep"
            class="text-base ml-2 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-700 bg-teal-600 text-white border border-teal-600 duration-200 ease-in-out"
          >
            {{ t("next") }}
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
  <FooterComponent />
</template>
