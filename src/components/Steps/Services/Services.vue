<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import PricingTable from "./PricingTable.vue";

const { t } = useI18n();
const selectedService = ref("");
const services = ref([
  { text: "Web App", value: "Web App" },
  { text: "Web Page", value: "Web Page" },
]);

// hidden form data

const Budget = ref([
  { text: "100,000", value: "100,000" },
  { text: "200,000", value: "200,000" },
  { text: "300,000", value: "300,000" },
]);

const Hours = ref([
  { text: "30", value: "30" },
  { text: "40", value: "40" },
  { text: "50", value: "50" },
  { text: "60", value: "60" },
]);

const Pay = ref([
  { text: "Efectivo", value: "Efectivo" },
  { text: "Cheque", value: "Cheque" },
  { text: "Paypal", value: "Paypal" },
  { text: "Tarjeta", value: "Tarjeta" },
]);

//computed
const service = computed(() => {
  if (selectedService.value == "") {
    if (localStorage.getItem("selectedService")) {
      return (selectedService.value = JSON.parse(
        localStorage.getItem("selectedService")
      ));
    }
  }
  return selectedService.value;
});

//methods
const saveSelectedService = () => {
  localStorage.setItem("selectedService", JSON.stringify(service.value));
  // console.log(selectedService.value);
  // console.log(service.value);
};
</script>

<template>
  <div class="mt-8 p-4">
    <div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 my-3">
      {{ t("selectOneOrFewServices") }}
    </div>

    <div class="flex">
      <select v-model="selectedService" class="select-input-form" @click="saveSelectedService()">
        {{
            service.value
        }}
        <option v-for="option in services" :value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
  </div>
  <div class="my-10">
      <PricingTable />
  </div>
  
  <!-- input hidden  -->
  <div class="mt-8 p-4">
    <!-- question 1 -->
    <div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 my-3">
      <h3>Presupuesto</h3>
    </div>

    <div class="flex">
      <select v-model="selectedPresupuesto" class="select-input-form" @click="saveSelectedService()">
       
        <option v-for="ans in Budget" :value="ans.value">
          {{ ans.text }}
        </option>
      </select>
    </div>
    <!-- question 2 -->
    <div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 my-3">
      <h3>Horas de servicio</h3>
    </div>

    <div class="flex">
      <select v-model="selectedPresupuesto" class="select-input-form" @click="saveSelectedService()">
       
        <option v-for="ans in Hours" :value="ans.value">
          {{ ans.text }}
        </option>
      </select>
    </div>
    <!-- question 3 -->
    <div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 my-3">
      <h3>Tipo de pago</h3>
    </div>

    <div class="flex">
      <select v-model="selectedPresupuesto" class="select-input-form" @click="saveSelectedService()">
       
        <option v-for="ans in Pay" :value="ans.value">
          {{ ans.text }}
        </option>
      </select>
    </div>
  </div>
</template>
<style scoped>
.select-input-form {
  @apply w-1/3 m-auto border-2 border-gray-200 rounded p-1 px-2 text-gray-800;
}
</style>
