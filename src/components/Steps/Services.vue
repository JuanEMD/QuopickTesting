<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const selectedService = ref("");
const services = ref([
  { text: "Web App", value: "Web App" },
  { text: "Web Page", value: "Web Page" },
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
  console.log(selectedService.value);
  console.log(service.value);
};
</script>

<template>
  <div class="mt-8 p-4">
    <div
      class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 my-3"
    >
      {{ t("selectOneOrFewServices") }}
    </div>

    <div class="flex">
      <select
        v-model="selectedService"
        class="select-input-form"
        @click="saveSelectedService()"
      >
        {{
          service.value
        }}
        <option v-for="option in services" :value="option.value">
          {{ option.text }}
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
