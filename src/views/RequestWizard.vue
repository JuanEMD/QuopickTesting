<script setup>
/* Components */
import Sections from "../components/Sections.vue";
import ClientInfo from "../components/Steps/ClientInfo.vue";
import Services from "../components/Steps/Services.vue";
import ServiceAttrs from "../components/Steps/ServiceAttrs.vue";
import QuotationPreview from "../components/Steps/QuotationPreview.vue";
import DateRequest from "../components/Steps/DateRequest/DateRequest.vue";
import renderEmailQuotationTemplate from "../composables/Templates/renderEmailQuotationTemplate.js";
import sendQuotationEmail from "../composables/SMTP/sendQuotationEmail.js";
import getServicesObject from "../composables/getServicesObject.js"

/* Composition API Libs */
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { tr } from "date-fns/locale";
import { Result } from "postcss";

/* Libs variables */
const { t } = useI18n();

/* Data Binding */
const currentStep = ref(0);
const userFormStatus = ref({});
const steps = ref([
  {
    component: ClientInfo,
  },
  {
    component: Services,
  },
  {
    component: ServiceAttrs,
  },
  {
    component: QuotationPreview,
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

const saveCurrentStep = computed(() => {
  if (currentStep.value == 0) {
    if (localStorage.getItem("currentStep")) {
      return (currentStep.value = JSON.parse(
        localStorage.getItem("currentStep")
      ));
    }
  }
  localStorage.setItem("currentStep", JSON.stringify(currentStep.value));
  return currentStep.value;
});

/* Methods */
const nextStep = async () => {
  if (currentStep.value == 0) {
    if (await !validateUserData()) {
      return console.log("formulario de usuario con errores");
    }
  }
  if (currentStep.value == 1) {
    if (await !validateServiceData()) {
      return console.log("No hay un servicio seleccionado");
    }
  }
  ++currentStep.value;
};

const prevStep = () => {
  if (currentStep.value == 1) {
    localStorage.removeItem("currentStep");
    currentStep.value == 0;
  }
  --currentStep.value;
};

const submitAll = async () => {
  if (await validateDateData()) {
    // Pendiente formatear fecha
    sendEmail();
    // clearLocalStorage();
    currentStep.value = 0;
  }
};

const sendEmail = async () => {
  let LocalStorageUserData = await JSON.parse(localStorage.getItem("userData"));
  let selectedService = await JSON.parse(localStorage.getItem("selectedService"));
  let serviceAttrs = await JSON.parse(localStorage.getItem("serviceAttrs"));
  let date = {
    meetingDate: await JSON.parse(localStorage.getItem("meetingDate")),
    meetingHour: await JSON.parse(localStorage.getItem("meetingHour"))
  }
  let formatedServices = await getServicesObject(serviceAttrs);

  let renderResponse = await renderEmailQuotationTemplate(LocalStorageUserData, selectedService, formatedServices, date);
  sendQuotationEmail(LocalStorageUserData.email, renderResponse);
};


const receiveUserData = (value) => {
  userFormStatus.value = value;
};

const validateUserData = () => {
  if (userFormStatus.value) {
    return true;
  }
};

const validateServiceData = () => {
  if (currentStep.value == 1) {
    if (
      localStorage.getItem("selectedService") &&
      JSON.parse(localStorage.getItem("selectedService")) != ""
    ) {
      return true;
    }
    return false;
  }
  return true;
};

const validateDateData = () => {
  if (
    localStorage.getItem("meetingDate") &&
    localStorage.getItem("meetingHour")
  ) {
    return true;
  }
  return false;
};

const clearLocalStorage = () => {
  localStorage.removeItem("userData");
  localStorage.removeItem("currentStep");
  localStorage.removeItem("selectedService");
  localStorage.removeItem("meetingDate");
  localStorage.removeItem("meetingHour");
};
</script>

<template>
  <div class="p-5 pb-12">
    <Sections :current-step="saveCurrentStep" />
    <Suspense>
      <component
        :is="steps[currentStep].component"
        @saveDateData="validateDateData"
        @sendUserData="receiveUserData"
      />
      <template #fallback><div class="mt-8 p-4">
        Loading...
      </div></template></Suspense
    >
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
  <!-- <div v-html="test"></div> -->
  </div>
</template>

<style scoped>
.prevButton {
  @apply text-base focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-100 bg-white text-gray-800 border border-gray-400 duration-200 ease-in-out;
}

.nextButton {
  @apply text-base ml-2 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-700 bg-teal-600 text-white border border-teal-600 duration-200 ease-in-out;
}
</style>
